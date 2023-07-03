import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbArea from '../public/images/works/area.png'
import thumbCrud from '../public/images/works/crud.png'
import thumbSalt from '../public/images/works/salt.png'
import thumbGame from '../public/images/works/game.png'
import thumbDonut from '../public/images/works/donut.png'
import thumbCarbon from '../public/images/works/carbon.png'

const Works = () => {
  return (
    <Layout>
    <Container>
      <br/>
      <Heading as="h3" fontSize={20} mb={4}>
        Trabajos
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} spacing={10}>
        <Section>
          <WorkGridItem id="areacalculator" title="Area Calculator" thumbnail={thumbArea}>
            Programa que calcula el área bajo una curva definida por una función dada y genera un informe en formato PDF con los resultados.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="crud" title="CRUD Clientes" thumbnail={thumbCrud}>
            Sistema que permite administrar la información de clientes
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="euler" title="Project Euler" thumbnail={thumbCarbon}>
            Project Euler
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Colaboraciones
        </Heading>
      </Section>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} spacing={10}>
        <Section>
          <WorkGridItem id="salt" title="Salt Portfolio" thumbnail={thumbSalt}>
             Portfolio Web
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.3}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Mini Projects
        </Heading>
      </Section>

      <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} spacing={10}>
        <Section>
          <WorkGridItem id="game" title="Conway's Game of Life" thumbnail={thumbGame}>
            Game Of Life
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="Donut" title="Spinning Donut" thumbnail={thumbDonut}>
            Spinning Donut
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
    </Layout>
  );
};
export default Works;

