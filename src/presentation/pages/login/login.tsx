import React, { useState, useEffect } from 'react'
import styles from './login-styles.scss'
import Context from '@/presentation/contexts/form/form-context'
import {
  FormStatus,
  LoginHeader as Header,
  Footer,
  Input
} from '@/presentation/components'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation?: Validation
}

const login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    mensageError: ''
  })

  useEffect(() => {
    validation.validate({ email: state.email })
  }, [state.email])

  useEffect(() => {
    validation.validate({ password: state.password })
  }, [state.password])

  return (
    <div className={styles.login}>
      <Header />
      <Context.Provider value={{ state, setState }}>
        <form className={styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu email" />
          <Input
            type="password"
            name="password"
            placeholder="Digite seu email"
          />
          <button
            data-testid="submit"
            className={styles.submit}
            type="submit"
            disabled
          >
            Entrar
          </button>
          <span className={styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default login
