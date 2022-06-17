import YouTube from "react-youtube";
import styled from "styled-components";

import { useQuery } from "react-query";
import { IGetMovieVideo, getMovieVideo } from "../api";

const TopCover = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 3),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  position: absolute;
  width: 100%;
  height: 4.9%;
`;

const BottomCover = styled.div`
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 4),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0)
  );

  position: absolute;
  width: 100%;
  height: 7%;
  bottom: 69%;
`;

const Title = styled.div`
  font-size: 20px;
`;

function BigBoxVideo(props) {
  const movieId = props.id;
  const { data: videoData, isLoading: videoLoading } = useQuery(
    ["bannermovies", movieId],
    () => getMovieVideo(movieId)
  );

  const bannerVideo = videoData?.results[0]?.key;

  let trailer = bannerVideo;

  const opts = {
    width: "100%",
    height: "500vh",
    position: "absolute",

    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      mute: 0,
      rel: 0,
      playlist: `${trailer}`,
    },
  };

  const _onReady = (event) => {
    event.target.playVideo();
    event.target.setVolume(50);
  };

  return (
    <>
      <TopCover></TopCover>

      <YouTube videoId={`${trailer}`} opts={opts} onReady={_onReady} />

      <BottomCover></BottomCover>
    </>
  );
}

export default BigBoxVideo;
