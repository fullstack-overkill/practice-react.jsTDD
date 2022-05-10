import React, { useState } from 'react'
import styles from './login-styles.scss'
import Context from '@/presentation/contexts/form/form-context'
import {
  FormStatus,
  LoginHeader as Header,
  Footer,
  Input
} from '@/presentation/components'

type StateProps = {
  isLoading: boolean
  errorMensage: string
}

const login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMensage: ''
  })

  return (
    <div className={styles.login}>
      <Header />
      <Context.Provider value={state}>
        <form className={styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu email" />
          <Input
            type="password"
            name="password"
            placeholder="Digite seu email"
          />
          <button className={styles.submit} type="submit">
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
