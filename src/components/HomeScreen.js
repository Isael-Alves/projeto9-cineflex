import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import load from "../assets/img/tenor.gif";
import axios from "axios";

export default function HomeScreen() {
 
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const moviesAPI = axios.get(
      "https://mock-api.driven.com.br/api/v7/cineflex/movies"
    );

    moviesAPI.then((answer) => {
      setMovies(answer.data);
    });
  }, []);

  function structuringMovie() {
    if (movies.length > 0) {
      return movies.map(value => {
        const { id, posterURL, title } = value;
        return (
          <Movie
            id={id}
            key={id}
            onClick={() => navigate(`../sessoes/${id}`)}>
            <img src={posterURL} alt={title} />
          </Movie>
        );
      });
    }
    return <Load src={load} alt="load" />
  }
  const moviePost = structuringMovie();
  return (
    <>
      <Movielist>
        {moviePost}
      </Movielist>
    </>
  );
}

const Movielist = styled.ul`
  width: 86%;
  display: flex;
  flex-wrap: wrap;
`;

const Movie = styled.li`
  width: 145px;
  height: 209px;
  margin-right: 15px;
  margin-bottom: 11px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  img {
    width: 129px;
    height: 193px;
  }
`;

const Load = styled.img`
margin: 0 auto;
width: 300px;
height: 250px;
`;