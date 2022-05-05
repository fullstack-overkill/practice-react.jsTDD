import React from 'react'
import styles from './login-styles.scss'
import FormStatus from '@/presentation/components/form-status/form-status'
import Header from '@/presentation/components/login-header/login-header'
import Footer from '@/presentation/components/footer/footer'
import Input from '@/presentation/components/input/input'

const login: React.FC = () => {
  return (
    <div className={styles.login}>
      <Header />
      <form className={styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite seu email" />
        <Input type="password" name="password" placeholder="Digite seu email" />
        <button className={styles.submit} type="submit">
          Entrar
        </button>
        <span className={styles.link}>Criar conta</span>
        <FormStatus />
      </form>
      <Footer />
    </div>
  )
}

export default login
