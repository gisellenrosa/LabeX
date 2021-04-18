import styled from "styled-components";
import img from "../../images/homephoto.jfif";

export const Container = styled.div`
  width: 100vw;
`;

export const HomeImg = styled.div`
  width: 100vw;
  height: 45vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 760px) {
    height: 50vh;
  } ;
`;
export const LogoImg = styled.img`
  width: 150px;
  margin-left: 30px;
  @media (max-width: 760px) {
    width: 100px;
  } ;
`;

export const AdminButtonContent = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 15px;
  margin-top: -125px;
  @media (max-width: 760px) {
    margin-top: -90px;
  } ;
`;

export const AdminButton = styled.button`
  padding: 15px;
  margin-top: 15px;
  border-radius: 50px;
  border: none;
  background-color: #338899;
  color: white;
  font-size: 14px;
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  cursor: pointer;
  transition: 300ms;
  :hover {
    background-color: #338899;
  }
`;

export const TripButtonContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -35px;
`;

export const TripButton = styled.button`
  padding: 20px;
  border-radius: 50px;
  border: none;
  background-color: #e6207e;
  color: white;
  font-size: 18px;
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  cursor: pointer;
  transition: 300ms;
  :hover {
    background-color: rgb(212, 12, 126);
  }
`;
