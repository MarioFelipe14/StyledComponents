import { FormEvent, useState } from 'react'
import { Form, Campo, Botao } from './FormVagas.module'

import styles from './FormVagas.module.css'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Form onSubmit={aoEnviarForm}>
      <Campo
        className={styles.campo}
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <Botao type="submit">Pesquisar</Botao>
    </Form>
  )
}
export default FormVagas
