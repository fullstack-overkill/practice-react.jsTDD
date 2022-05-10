import React, { useContext } from 'react'
import styles from './form-status-styles.scss'
import Spinner from '@/presentation/components/spinner/spinner'
import Context from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { isLoading, errorMensage } = useContext(Context)
  return (
    <div data-testid="error-wrapper" className={styles.errorWrap}>
      {isLoading && <Spinner className={styles.spinner} />}
      {errorMensage && <span className={styles.error}>Erro</span>}
    </div>
  )
}

export default FormStatus
