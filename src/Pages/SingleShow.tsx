import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getShowsData } from "../Redux/ShowsData";
import { AppDispatch, RootState } from "../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import RecomendedShows from "../components/RecomendedShows";
export default function SingleShow() {
  const { id } = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const shows = useSelector((store: RootState) => store.Shows);

  useEffect(() => {
    dispatch(getShowsData());
  }, [id]);

  const singleShow = shows.data.find((show) => show.id === Number(id));

  return (
    <>
      <SingleShowParentComponent bgimage={singleShow?.image.original}>
        <div className="img-textParent">
          <div className="imageParent">
            <img src={singleShow?.image.original} alt="" />
          </div>

          <div className="textSide">
            <h2>{singleShow?.name}</h2>
            <div className="genresPar">
              <h3>Genre:</h3>
              <div className="genres">
                {singleShow?.genres.map((genre) => {
                  return <p key={genre}>{genre}</p>;
                })}
              </div>
            </div>
            <div className="description">
              <h3>story:</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              alias corporis, ab laudantium repellendus sunt natus illo nihil!
              A, velit? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Odit, fugit! Lorem ipsum dolor sit amet.
            </div>
            <div className="durationPar">
              <h3>duration:</h3>
              <p>{singleShow?.runtime} Min </p>
            </div>
          </div>
        </div>
      </SingleShowParentComponent>

      <RecomendedShows />
    </>
  );
}

const SingleShowParentComponent = styled.div<{ bgimage: string | undefined }>`
  position: relative;
  display: flex;
  align-items: center;
  background-image: url(${(props) => props.bgimage});
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, black 100%);
  }

  .img-textParent {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    .imageParent {
      height: 60vh;
      border-radius: 10px;
      img {
        height: 100%;
        border-radius: 10px;
      }
    }

    .textSide {
      padding-left: 30px;
      padding-top: 10px;
      width: 50%;
      background-color: #0000008f;
      box-shadow: 0px 0px 50px gray;
      border-radius: 5px;
      margin-left: 10px;

      h2 {
        font-size: 30px;
        margin-bottom: 20px;
        color: #ff4343;
      }

      .genresPar {
        h3 {
          margin-bottom: 10px;
          color: #ff4343;
          border-bottom: 2px solid #ff4343;
          width: max-content;
          margin-bottom: 10px;
        }
        .genres {
          display: flex;
          gap: 10px;

          p {
            border: 2px solid #ff4343;
            padding: 5px;
            border-radius: 10px;
            font-weight: bold;
            color: #ff4343;
          }
        }
        margin-bottom: 20px;
      }

      .description {
        h3 {
          border-bottom: 2px solid #ff4343;
          width: max-content;
          margin-bottom: 10px;
        }
        margin-bottom: 10px;
        font-weight: bold;
        line-height: 30px;
        color: #ff4343;
      }
      .durationPar {
        h3 {
          margin-bottom: 10px;
          color: #ff4343;
          border-bottom: 2px solid #ff4343;
          width: max-content;
          margin-bottom: 10px;
        }
        p {
          color: #ff4343;
        }
      }
    }
  }
`;
