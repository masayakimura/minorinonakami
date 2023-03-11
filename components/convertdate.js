import dayjs from 'dayjs'
import 'dayjs/locale/ja'

dayjs.locale('ja')

export default function ConvertDate({ convertDate }) {
  const publishedAt = dayjs(convertDate).format('YYYY年M月DD日(ddd)')
  return <time dateTime={convertDate}>{publishedAt}</time>
}
