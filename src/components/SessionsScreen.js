import styled from "styled-components";

export default function SessionsScreen() {
  return (
    <>
      <ul>
        <li></li>
      </ul>
      <ul>
        <li>
          <div></div>
          <h5>Selecionado</h5>
        </li>
        <li>
          <div></div>
          <h5>Disponível</h5>
        </li>
        <li>
          <div></div>
          <h5>Indisponível</h5>
        </li>
      </ul>
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
    </>
  );
}

const Button = styled.div`
margin: 0 auto;
width: 225px;
height: 42px;

background: #E8833A;
border-radius: 3px;
`
