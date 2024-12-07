import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Nav from "/src/components/layout/nav/nav";
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
