import { useNavigate } from 'react-router-dom'

import { Button } from '@common'

import styles from './NotFound.module.scss'

const NotFound = () => {
  const navigate = useNavigate()

  const handleRelocate = () => navigate('/')

  return (
    <div className={styles.error}>
      <div className='container'>
        <div className={styles.wrapper}>
          <div className={styles.status}>404</div>
          <Button
            label='Вернуться на главную'
            size='md'
            className={styles.relocate}
            onClick={handleRelocate}
          />
        </div>
      </div>
    </div>
  )
}

export default NotFound
