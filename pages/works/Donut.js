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
  <Layout title="Spinning Donut">
    <Container>
      <br/>
      <Title>
      Spinning Donut <Badge>2023</Badge>
      </Title>
      <P>
      El donut se representa en un espacio 3D utilizando ecuaciones matemáticas y se aplica una rotación continua a la forma. Al cambiar los ángulos de rotación en diferentes direcciones y velocidades, se crea la ilusión de que el donut está girando y cambiando de forma.

      </P>
      <List ml={3} my={3}>
      <ListItem>
          <Meta>Ref</Meta>
          <Link href="https://www.a1k0n.net/2011/07/20/donut-math.html" color={useColorModeValue('#172433', '#e3e4e2')}>
          https://www.a1k0n.net/2011/07/20/donut-math.html <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/JosephSC0121/JavaScript/tree/main/Spinning_Donut" color={useColorModeValue('#172433', '#e3e4e2')}>
          https://github.com/JosephSC0121/JavaScript <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Lenguajes y librerias</Meta>
          <span>JavaScript/HTML/CSS</span>
        </ListItem>      
        </List>
      <WorkImage src="/images/works/donut.png" alt="donut" />
      <Image src="/images/works/donut.gif" alt="Descripción del GIF" width="485px" height="267px" className="gif-image" />

 
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
