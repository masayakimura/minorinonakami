import { Carousel } from '@mantine/carousel'
import { useMediaQuery } from '@mantine/hooks'
import { createStyles, Paper, useMantineTheme, rem } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(540),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}))

interface CardProps {
  image: string
}

function Card({ image }: CardProps) {
  const { classes } = useStyles()

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    ></Paper>
  )
}

const data = [
  {
    image: '/topImage01.jpg',
  },
  {
    image: '/topImage02.jpg',
  },
  {
    image: '/topImage03.jpg',
  },
  {
    image: '/topImage04.jpg',
  },
  {
    image: '/topImage05.jpg',
  },
  {
    image: '/topImage06.jpg',
  },
]

export default function CardsCarousel() {
  const theme = useMantineTheme()
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
  const slides = data.map((item) => (
    <Carousel.Slide key={item.image}>
      <Card {...item} />
    </Carousel.Slide>
  ))

  return (
    <div className="mx-auto w-full sm:w-96">
      <Carousel
        slideSize="100%"
        breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
        slideGap="xl"
        align="start"
        slidesToScroll={1}
        loop
        height="100%"
      >
        {slides}
      </Carousel>
    </div>
  )
}
