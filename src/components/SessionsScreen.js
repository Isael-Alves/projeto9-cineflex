import styled from "styled-components";

export default function SessionsScreen({ setPhase }) {
  const Assentos = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 40, 41,
    42, 43, 44, 45, 46, 47, 48, 49, 50,
  ];
  return (
    <>
      <AssentosBox>
        {Assentos.map((value, i) => (
          <li key={i}>{value}</li>
        ))}
      </AssentosBox>
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
