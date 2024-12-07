import React from "react";
import Button from "/src/components/ui/button/button";
import { StyledButton } from "./styles";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: (
      <StyledButton minWidth={200} key={AppRoute.MAIN} link={AppRoute.MAIN}>
        Главная
      </StyledButton>
    ),
  },
  {
    to: AppRoute.BUY,
    button: (
      <Button minWidth={260} key={AppRoute.BUY} link={AppRoute.BUY}>
        Купить билет
      </Button>
    ),
  },
];

function Nav() {
  const pageUrl = useLocation().pathname;
  return (
    <nav>
      <nav>
        {buttons
          .filter((button) => button.to !== pageUrl)
          .map((button) => button.button)}
      </nav>
    </nav>
  );
}

export default Nav;
