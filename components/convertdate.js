import dayjs from 'dayjs'

export default function ConvertDate({ convertDate }) {
  const publishedAt = dayjs(convertDate).format('YYYY年M月DD日')
  return <time dateTime={convertDate}>{publishedAt}</time>
}
