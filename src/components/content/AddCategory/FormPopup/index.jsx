import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import propTypes from 'prop-types'

import { Button, Input, Popup } from '@common'

import IconSearch from '@icons/search-line.svg'

import styles from './FormPopup.module.scss'

const FormPopup = ({ level, isOpen, onClose }) => {
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
  })

  const regRuText = /^[а-яА-Я\s]{1,}$/
  const regUzText = /^[a-zA-Z\s]{1,}$/

  const handleSubmit = data => {
    console.log(data)
    reset()
    onClose()
  }

  useEffect(() => {
    reset()
  }, [isOpen])

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
    >
      <form
        className={styles.form}
        onSubmit={onSubmit(handleSubmit)}
      >
        <div className={styles.title}>{`Создать Категорию (${level} уровень)`}</div>

        <div className={styles.fields}>
          {(level === 2 || level === 3) && (
            <Input
              label='Категория'
              placeholder='Выберите категорию'
              error={errors?.category?.message}
              icon={<IconSearch />}
              {...register('category', {
                required: 'Выберите категорию',
                pattern: {
                  value: regRuText,
                  message: 'Только кириллицей',
                },
              })}
            />
          )}

          {level === 3 && (
            <Input
              label='Подкатегория'
              placeholder='Выберите подкатегорию'
              error={errors?.subcategory?.message}
              icon={<IconSearch />}
              {...register('subcategory', {
                required: 'Выберите подкатегорию',
                pattern: {
                  value: regRuText,
                  message: 'Только кириллицей',
                },
              })}
            />
          )}

          <Input
            label='Наименование на русском *'
            placeholder='Введите'
            error={errors?.ru?.message}
            {...register('ru', {
              required: 'Введите наименование',
              pattern: {
                value: regRuText,
                message: 'Только кириллицей',
              },
            })}
          />

          <Input
            label='Наименование на узбекском *'
            placeholder='Введите'
            error={errors?.uz?.message}
            {...register('uz', {
              required: 'Введите наименование',
              pattern: {
                value: regUzText,
                message: 'Только латиницей',
              },
            })}
          />
        </div>

        <div className={styles.buttons}>
          <Button
            label='Назад'
            appearance='default'
            onClick={onClose}
            className={styles.button}
          />
          <Button
            label='Создать'
            appearance='primary'
            type='submit'
            className={styles.button}
          />
        </div>
      </form>
    </Popup>
  )
}

FormPopup.propTypes = {
  level: propTypes.number,
  isOpen: propTypes.bool,
  onClose: propTypes.func,
}

export default FormPopup
