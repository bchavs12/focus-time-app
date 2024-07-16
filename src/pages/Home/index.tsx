import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";

import * as component from "./styles";

export function Home() {
  const { register, handleSubmit, watch } = useForm();

  function handleCreateNewCycle(data: any) {
    console.log(data);
  }

  const task = watch("task");
  const isSubmitDisable = !task;

  return (
    <component.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <component.FormContent>
          <label htmlFor="task">Irei focar em</label>
          <component.TaskInput
            id="task"
            list="task-suggestion"
            placeholder="Dê um nome para sua atividade"
            {...register("task")}
          />

          <datalist id="task-suggestion">
            <option value="Atividade 01" />
            <option value="Atividade 02" />
            <option value="Atividade 03" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <component.SetMinutesInput
            type="number"
            id="minutesAmount"
            step={5}
            min={5}
            max={60}
            placeholder="05"
            {...register("minutesAmount", { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </component.FormContent>

        <component.CountdownContent>
          <span>0</span>
          <span>0</span>
          <component.Separator>:</component.Separator>
          <span>0</span>
          <span>0</span>
        </component.CountdownContent>

        <component.StartCountdownButton
          type="submit"
          disabled={isSubmitDisable}
        >
          <Play size={24} />
          Comecar
        </component.StartCountdownButton>
      </form>
    </component.HomeContainer>
  );
}
