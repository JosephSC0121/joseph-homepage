import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Project Euler">
    <Container>
      <br/>
      <Title>
      Project Euler <Badge>2022-2023</Badge>
      </Title>
      <P>
      Project Euler (Proyecto Euler, llamado así por el matemático Leonhard Euler) es un sitio web dedicado a una serie de problemas matemáticos diseñados para ser resueltos por programas computacionales. El proyecto atrae a adultos y a estudiantes interesados en matemáticas y programación informática. Desde su creación en 2001 por Colin Hughes, Project Euler ha ganado notabilidad y popularidad internacional.

      </P>
      <List ml={4} my={4}>
      <ListItem>
      <Meta>Problemas resueltos</Meta>
      41
      <br/>
      <Meta>Ref</Meta>
          <Link href="https://projecteuler.net/" color={useColorModeValue('#172433', '#e3e4e2')}>
          https://projecteuler.net/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/JosephSC0121/Programming-challenges/tree/main/Euler-Proyect" color={useColorModeValue('#172433', '#e3e4e2')}>
          https://github.com/JosephSC0121/Programming-challenges <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Lenguajes y librerias</Meta>
          <span>Python</span>
        </ListItem>      
        </List>
      <WorkImage src="/images/works/carbon.png" alt="pe" />
      <WorkImage src="/images/works/pe1.png" alt="pe" />
      <WorkImage src="/images/works/pe2.png" alt="pe" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
