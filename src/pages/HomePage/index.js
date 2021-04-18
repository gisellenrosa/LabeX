import React, { useEffect } from "react";
import {
  Container,
  HomeImg,
  LogoImg,
  AdminButtonContent,
  AdminButton,
  TripButton,
  TripButtonContent,
} from "./styles";
import { useHistory } from "react-router-dom";
import { goToListTripPage } from "../../routes/coordinator";
import Logo from "../../images/X.png";

export default function HomePage() {
  const history = useHistory();
  const token = window.localStorage.getItem("token");

  const ChangePagebyToken = () => {
    if (token) {
      history.push("/admin");
    } else if (!token) {
      history.push("/login");
    }
  };
  return (
    <Container>
      <HomeImg>
        <div>
          <LogoImg src={Logo} />
        </div>
        <AdminButtonContent>
          <AdminButton onClick={() => ChangePagebyToken()}>
            ADMIN LOGIN
          </AdminButton>
        </AdminButtonContent>
      </HomeImg>
      <TripButtonContent>
        <TripButton onClick={() => goToListTripPage(history)}>
          VER VIAGENS
        </TripButton>
      </TripButtonContent>
    </Container>
  );
}
