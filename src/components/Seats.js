import styled from "styled-components";

function Seats({ session, selecting, selecionados }) {
  const places = session.seats;
  return (
    <AssentosBox>
      {places.map((place) => {
        const selected = selecionados.some(assento => assento.id === place.id);
        console.log(place.isAvailable);
        return (
          <li
            available = {place.isAvailable}
            selected={selected}
            key={place.id}
            onClick={() => selecting(place.id)}
          >
            {place.name}
          </li>
        );
      })}
    </AssentosBox>
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

    background-color: ${({selected, available}) => {
      if (selected) {
        return "#8DD7CF";
      } else if (available) {
        return "#C3CFD9";
      }else {
        return "#FBE192";
      }
    }};
    border: 1px solid #808f9d;
    border-radius: 12px;
  }
`;

export default Seats;
