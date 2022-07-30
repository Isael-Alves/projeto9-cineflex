import styled from "styled-components";
import React, { useEffect } from "react";
import axios from "axios";

export default function SessionsScreen({ setPhase }) {
  const [seats, setSeats] = React.useState({});
  const [name, setName] = React.useState('');
  const [cpf, setCpf] = React.useState('');

  useEffect(({ setPhase }) => {
    setPhases("Selecione o(s) assento(s)");

    const seatsAPI = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/movies/${filmeId}/showtimes`
    );

    seatsAPI.then((answer) => {
      setSeats(answer.data);
    });
    
  }, []);

  return (
    <>
      <AssentosBox>
        <li>01</li>
      </AssentosBox>
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
        <section>
          <div>
            <h4>Nome do comprador:</h4>
            <input></input>
          </div>
          <div>
            <h4>CPF do comprador:</h4>
            <input></input>
          </div>
        </section>
        <Button>Reservar assento(s)</Button>
      </form>
    </>
  );
}

const AssentosBox = styled.ul`
  margin-top: 160px;
  width: 325px;
  display: flex;
  flex-wrap: wrap;

  li {
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #c3cfd9;
    border: 1px solid #808f9d;
    border-radius: 12px;
  }
`;
const Button = styled.div`
  margin: 0 auto;
  width: 225px;
  height: 42px;

  background: #e8833a;
  border-radius: 3px;
`;

const Subtitle = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  div {
    width: 25px;
    height: 25px;

    border: 1px solid #1aae9e;
    border-radius: 17px;
  }

  .selected {
    background-color: #8dd7cf;
  }

  .available {
    background-color: #c3cfd9;
  }

  .unavailable {
    background-color: #c3cfd9;
  }
`;
