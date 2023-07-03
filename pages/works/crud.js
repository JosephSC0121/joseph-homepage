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
      CRUD CLIENTES <Badge>2023</Badge>
      </Title>
      <P>
      WebApp que implementa un sistema de gestión de clientes utilizando el paradigma CRUD (Crear, Leer, Actualizar, Eliminar). Su objetivo principal es permitir a los usuarios administrar eficientemente la información de los clientes de una empresa o negocio.

      </P>
      <List ml={3} my={3}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/JosephSC0121/python_mini_proyects/tree/main/CRUD_Python_Flask_Bootstrap/myapp" color={useColorModeValue('#172433', '#e3e4e2')}>
          https://github.com/JosephSC0121/python_mini_proyects <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Lenguajes y librerias</Meta>
          <span>Python/Flask/Boostrap/MySQL</span>
        </ListItem>      
        </List>
      <WorkImage src="/images/works/crud.png" alt="crud" />

 
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
