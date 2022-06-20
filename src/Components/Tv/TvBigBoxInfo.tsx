import { useQuery } from "react-query";
import styled from "styled-components";
import {
  getMovieCredits,
  getMovieDetails,
  getReleaseDates,
  getSimilarMovies,
  getTvContentRatings,
  getTvCredits,
  getTvDetail,
  getTvSimilar,
  IGetMovieCredits,
  IMovieDetail,
  IReleaseDate,
  ISimilarMovies,
  ITvCredit,
  ITvDetail,
  ITvRating,
  ITvSimilar,
  Results,
} from "../../api";
import { makeImagePath } from "../../utils";
import ErrorBoundary from "../../Routes/errorboundary";
export interface kaka {
  results: IResult[];
  id:      number;
}

export interface IResult {
  iso_3166_1: string;
  rating:     string;
}

export interface Toto {
  base: Result;
}
/* 
export interface Result {
  page:          number;
  results:       Resultss[];
  total_pages:   number;
  total_results: number;
  first_air_date: number;
  id            : number;
  title :  string;
}
 */
export interface Result {
  backdrop_path:     string;
  first_air_date:    Date;
  genre_ids:         number[];
  id:                number;
  name:              string;
  origin_country:    string[];
  original_language: string;
  original_name:     string;
  overview:          string;
  popularity:        number;
  poster_path:       null | string;
  vote_average:      number;
  vote_count:        number;
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

function TvBigBoxInfo({ base: data }: Toto) {
  const year = data.first_air_date;
  const { data: certification, isLoading: certiIsLoding } =
    useQuery<ITvRating>(
      ["certifictions", data.id],
      async () => await getTvContentRatings(data.id)
    );

  let grade = certification?.results.find((x) => x.iso_3166_1 === "US")
    ?.rating
    if (!grade) {
      grade = certification?.results.find((x) => x.iso_3166_1 === "GB")
        ?.rating
    }
  if (!grade) {
    grade = certification?.results.find((x) => x.iso_3166_1 === "FR")
      ?.rating
  }
  const { data: similarTv, isLoading } = useQuery<ITvSimilar>(
    ["similarTv", data.id],
    async () => await getTvSimilar(data.id)
  );

  const { data: tvDetails, isLoading: DeailsIsLoading } =
    useQuery<ITvDetail>(
      ["TvDetails", data.id],
      async () => await getTvDetail(data.id)
    );

  const { data: TvCredits, isLoading: CreditsIsLoading } =
    useQuery<ITvCredit>(
      ["TvCredits", data.id],
      async () => await getTvCredits(data.id)
    );

  const director = TvCredits?.crew?.find((x) => x.job === "Director");

  let runtime = tvDetails?.episode_run_time;


  const min = runtime
  let toto = data.name.toString().split(" ");

  return (
    <Wrapper>
      <ErrorBoundary>
      <Title>
        {data.name.length > 10
          ? `${toto.shift()} ${toto.shift()}` + "\n" + `${toto.join(" ")}`
          : data.name}
      </Title>
      <FistLine>
        <YearAndCertification>
          <Year>{year?.toString().slice(0, 4)}</Year>
          {grade === "TV-MA" ? (
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
          ) : grade === "TV-14" ? (
            <img
              src="https://img.icons8.com/ios/50/000000/14.png"
              style={{
                width: "1.5vw",
                height: "3vh",
                backgroundColor: "green",
                borderRadius: "0.2vw",
              }}
              alt="14"
            />
            ) : grade === "TV-PG" ? (
              <img
                src="https://img.icons8.com/ios/50/000000/12.png"
                style={{
                  width: "1.5vw",
                  height: "3vh",
                  backgroundColor: "green",
                  borderRadius: "0.2vw",
                }}
                alt="12"
              />
          ) : grade === "TV-G" ? (
            <img
             alt="ALL"
              style={{
                width: "1.5vw",
                height: "3vh",
                backgroundColor: "yellow",
                borderRadius: "0.2vw",
              }}
              src="https://img.icons8.com/external-bearicons-detailed-outline-bearicons/64/000000/external-All-miscellany-texts-and-badges-bearicons-detailed-outline-bearicons.png"
            />
            ) : grade === "TV-Y" ? (
              <img
               alt="ALL"
                style={{
                  width: "1.5vw",
                  height: "3vh",
                  backgroundColor: "yellow",
                  borderRadius: "0.2vw",
                }}
                src="https://img.icons8.com/external-bearicons-detailed-outline-bearicons/64/000000/external-All-miscellany-texts-and-badges-bearicons-detailed-outline-bearicons.png"
              />
          ) : null}
           <RunTime>{min ? `${min}분` : null}</RunTime> 
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
          {TvCredits?.cast.slice(0, 2).map((x) => (
            <BoxTow key={x.id} bgphoto={makeImagePath(x.profile_path!, "w500")}>
              <ActName>{x.name}</ActName>
            </BoxTow>
          ))}
        </Cast>
      </OverviewAndCastBox>

      <SimilarTitle>비슷한 콘텐츠</SimilarTitle>
      <Similar>
        {similarTv?.results.slice(0, 16).map((x) => (
          <Box key={x.id} bgphoto={makeImagePath(x.poster_path, "w500")}></Box>
        ))}
      </Similar>
      </ErrorBoundary>
    </Wrapper>
  );
}

export default TvBigBoxInfo;