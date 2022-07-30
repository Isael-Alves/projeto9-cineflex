import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";
import load from "../assets/img/tenor.gif";

export default function TimeScreen({ setPhases }) {
  const params = useParams();
  const filmeId = params.filmeId;
  const navigate = useNavigate();
  const [dados, setDados] = React.useState(undefined);

  useEffect(() => {
    setPhases("Selecione o horário");

    const movieAPI = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/movies/${filmeId}/showtimes`
    );

    movieAPI.then((answer) => {
      setDados(answer.data);
    });

  }, []);

  function structuringSessionsDay() {
    if (dados !== undefined) {
      const days = dados.days;
      
      return days.map((day, i) => {
        
        const { date, showtimes, weekday } = day;
        return (
          <Sessions key={i}>
            <h2>
              {weekday} - {date}
            </h2>
            <Schedules>
              {showtimes.map((times, i) => {
                return (
                  <div key={i} onClick={() => navigate(`assentos/${times.id}`)} >
                    {times.name}
                  </div>
                );
              })}
            </Schedules>
          </Sessions>
        );
      });
    }
    return <video>{load}</video>;
  }

  function Footer() {
    if (dados !== undefined) {
      const { posterURL, title } = dados;
      return (
        <FooterContainer>
          <div>
            <img src={posterURL} alt={title} />
          </div>
          <h3>{title}</h3>
        </FooterContainer>
      );
    } else {
      return <FooterContainer></FooterContainer>;
    }
  }

  const renderFooter = Footer();
  const renderSessions = structuringSessionsDay();

  return (
    <>
      <Timelist>{renderSessions}</Timelist>
      {renderFooter}
    </>
  );
}

const Timelist = styled.ul`
  width: 88%;
  margin-bottom: 95px;
`;

const Sessions = styled.li`
  margin-bottom: 23px;
  
  h2 {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.02em;

    color: #293845;
  }
`;

const Schedules = styled.section`
  display: flex;
  margin-top: 20px;

  div {
    width: 80px;
    height: 40px;
    margin-right: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: #ffffff;

    background: #e8833a;
    border-radius: 3px;
  }
`;

const FooterContainer = styled.footer`
  position: fixed;
  width: 100%;
  height: 117px;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 10px 14px;
  background-color: #dfe6ed;
  border: 1px solid #9eadba;

  div {
    width: 64px;
    height: 89px;
    margin-right: 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
  }
  img {
    width: 53px;
    height: 77px;
  }
  h3 {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;

    color: #293845;
  }
`;
