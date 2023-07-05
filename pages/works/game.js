import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Conway&aposs Game of Life">
    <Container>
      <br/>
      <Title>
      Conway&aposs Game of Life <Badge>2023</Badge>
      </Title>
      <P>
      El Juego de la Vida es un juego de simulación matemático creado por el matemático británico John Conway en 1970. Aunque se llama juego, en realidad no tiene jugadores ni se basa en la estrategia o la competencia. En cambio, es un juego de cero jugadores que se desarrolla en un tablero bidimensional compuesto por celdas que pueden estar vivas o muertas.

      </P>
      <List ml={3} my={3}>
      <ListItem>
          <Meta>Ref</Meta>
          <Link href="https://es.wikipedia.org/wiki/Juego_de_la_vida" color={useColorModeValue('#172433', '#e3e4e2')}>
          https://es.wikipedia.org/wiki/Juego_de_la_vida <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/JosephSC0121/Programming-challenges/tree/main/Python/John%20Conway's%20Game%20of%20Life" color={useColorModeValue('#172433', '#e3e4e2')}>
          https://github.com/JosephSC0121/Programming-challenges <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Lenguajes y librerias</Meta>
          <span>Python/PyGame</span>
        </ListItem>      
        </List>
      <WorkImage src="/images/works/game.png" alt="game" />
      <Image src="/images/works/game.gif" alt="Descripción del GIF" width="485px" height="267px" className="gif-image" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
