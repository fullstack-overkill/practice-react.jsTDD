import React, { useContext } from 'react'
import styles from './form-status-styles.scss'
import Spinner from '@/presentation/components/spinner/spinner'
import Context from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { state, errorState } = useContext(Context)

  return (
    <div data-testid="error-wrapper" className={styles.errorWrap}>
      {state.isLoading && <Spinner className={styles.spinner} />}
      {errorState.mensage && <span className={styles.error}>{errorState.mensage}</span>}
    </div>
  )
}

export default FormStatus
