import { useQuery } from "react-query";
import { getUpcomingMovies, IGetUpcomingMovie } from "../../api";
import { AnimatePresence, motion, useViewportScroll } from "framer-motion";
import styled from "styled-components";
import { makeImagePath } from "../../utils";
import { useState } from "react";
import BoxVideo from "../../Routes/boxVideo";

//position : relative를 해줘야 밑에 스크롤이 안 생긴다.

const Wrapper = styled.div`
  height: 122vh;
 
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 22px;

`;

const Info = styled(motion.div)`
  opacity: 0;
  position: relative;
  width: 100%;
  height: 101%;
  bottom: 0;

  h4 {
    text-align: center;
    font-size: 10px;
  }
`;

const UpComingTitle = styled.div`
  position:absolute;
  margin-top: 39vh;
  font-size: 2.3em;
  font-family: "twaysky";
  margin-left: 3%;
  
  width:100%;


`;
// 슬라이드할때 동일선상에서 교체 시킬려면 position : absolute를 해줘야한다.
const Row = styled(motion.div)`
  position: absolute;
  display: grid;
  gap: 0.5vw;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 5vh;
 
`;

const Box = styled(motion.div)<{ bgphoto: string }>`
  
  height: 41vh;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center;

`;



const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    y: -80, 
    scale: 1.3,
    zIndex:2,
    transition: { delay: 1, type: "tween", duration: 0.2 },
  },
};
const offset = 6;

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
//아 파일이름하고 function을 같게 해야하구나
function UpComginMovie() {
  const { data, isLoading } = useQuery<IGetUpcomingMovie>(
    ["movies", "upcoming"],
    async () => await getUpcomingMovies()
  );
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [back, setBack] = useState(false);
  const toggleLeaving = () => setLeaving((prev) => !prev);
  const incraseIndex = () => {
    if (data) {
      if (leaving) return;
      setLeaving(true);
      setBack(false);
      const totalMovies = data?.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const decreaseIndex = () => {
    if (data) {
      if (leaving) return;
      setLeaving(true);
      setBack(true);

      const totalMovies = data?.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }
  };

  const [hovers, setHovers] = useState(false);
  const [nums, setnums] = useState(0);
  const hoverBox = () => {
    setHovers(true);
  };
  const hoverNum = (num: number) => {
    setnums(num);
  };
  const hoverOut = () => {
    setHovers(false);
  };

  const [onHover, setOnHover] = useState(false);
  const onHovers = () => {
    setOnHover(true);
  };
  const outHovers = () => {
    setOnHover(false);
  };

  const infoVariants = {
    normal: {
      scale: 1,
    },
    hover: {
      opacity: 1,
      transition: { delay: 1.4, type: "tween", duration: 0.8 },
    },
  };

  return (
    <>
      <UpComingTitle>개봉예정작</UpComingTitle>
      <Wrapper>
        <motion.svg
          whileHover="hover"
          initial="normal"
          variants={arrowVariants}
          fill="currentColor"
          viewBox="0 0 256 512"
          style={{
            position: "absolute",
            zIndex: "1",
            width: "50",
            height: "60",
          }}
          xmlns="http://www.w3.org/2000/svg"
          transition={{ type: "tween" }}
          onClick={decreaseIndex}
        >
          <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"></path>
        </motion.svg>
        <AnimatePresence
          initial={false}
          onExitComplete={toggleLeaving}
          custom={back}
        >
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
              .slice(offset * index, offset * index + offset)
              .map((x) => (
                <Box
                  layoutId={x.id + "33"}
                  key={x.id + "koko"}
                  whileHover="hover"
                  onHoverStart={onHovers}
                  onHoverEnd={outHovers}
                  initial="normal"
                  variants={boxVariants}
                  transition={{ type: "tween" }}
                  bgphoto={makeImagePath(x.poster_path, "w500")}
                >
                  <Info
                    initial="normal"
                    whileHover="hover"
                    transition={{ type: "tween" }}
                    key={x.id + "bbsq"}
                    variants={infoVariants}
                    onMouseEnter={() => {
                      hoverNum(x.id);
                      hoverBox();
                    }}
                    onMouseLeave={hoverOut}
                  >
                    {hovers ? (
                      nums === x.id ? (
                        <BoxVideo
                          id={x.id}
                          gre={x.genre_ids}
                          title={x.title}
                          vote={x.vote_average}
                        ></BoxVideo>
                      ) : null
                    ) : null}
                  </Info>
                </Box>
              ))}
          </Row>
        </AnimatePresence>
        <motion.svg
          whileHover="hover"
          initial="normal"
          variants={arrowVariants}
          fill="currentColor"
          viewBox="0 0 256 512"
          style={{
            position: "absolute",
            zIndex: "1",
            width: "50",
            height: "60",
            right: "2",
          }}
          xmlns="http://www.w3.org/2000/svg"
          transition={{ type: "tween" }}
          onClick={incraseIndex}
        >
          <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
        </motion.svg>
      </Wrapper>
    </>
  );
}

export default UpComginMovie;
