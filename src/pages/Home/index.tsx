import { Play } from "phosphor-react";
import {
  CountdownContent,
  Separator,
  FormContent,
  HomeContainer,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContent>
          <label htmlFor="">Irei focar em</label>
          <input type="text" />

          <label htmlFor="">durante</label>
          <input type="text" />

          <span>minutos</span>
        </FormContent>

        <CountdownContent>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContent>

        <button type="submit">
          <Play size={24} />
          Comecar
        </button>
      </form>
    </HomeContainer>
  );
}
