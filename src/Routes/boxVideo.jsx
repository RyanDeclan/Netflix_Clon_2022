import YouTube from "react-youtube";
import styled from "styled-components";
import { useQuery } from "react-query";
import { IGetMovieVideo, getMovieVideo } from "../api";
import "../fonts/fonts.css";
const Igenres = {
  genres: [
    {
      id: 28,
      name: "액션",
    },
    {
      id: 12,
      name: "모험",
    },
    {
      id: 16,
      name: "애니메이션",
    },
    {
      id: 35,
      name: "코미디",
    },
    {
      id: 80,
      name: "범죄",
    },
    {
      id: 99,
      name: "다큐멘터리",
    },
    {
      id: 18,
      name: "드라마",
    },
    {
      id: 10751,
      name: "가족",
    },
    {
      id: 14,
      name: "판타지",
    },
    {
      id: 36,
      name: "역사",
    },
    {
      id: 27,
      name: "공포",
    },
    {
      id: 10402,
      name: "음악",
    },
    {
      id: 9648,
      name: "미스테리",
    },
    {
      id: 10749,
      name: "로맨스",
    },
    {
      id: 878,
      name: "공상과학",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "스릴러",
    },
    {
      id: 10752,
      name: "전쟁",
    },
    {
      id: 37,
      name: "Western",
    },
  ],
};

const MovieTitle = styled.span`
  color: white;
  font-weight: 500;
  margin-left: 0.5vw;
  ${({ title }) => {
    return title.length > 12 ? `font-size:22px;` : `font-size:33px`;
  }};
  font-family: "establishRetrosansOTF";
`;

const Imoge = styled.div`
  padding: 0px;
  margin: 0px;
  height: 100%;
  width: 100%;
  position: absolute;
  top: -15%;
`;

const Starts = styled.div`
  margin-top: 0.5vh;
  margin-left: 0.7vw;
`;

const Genres = styled.div`
  position: absolute;
  bottom: 5%;
`;

const GenresName = styled.span`
  margin-left: 0.32vw;
  font-size: 13px;
  &:first-child {
    margin-left: 0.7vw;
  }
`;

const Coco = styled.div`
  width: 100%;
  background-color: black;
  &:first-child {
    height: 22%;
    position: absolute;
    top: 0px;
    display: flex;
    align-items: center;
  }
  &:last-child {
    height: 32%;
    position: absolute;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

function BoxVideo(props) {
  const voteStars = () => {
    const result = [];
    for (let i = 1; i <= Math.floor(props.vote / 2); i++) {
      result.push(
        <svg
          key={i + "az23" + props.vote}
          style={{
            width: "0.8vw",
            height: "2vh",
          }}
          fill="gold"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
        </svg>
      );
    }
    if (props.vote % 2 >= 0.5) {
      result.push(
        <svg
          key={props.vote + "er23"}
          style={{
            width: "0.8vw",
            height: "2vh",
          }}
          fill="gold"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path d="M288 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.995 275.8 .0131 287.1-.0391L288 439.8zM433.2 512C432.1 512.1 431 512.1 429.9 512H433.2z" />
        </svg>
      );
    }
    return result;
  };
  const movieId = props.id;
  const { data: videoData, isLoading: videoLoading } = useQuery(
    ["bannermovies", movieId],
    () => getMovieVideo(movieId)
  );
  const bannerVideo = videoData?.results[0]?.key;

  let trailer = bannerVideo;

  const opts = {
    width: "100%",
    height: "360vh",
    position: "absolute",

    backgroundSize: "cover",
    backgroundPosition: "center",

    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      mute: 0,
      rel: 0,
      //rel:0을 하면 영상을 일시정지해도 동영상 더보기가 안뜸
      playlist: `${trailer}`,
    },
  };

  const _onReady = (event) => {
    event.target.playVideo();
    event.target.setVolume(60);
  };

  return (
    <>
      {videoLoading ? (
        <h1>loding~</h1>
      ) : (
        <>
          <Coco>
            <MovieTitle title={props.title}>{props.title}</MovieTitle>
          </Coco>
          <YouTube
            videoId={`${trailer}`}
            opts={opts}
            onReady={_onReady}
          ></YouTube>
          <Coco>
            <Imoge>
              <svg
                style={{
                  marginLeft: "0.6vw",
                  width: "2vw",
                  height: "3vh",
                }}
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z" />
              </svg>
              <svg
                style={{
                  width: "2vw",
                  height: "3vh",
                }}
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" />
              </svg>
              <svg
                style={{
                  width: "2vw",
                  height: "3vh",
                }}
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M128 447.1V223.1c0-17.67-14.33-31.1-32-31.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64C113.7 479.1 128 465.6 128 447.1zM512 224.1c0-26.5-21.48-47.98-48-47.98h-146.5c22.77-37.91 34.52-80.88 34.52-96.02C352 56.52 333.5 32 302.5 32c-63.13 0-26.36 76.15-108.2 141.6L178 186.6C166.2 196.1 160.2 210 160.1 224c-.0234 .0234 0 0 0 0L160 384c0 15.1 7.113 29.33 19.2 38.39l34.14 25.59C241 468.8 274.7 480 309.3 480H368c26.52 0 48-21.47 48-47.98c0-3.635-.4805-7.143-1.246-10.55C434 415.2 448 397.4 448 376c0-9.148-2.697-17.61-7.139-24.88C463.1 347 480 327.5 480 304.1c0-12.5-4.893-23.78-12.72-32.32C492.2 270.1 512 249.5 512 224.1z" />
              </svg>
            </Imoge>
            <Starts>{voteStars()}</Starts>
            <Genres>
              {props.gre
                .slice(0, 4)
                .map((x) =>
                  Igenres.genres.map((t) =>
                    t.id === x ? (
                      <GenresName key={t.id}>•{t.name}</GenresName>
                    ) : null
                  )
                )}
            </Genres>
          </Coco>
        </>
      )}
    </>
  );
}

export default BoxVideo;
