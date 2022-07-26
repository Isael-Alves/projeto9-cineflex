import styled from "styled-components";
import filme from "../assets/img/image 3.svg";
export default function HomeScreen() {
  return (
    <>
      <Movielist>
        <Movie>
          <img src={filme} alt="" />
        </Movie>
        <Movie>
          <img src={filme} alt="" />
        </Movie>
      </Movielist>
    </>
  );
}

const Movielist = styled.ul`
  width: 88%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 170px;
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
