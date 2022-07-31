import styled from "styled-components";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import load from "../assets/img/tenor.gif";
import axios from "axios";

export default function SessionsScreen({ setPhases }) {
  setPhases("Selecione o(s) assento(s)");
  const params = useParams();
  const { sessaoId } = params;
  const [seats, setSeats] = React.useState(undefined);
  const [name, setName] = React.useState("");
  const [cpf, setCpf] = React.useState("");

  useEffect(() => {
    const seatsAPI = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessaoId}/seats`
    );

    seatsAPI.then((answer) => {
      setSeats(answer.data);
    });
  }, []);

  function structuringSeats() {
    if (seats !== undefined) {
      const places = seats.seats;
      return (
        <AssentosBox>
          {places.map((place) => (
            <li key={place.id}>{place.name}</li>
          ))}
        </AssentosBox>
      );
    }
    return <Load src={load} alt="load" />;
  }

  function Footer() {
    if (seats !== undefined) {
      console.log(seats);
      const { movie, day, name } = seats;
      return (
        <FooterContainer>
          <div>
            <img src={movie.posterURL} alt={movie.title} />
          </div>
          <section>
            <h3>{movie.title}</h3>
            <h3>
              {day.weekday} - {name}
            </h3>
          </section>
        </FooterContainer>
      );
    } else {
      return <FooterContainer></FooterContainer>;
    }
  }

  return (
    <>
      {structuringSeats()}
      <Subtitle>
        <li>
          <div className="selected"></div>
          <h5>Selecionado</h5>
        </li>
        <li>
          <div className="available"></div>
          <h5>Disponível</h5>
        </li>
        <li>
          <div className="unavailable"></div>
          <h5>Indisponível</h5>
        </li>
      </Subtitle>
      <form>
        <Form>
          <div>
            <h4>Nome do comprador:</h4>
            <input type="text" placeholder="Digite seu nome..." />
          </div>
          <div>
            <h4>CPF do comprador:</h4>
            <input type="text" placeholder="Digite seu CPF..." />
          </div>
        </Form>
        <Button>Reservar assento(s)</Button>
      </form>
      {Footer()}
    </>
  );
}

const AssentosBox = styled.ul`
  width: 325px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  li {
    width: 26px;
    height: 26px;
    margin-right: 5px;
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #c3cfd9;
    border: 1px solid #808f9d;
    border-radius: 12px;
  }
`;

const Subtitle = styled.ul`
  width: 250px;

  display: flex;
  justify-content: space-between;
  padding: 10px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div {
    width: 25px;
    height: 25px;
    margin-bottom: 4px;

    border: 1px solid #1aae9e;
    border-radius: 17px;
  }

  h5 {
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.013em;

    color: #4e5a65;
  }

  .selected {
    background-color: #8dd7cf;
  }

  .available {
    background-color: #c3cfd9;
  }

  .unavailable {
    background-color: #fbe192;
  }
`;

const Form = styled.section`
  h4 {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    color: #293845;
  }

  input {
    width: 327px;
    height: 51px;
    padding: 10px;

    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
  }

  ::placeholder {
    color: #afafaf;
  }
`;

const Load = styled.img`
  margin: 0 auto;
  width: 300px;
  height: 250px;
`;

const Button = styled.div`
  margin: 0 auto;
  margin-top: 35px;
  width: 225px;
  height: 42px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #e8833a;
  color: #ffffff;
  border-radius: 3px;
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
    width: 73px;
    height: 98px;
    margin-right: 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
  }
  img {
    width: 58px;
    height: 84px;
  }
  h3 {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;

    color: #293845;
  }
`;
