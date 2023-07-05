import {
  Container,
  Badge,
  List,
  ListItem,

} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Salt Portafolio">
    <Container>
      <br/>
      <Title>
      Salt Portafolio <Badge>2022</Badge>
      </Title>
      <P>
      Portafolio Web.
      </P>
      <List ml={3} my={3}>
        <ListItem>
          <Meta>Lenguajes y librerias</Meta>
          <span>JavaScript/HTML/CSS</span>
        </ListItem>      
        </List>
      <WorkImage src="/images/works/salt.png" alt="salt" />
      <WorkImage src="/images/works/salt1.png" alt="salt" />
      <WorkImage src="/images/works/salt2.png" alt="salt" />
      <WorkImage src="/images/works/salt3.png" alt="salt" />
 
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
