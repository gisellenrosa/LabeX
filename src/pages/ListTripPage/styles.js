import styled from "styled-components";

export const BackButtonContent = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  margin-top: 30px;
`;

export const Button = styled.button`
  padding: 15px;
  margin-top: 15px;
  border-radius: 50px;
  border: none;
  background-color: #e6207e;
  color: white;
  font-size: 16px;
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  cursor: pointer;
  transition: 300ms;
  :hover {
    background-color: rgb(212, 12, 126);
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 20px;
  margin-top: 30px;
`;
export const TripContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 100px;
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  } ;
`;
export const TripContent = styled.div`
  background-color: rgb(251, 253, 253);
  border: 1px solid #338899;
  border-radius: 10px;
  min-height: 280px;
  min-width: 300px;
  max-height: 600px;
  max-width: 500px;
  padding: 10px;
  box-sizing: border-box;
`;
export const TripTitle = styled.h3`
  color: #828282;
`;
