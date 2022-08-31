import { LoginForm } from '@content'

import ImgLogo from '@images/amanat-logo-white.svg?url'
import ImgLetter from '@images/amanat-letter.svg?url'

import styles from './Login.module.scss'

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.company}>
        <img
          src={ImgLogo}
          className={styles.logo}
        />
        <img
          src={ImgLetter}
          className={styles.letter}
        />

        <div className={styles.abstract}>
          <div className={styles.triangle_1}></div>
          <div className={styles.triangle_2}></div>
          <div className={styles.triangle_3}></div>
          <div className={styles.triangle_4}></div>
          <div className={styles.triangle_5}></div>
          <div className={styles.triangle_6}></div>
          <div className={styles.triangle_7}></div>
          <div className={styles.triangle_8}></div>
          <div className={styles.triangle_9}></div>
          <div className={styles.triangle_10}></div>
          <div className={styles.triangle_11}></div>
          <div className={styles.triangle_12}></div>
          <div className={styles.triangle_13}></div>
          <div className={styles.triangle_14}></div>
          <div className={styles.triangle_15}></div>
          <div className={styles.triangle_16}></div>
          <div className={styles.triangle_17}></div>
          <div className={styles.triangle_18}></div>
          <div className={styles.triangle_19}></div>
          <div className={styles.triangle_20}></div>
        </div>
      </div>

      <div className={styles.form}>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
