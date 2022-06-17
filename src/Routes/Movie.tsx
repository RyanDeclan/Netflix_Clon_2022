import styled from "styled-components";
import { motion, AnimatePresence, useViewportScroll } from "framer-motion";
function Movie() {
  return (
    <>
      <h2>tv</h2>
      <h1
        style={{
          fontSize: 300,
        }}
      >
        Movie
      </h1>

      <svg
        fill="white"
        style={{
          position: "absolute",
          zIndex: "2",
          width: "500",
          height: "600",
          bottom: "-300",
          right: "2",
          color: "black",
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M528 0h-480C21.5 0 0 21.5 0 48v320C0 394.5 21.5 416 48 416h192L224 464H152C138.8 464 128 474.8 128 488S138.8 512 152 512h272c13.25 0 24-10.75 24-24s-10.75-24-24-24H352L336 416h192c26.5 0 48-21.5 48-48v-320C576 21.5 554.5 0 528 0zM512 352H64V64h448V352z" />
      </svg>
    </>
  );
}

export default Movie;
