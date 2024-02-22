import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from './styled'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a Tarefa'),
  minutesAmount: zod.number().min(5).max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou Trabalhar Em</label>
          <TaskInput
            list="suggestions"
            type="text"
            id="task"
            placeholder="Dê um nome para seu projeto"
            {...register('task')}
          />

          <datalist id="suggestions">
            <option value="Projeto 1"></option>
          </datalist>

          <label htmlFor="minutesAmount">Durante</label>
          <MinutesAmountInput
            step={5}
            max={60}
            min={5}
            type="number"
            id="minitesAmount"
            placeholder="00"
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>Minutos</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountDownButton type="submit" disabled={isSubmitDisabled}>
          <i className="bi bi-play-fill"></i>Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
