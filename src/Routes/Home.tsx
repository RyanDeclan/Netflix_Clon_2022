import { motion, AnimatePresence, useViewportScroll } from "framer-motion";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useMatch } from "react-router-dom";
import styled from "styled-components";
import {
  getMovies,
  IGetMoviesResult,
  getMovieVideo,
  IGetMovieVideo,
} from "../api";
import { makeImagePath } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tpp from "./video";
import ErrorBoundary from "./errorboundary";
import UpComginMovie from "../Components/Movie/UpComingMovie";

const Wrapper = styled.div`
  background: transparent;
  padding-bottom: 300px;
  height: 200vh;
  overflow: hidden;
  }
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  }
`;

const Banner = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10px;
  background: transparent;
  z-index: 15;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 10px;
`;
const Overview = styled.p`
  font-size: 25px;
  width: 40%;
`;

const Slider = styled.div`
  position: relative;
  top: -80px;
  
  }
`;

const Row = styled(motion.div)`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 5px;
  position: absolute;
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 50px;
`;

const Box = styled(motion.div)<{ bgphoto: string }>`
  font-size: 64px;

  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center;
  height: 390px;
`;

const Box2 = styled(motion.div)``;

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    y: -80,
    scale: 1.3,

    transition: { delay: 0.5, type: "tween", duration: 0.2 },
  },
};

const arrowVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    x: 8,
    y: 10,
    scale: 1.1,
    ransition: { delay: 0.2, type: "tween", duration: 0.3 },
  },
};

const rowVariants = {
  hidden: (isBack: boolean) => ({
    x: isBack ? -window.outerWidth + 6 : window.outerWidth - 6,
  }),
  visible: {
    x: 0,
  },
  exit: (isBack: boolean) => ({
    x: isBack ? window.outerWidth - 6 : -window.outerWidth + 6,
  }),
};

const Info = styled(motion.div)`
  padding: 20px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  position: relative;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 10px;
  }
`;

const infoVariants = {
  hover: {
    opacity: 1,
    transition: { delay: 0.5, type: "tween", duration: 0.2 },
  },
};

const BigMovie = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.black.lighter};
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
`;

const BigCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 400px;
  border-radius: 15px;
  overflow: hidden;
`;

const BigTitle = styled.h3`
  color: ${(props) => props.theme.white};
  padding: 25px;
  position: relative;
  top: -100px;
  font-size: 40px;
  font-weight: 400;
`;

const BigOverview = styled.p`
  padding: 20px;
  position: relative;
  top: -80px;
  color: ${(props) => props.theme.white};
`;

const offset = 7;

function Home() {
  const navigatemd = useNavigate();
  const bigMovieMatch = useMatch("/movies/:movieId");
  const { scrollY } = useViewportScroll();
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    async () => await getMovies()
  );

  const movieId = data?.results[0].id;

  const { data: videoData, isLoading: videoLoading } = useQuery<IGetMovieVideo>(
    ["movies", movieId],
    () => getMovieVideo(movieId)
  );

  const apple = videoData?.results[0].key;

  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [back, setBack] = useState(false);
  const incraseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      setBack(false);
      const totalMovies = data?.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const decreaseIndex = () => {
    if (data) {
      if (leaving) return;
      setBack(true);
      toggleLeaving();
      const totalMovies = data?.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);

  const onBoxClicked = (movieId: number) => {
    navigatemd(`/movies/${movieId}`);
  };
  const onOverlayClick = () => navigatemd("/");
  const clickedMovie =
    bigMovieMatch?.params.movieId &&
    data?.results.find(
      (movie) => movie.id + "" === bigMovieMatch.params.movieId
    );

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading....</Loader>
      ) : (
        <>
          <ErrorBoundary>
            <Banner>
              <Tpp apple={apple}></Tpp>
            </Banner>
          </ErrorBoundary>
          <Slider>
            <AnimatePresence
              initial={false}
              onExitComplete={toggleLeaving}
              custom={back}
            >
              <motion.svg
                whileHover="hover"
                initial="normal"
                variants={arrowVariants}
                fill="currentColor"
                viewBox="0 0 256 512"
                style={{
                  position: "absolute",
                  zIndex: "5",
                  width: "50",
                  height: "60",
                  bottom: "-300",
                }}
                xmlns="http://www.w3.org/2000/svg"
                transition={{ type: "tween" }}
                onClick={decreaseIndex}
              >
                <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"></path>
              </motion.svg>
              <Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key={index}
                transition={{ type: "tween", duration: 1 }}
                custom={back}
              >
                {data?.results
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box
                      layoutId={movie.id + ""}
                      key={movie.id}
                      whileHover="hover"
                      initial="normal"
                      variants={boxVariants}
                      onClick={() => onBoxClicked(movie.id)}
                      transition={{ type: "tween" }}
                      bgphoto={makeImagePath(movie.poster_path, "w500")}
                    >
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
              <motion.svg
                whileHover="hover"
                initial="normal"
                variants={arrowVariants}
                fill="currentColor"
                viewBox="0 0 256 512"
                style={{
                  position: "absolute",
                  zIndex: "30",
                  width: "50",
                  height: "60",
                  bottom: "-300",
                  right: "2",
                }}
                xmlns="http://www.w3.org/2000/svg"
                transition={{ type: "tween" }}
                onClick={incraseIndex}
              >
                <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
              </motion.svg>
            </AnimatePresence>
          </Slider>
          <UpComginMovie></UpComginMovie>
          <AnimatePresence>
            {bigMovieMatch ? (
              <>
                <Overlay
                  onClick={onOverlayClick}
                  exit={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
                <BigMovie
                  style={{ top: scrollY.get() + 100 }}
                  layoutId={bigMovieMatch.params.movieId}
                >
                  {clickedMovie && (
                    <>
                      <BigCover
                        style={{
                          backgroundImage: `linear-gradient(to top, black, transparent ), url(${makeImagePath(
                            clickedMovie.backdrop_path,
                            "w500"
                          )})`,
                        }}
                      />
                      <BigTitle>{clickedMovie.title}</BigTitle>
                      <BigOverview>{clickedMovie.overview}</BigOverview>
                    </>
                  )}
                </BigMovie>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Wrapper>
  );
}

export default Home;
