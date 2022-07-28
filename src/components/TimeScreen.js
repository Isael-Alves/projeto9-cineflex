import styled from "styled-components";
import filme from "../assets/img/image 3.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TimeScreen({setPhases}) {
  const params = useParams();
  const id = params.filmeId;
  const navigate = useNavigate();
  useEffect(() => {
    setPhases("Selecione o horário");
    const moviesAPI = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`
    );

    moviesAPI.then((answer) => {
      console.log(answer.data);
    });
  }, []);

  return (
    <>
      <Timelist>
        <Sessions>
          <h2>Quinta-feira - 24/06/2021</h2>
          <Schedules>
            <div onClick={() => navigate("assentos")}>14:00</div>
            <div onClick={() => navigate("assentos")}>14:00</div>
          </Schedules>
        </Sessions>
        <Sessions>
          <h2>Quinta-feira - 24/06/2021</h2>
          <Schedules>
            <div onClick={() => navigate("assentos")}>14:00</div>
            <div onClick={() => navigate("assentos")}>14:00</div>
          </Schedules>
        </Sessions>
      </Timelist>
      <Footer>
        <div>
          <img src={filme} alt="" />
        </div>
        <h3>Enola Holmes</h3>
      </Footer>
    </>
  );
}

const Timelist = styled.ul`
  margin-top: 175px;
  width: 88%;
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

const Footer = styled.footer`
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
    width: 48px;
    height: 72px;
  }
  h3 {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;

    color: #293845;
  }
`;
