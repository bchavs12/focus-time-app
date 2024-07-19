import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import * as component from "./styles";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ser de no mínimo 5 minutos.")
    .max(60, "o ciclo precisa ser de no máximo 60 minutos."),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data);

    reset();
  }

  // Ler documentação da api react-hook-form e oque cada metodo que estamos usando faz

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
