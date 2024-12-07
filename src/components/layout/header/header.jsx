import React from "react";
import Logo from "../../ui/logo/logo";
import Nav from "../../layout/nav/nav";
import { HeaderComponent } from "./styles";

function Header() {
  return (
    <HeaderComponent>
      <Logo />
      <Nav />
    </HeaderComponent>
  );
}

export default Header;
