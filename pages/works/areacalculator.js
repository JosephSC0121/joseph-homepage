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
  <Layout title="Calculate Area">
    <Container>
      <br/>
      <Title>
      Calculate Area <Badge>2023</Badge>
      </Title>
      <P>
      Este proyecto consiste en un script en Python diseñado para calcular el área bajo una curva específica. Utilizando técnicas de integración, el script procesa los datos de la curva proporcionados como entrada y realiza cálculos precisos para determinar el área total bajo la curva.

      </P>
      <List ml={3} my={3}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/JosephSC0121/python_mini_proyects/tree/main/area_under_curve" color={useColorModeValue('#172433', '#e3e4e2')}>
          https://github.com/JosephSC0121/python_mini_proyects <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Lenguajes y librerias</Meta>
          <span>Python/Sympy/Numpy/Matplotlib/PyLatex</span>
        </ListItem>      
        </List>
      <WorkImage src="/images/works/area1.png" alt="areacalculator" />
      <WorkImage src="/images/works/area2.png" alt="areacalculator" />
 
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
