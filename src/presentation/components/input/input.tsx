import React from 'react'
import styles from './input-styles.scss'

type Props = React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.inputWrap}>
      <input {...props} />
      <span className={styles.status}>🔴</span>
    </div>
  )
}

export default Input
