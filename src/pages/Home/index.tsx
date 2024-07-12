import { Play } from "phosphor-react";
import {
  CountdownContent,
  Separator,
  FormContent,
  HomeContainer,
  StartCountdownButton,
  TaskInput,
  SetMinutesInput,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContent>
          <label htmlFor="task">Irei focar em</label>
          <TaskInput
            id="task"
            list="task-suggestion"
            placeholder="Dê um nome para sua atividade"
          />

          <datalist id="task-suggestion">
            <option value="Atividade 01" />
            <option value="Atividade 02" />
            <option value="Atividade 03" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <SetMinutesInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContent>

        <CountdownContent>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContent>

        <StartCountdownButton type="submit">
          <Play size={24} />
          Comecar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
