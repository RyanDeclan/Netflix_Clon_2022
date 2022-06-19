import YouTube from "react-youtube";
import styled from "styled-components";
import {client} from "../index";

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
  // api를 사용할 필요없이 바로 쿼리키를 통해서 가져옴 
  const data = client.getQueryData(["boxPreViewMovie",Number(`${movieId}`)])
  

  const bannerVideo = data?.results[0]?.key;

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

      <YouTube videoId={`${null}`} opts={opts} onReady={_onReady} />

      <BottomCover></BottomCover>
    </>
  );
}

export default BigBoxVideo;
