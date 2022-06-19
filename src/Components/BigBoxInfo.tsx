import { useQuery } from "react-query";
import styled from "styled-components";
import {
  getMovieCredits,
  getMovieDetails,
  getReleaseDates,
  getSimilarMovies,
  IGetMovieCredits,
  IMovieDetail,
  IReleaseDate,
  ISimilarMovies,
} from "../api";
import "../fonts/fonts.css";
import { makeImagePath } from "../utils";
import ErrorBoundary from "../Routes/errorboundary";
export interface KaKa {
  certi: Resultss;
}

export interface Resultss {
  iso_3166_1: string;
  release_dates: ReleaseDate[];
}

export interface ReleaseDate {
  certification: string;
  iso_639_1: ISO639_1;
  release_date: Date;
  type: number;
  note?: string;
}

export enum ISO639_1 {
  De = "de",
  Empty = "",
  Fr = "fr",
}
export interface Toto {
  soso: Result;
}

export interface Result {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: Date;
  genre_ids: number[];
  id: number;
  original_title: string;

  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export enum OriginalLanguage {
  En = "en",
  Sv = "sv",
}

export interface Qoqo {
  x: Fnfn;
}

export interface Fnfn {
  iso_3166_1: string;
}

const Wrapper = styled.div`
  margin-left: 2vw;
  margin-right: 2vw;
  height: 100%;
`;

const YearAndCertification = styled.div`
  display: flex;
  align-items: center;
`;

const Year = styled.div`
  margin-right: 0.8vw;
`;

const Title = styled.span`
  font-size: 3.0em;
  font-weight: 800;
  position: absolute;
  top: 16%;
  font-family: "twaysky";
  max-width: 60%;
  white-space: pre-wrap;
`;

const RunTime = styled.span`
  margin-left: 1vw;
`;

const Overview = styled.p`
  font-family: "GowunDodum-Regular";
  font-size: 1em;
  max-width: 60%;
`;

const Similar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 3vh;
  width: 100%;
  height: 60%;
  gap: 1vw;
`;

const SimilarTitle = styled.div`
  font-family: "twaysky";
  margin-top: 0.5vh;
  font-size: 1.5em;
`;

const Box = styled.div<{ bgphoto: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center;
`;

const Cast = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  width: 35%;
  height: 83%;
  gap: 1vw;
`;

const BoxTow = styled.div<{ bgphoto: string }>`
  width: 100%;
  height: 77%;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center;
  border-radius: 2%;
  display: flex;
  align-items: end;
`;

const OverviewAndCastBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  height: 17%;
  padding-top: 4vh;
`;

const ActName = styled.div`
  background-color: black;
  color: white;
  width: 100%;
  text-align: center;
  font-family: "LeferiPoint-WhiteObliqueA";
`;

const FistLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1vh;
`;

function BigBoxInfo({ soso: data }: Toto) {
  const date = data.release_date;
  const { data: certification, isLoading: certiIsLoding } =
    useQuery<IReleaseDate>(
      ["certifictions", data.id],
      async () => await getReleaseDates(data.id)
    );

  let grade = certification?.results.find((x) => x.iso_3166_1 === "US")
    ?.release_dates[0].certification;
    if (!grade) {
      grade = certification?.results.find((x) => x.iso_3166_1 === "GB")
        ?.release_dates[0].certification;
    }
  if (!grade) {
    grade = certification?.results.find((x) => x.iso_3166_1 === "FR")
      ?.release_dates[0].certification;
  }
  if (!grade) {
    grade = certification?.results.find((x) => x.iso_3166_1 === "US")
      ?.release_dates[1].certification;
  }
  
  const { data: similarMovie, isLoading } = useQuery<ISimilarMovies>(
    ["similarMovie", data.id],
    async () => await getSimilarMovies(data.id)
  );

  const { data: MovieDetails, isLoading: DeailsIsLoading } =
    useQuery<IMovieDetail>(
      ["MovieDetails", data.id],
      async () => await getMovieDetails(data.id)
    );

  const { data: MovieCredits, isLoading: CreditsIsLoading } =
    useQuery<IGetMovieCredits>(
      ["MovieCredits", data.id],
      async () => await getMovieCredits(data.id)
    );

  const director = MovieCredits?.crew?.find((x) => x.job === "Director");

  let runtime = MovieDetails?.runtime;

  let hour = runtime! / 60;
  const min = runtime! % 60;
  let toto = data.title.toString().split(" ");

  return (
    <Wrapper>
      <ErrorBoundary>
      <Title>
        {data.title.length > 10
          ? `${toto.shift()} ${toto.shift()}` + "\n" + `${toto.join(" ")}`
          : data.title}
      </Title>
      <FistLine>
        <YearAndCertification>
          <Year>{date?.toString().slice(0, 4)}</Year>
          {grade === "R" ? (
            <img
              src="https://img.icons8.com/ios/50/000000/18.png"
              style={{
                width: "1.5vw",
                height: "3vh",
                backgroundColor: "red",
                borderRadius: "0.2vw",
                
              }}
              alt="18"
            />
          ) : grade === "PG-13" ? (
            <img
              src="https://img.icons8.com/ios/50/000000/12.png"
              style={{
                width: "1.5vw",
                height: "3vh",
                backgroundColor: "green",
                borderRadius: "0.2vw",
              }}
              alt="13"
            />
          ) : grade === "PG" ? (
            <img
             alt="pg"
              style={{
                width: "1.5vw",
                height: "3vh",
                backgroundColor: "yellow",
                borderRadius: "0.2vw",
              }}
              src="https://img.icons8.com/external-bearicons-detailed-outline-bearicons/64/000000/external-All-miscellany-texts-and-badges-bearicons-detailed-outline-bearicons.png"
            />
          ) : null}
          <RunTime>{`${parseInt(hour.toString())}시간  ${min}분`}</RunTime>
        </YearAndCertification>
        {director ? (
          <div
            style={{
              fontSize: "0.93em",
              fontFamily: "LeferiPoint-WhiteObliqueA",
            }}
          >
            감독 : {director.name}
          </div>
        ) : null}
      </FistLine>

      <OverviewAndCastBox>
        <Overview>{data.overview ? data.overview : "준비중 입니다."}</Overview>
        <Cast>
          {MovieCredits?.cast.slice(0, 2).map((x) => (
            <BoxTow key={x.id} bgphoto={makeImagePath(x.profile_path, "w500")}>
              <ActName>{x.name}</ActName>
            </BoxTow>
          ))}
        </Cast>
      </OverviewAndCastBox>

      <SimilarTitle>비슷한 콘텐츠</SimilarTitle>
      <Similar>
        {similarMovie?.results.slice(0, 16).map((x) => (
          <Box key={x.id} bgphoto={makeImagePath(x.poster_path, "w500")}></Box>
        ))}
      </Similar>
      </ErrorBoundary>
    </Wrapper>
  );
}

export default BigBoxInfo;
