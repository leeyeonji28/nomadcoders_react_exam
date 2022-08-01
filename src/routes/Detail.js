import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../components/Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieD, setMovieD] = useState();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieD(json.data.movie);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.wrap}>
          <div>
            <img
              src={movieD.large_cover_image}
              alt=""
              className={styles.movie_img}
            />
            <a href={movieD.url} className={styles.movie_link}>
              Go To Site
            </a>
          </div>
          <div>
            <h1 className={styles.title}>{movieD.title}</h1>
            <h3>{movieD.year}</h3>
            <h3 className={styles.star}>⭐️ {movieD.rating}</h3>
            <p className={styles.info}>{movieD.description_full}</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
