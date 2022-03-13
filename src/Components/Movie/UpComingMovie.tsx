import { useQuery } from "react-query";
import { getUpcomingMovies, IGetUpcomingMovie } from "../../api";
import { AnimatePresence, motion, useViewportScroll } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  height: 200px;
  margin-top: 400px;
`;

const Row = styled(motion.div)`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(7, 1fr);
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;
`;

const Box = styled.div`
  width: 100%;
  height: 50%;
  background-color: white;
`;

//아 파일이름하고 function을 같게 해야하구나
function UpComginMovie() {
  return (
    <Wrapper>
      <Row>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </Row>
    </Wrapper>
  );
}

export default UpComginMovie;
