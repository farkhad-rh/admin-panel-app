import { memo } from 'react'
import { useForm } from 'react-hook-form'

import IconSearch from '@icons/search-line.svg'

import styles from './SearchTool.module.scss'

const SearchTool = () => {
  const {
    register,
    handleSubmit: onSubmit,
    reset,
  } = useForm({
    mode: 'onSubmit',
  })

  const handleSubmit = async query => {
    await console.log(query)
    await reset()
  }

  return (
    <form
      className={styles.field}
      onSubmit={onSubmit(handleSubmit)}
    >
      <button type='submit'>
        <IconSearch />
      </button>

      <input
        className={styles.input}
        placeholder='Поиск...'
        {...register('search')}
      />
    </form>
  )
}

export default memo(SearchTool)
