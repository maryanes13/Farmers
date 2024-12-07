import React from "react";
import Logo from "../../ui/logo/logo";
import { FooterComponent, Copyright } from "./styles";

function Footer() {
  return (
    <FooterComponent as="footer">
      <Logo />
      <Copyright>Создано 2021</Copyright>
    </FooterComponent>
  );
}

export default Footer;
