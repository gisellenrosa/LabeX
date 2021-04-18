import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterDiv>
      <FooterRedes>
        <LinksFooter href="https://www.facebook.com/">Facebook</LinksFooter>

        <LinksFooter href="https://www.instagram.com/">Instagram</LinksFooter>
      </FooterRedes>

      <FooterEmail>Contato@Futurecar.com.br</FooterEmail>
    </FooterDiv>
  );
}

const FooterDiv = styled.footer`
  background-color: #338899;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 10px;
  font-size: 14px;
  font-family: "nunito", sans-serif;
`;
const FooterRedes = styled.div`
  display: flex;
  margin: 0 10px;
  gap: 20px;
  text-decoration: none;
`;
const FooterEmail = styled.p`
  display: flex;
  justify-content: flex-end;
  margin: 0 10px;
`;

const LinksFooter = styled.a`
  text-decoration: none;
  color: white;
`;
