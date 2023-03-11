import dayjs from 'dayjs'

export default function ConvertTime({ convertTime }) {
  const publishedTime = dayjs(convertTime).format('hh:mm')
  return <time dateTime={convertTime}>{publishedTime}</time>
}
