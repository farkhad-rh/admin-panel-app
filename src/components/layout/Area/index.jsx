import { Outlet } from 'react-router-dom'

import { Sidebar, Nav, Header, Main } from '@layout'

import styles from './Area.module.scss'

const Area = () => {
  return (
    <div className={styles.area}>
      <Sidebar>
        <Nav />
      </Sidebar>

      <Header />

      <Main>
        <Outlet />
      </Main>
    </div>
  )
}

export default Area
