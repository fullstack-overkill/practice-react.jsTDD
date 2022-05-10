import React, { useContext } from 'react'
import styles from './form-status-styles.scss'
import Spinner from '@/presentation/components/spinner/spinner'
import Context from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { state } = useContext(Context)
  const { isLoading, mensageError } = state

  return (
    <div data-testid="error-wrapper" className={styles.errorWrap}>
      {isLoading && <Spinner className={styles.spinner} />}
      {mensageError && <span className={styles.error}>{mensageError}</span>}
    </div>
  )
}

export default FormStatus
