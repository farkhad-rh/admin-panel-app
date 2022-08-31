import SearchTool from './SearchTool'
import LanguageTool from './LanguageTool'
import UserTool from './UserTool'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <SearchTool />
      <LanguageTool />
      <UserTool />
    </header>
  )
}

export default Header
