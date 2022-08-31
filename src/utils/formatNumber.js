export const formatSum = number => new Intl.NumberFormat('ru-RU').format(+number)

export const formatPhone = number =>
  String(number)?.replace(
    /\D*(\d{3})\D*(\d{2})\D*(\d{3})\D*(\d{2})\D*(\d{2})\D*/g,
    '$1 $2 $3 $4 $5'
  )

export const formatPhoneHide = number =>
  String(number)?.replace(
    /\D*(\d{3})\D*(\d{2})\D*(\d{3})\D*(\d{2})\D*(\d{2})\D*/g,
    '$1 $2 ••• •• $5'
  )

export const formatPan = number =>
  String(number)?.replace(/\D*(\d{4})\D*(.{4})\D*(.{4})\D*(\d{4})\D*/g, '$1 $2 $3 $4')

export const formatExpiry = number => String(number)?.replace(/\D*(\d{2})\D*(\d{2})\D*/g, '$1 / $2')

export const formatZero = number => String(number)?.padStart(2, '0')

export const formatDate = date =>
  `${formatZero(date.getDate())}.${formatZero(date.getMonth() + 1)}.${date.getFullYear()}`

export const formatTime = date => `${formatZero(date.getHours())}:${formatZero(date.getMinutes())}`
