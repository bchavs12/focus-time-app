import { HeaderContainer } from "./styles";
import { Scroll, Timer } from "phosphor-react";

import logoTimer from "../../assets/logo_timer.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoTimer} alt="Logo" title="appLogo" />
      </span>

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
