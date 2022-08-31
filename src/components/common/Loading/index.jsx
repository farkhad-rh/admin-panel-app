import propTypes from 'prop-types'
import { Player } from '@lottiefiles/react-lottie-player'
import animationBook from '@lotties/loading'

import styles from './Loading.module.scss'

const Loading = ({ size }) => {
  return (
    <div className={styles.loader}>
      <div className='container'>
        <div className={styles.wrapper}>
          <Player
            loop
            autoplay
            src={animationBook}
            style={{ width: `${size}px`, height: `${size}px` }}
          />
        </div>
      </div>
    </div>
  )
}

Loading.propTypes = {
  size: propTypes.number.isRequired,
}

Loading.defaultProps = {
  size: 300,
}

export default Loading
