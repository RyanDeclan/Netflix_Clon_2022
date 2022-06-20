import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { ISearch, multiSearch } from "../api";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { makeImagePath } from "../utils";
import { useEffect, useState } from "react";
import BoxVideo from "./boxVideo";



const Wrapper = styled.div`
  
  height: 180vh;
  overflow: hidden;
  gap: 20px;
`;

const Slider = styled.div`

  position: relative;
  top: 15vh;
  z-index:2;
  `;

  const Row = styled(motion.div)`
  display: grid;
  gap: 0.5vw;
  grid-template-columns: repeat(6, 1fr);
  margin-bottom: 5px;
  position: absolute;
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 5vh;
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
  height: 41vh;
`;

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    y: -80,
    scale: 1.3,
    zIndex:5,
    transition: { delay: 1, type: "tween", duration: 0.2 },
  },
};

const Info = styled(motion.div)`
  opacity: 0;
  position: relative;
  width: 100%;
  height: 101%;
  bottom: 0;
  z-index: 99;
  h4 {
    text-align: center;
    font-size: 10px;
  }
`;

const infoVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    opacity: 1,
    transition: { delay: 1.4, type: "tween", duration: 0.8 },
  },
};

const offset = 6;



function Search() {
  const location = useLocation();
  // urlserchparasm 는 파싱하는데 도움을 준다.
  const keyword = new URLSearchParams(location.search).get("keyword")!;
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

  const { data, isLoading } = useQuery<ISearch>(
    ["Search"],
    ()=> multiSearch(keyword),
  
  );
  useEffect(() => {
    const Delete = data?.results.findIndex(x=> x.poster_path === null )!
    console.log(Delete)
    if(Delete !== -1){
      data?.results.splice(Delete, 1)
    }
}, [data]);
  

  return (
  
  <Wrapper>
    <Slider>
            
            <AnimatePresence
             
            >
              <Row
                
              >
                {data?.results.find(x=> x.poster_path)}
                {data?.results
                  .slice(0, offset * 2 + offset)
                  .map((movie) => (
                    <Box
                      layoutId={movie.id + ""}
                      key={movie.id}
                      whileHover="hover"
             
                      initial="normal"
                      variants={boxVariants}
                   
                      transition={{ type: "tween" }}
                      bgphoto={makeImagePath(movie.poster_path!, "w500")}
                    >
                      <Info
                        initial="normal"
                        whileHover="hover"
                        transition={{ type: "tween" }}
                        key={movie.id + "bbq"}
                        variants={infoVariants}
                        
          
                      >
                        {hovers ? (
                          nums === movie.id ? (
                            <BoxVideo
                              id={movie.id}
                              gre={movie.genre_ids}
                              title={movie.title}
                              vote={movie.vote_average}
                            ></BoxVideo>
                          ) : null
                        ) : null}
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
            
          </Slider>
  </Wrapper>
  
  );
}

export default Search;
