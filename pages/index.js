import NextLink from 'next/link'
import {
  Container,
  Heading,
  Link,
  ListItem,
  List,
  Box,
  Button,
  Icon,
  Divider,
  Image
} from '@chakra-ui/react'
import {
  IoLogoGoogle,
  IoLogoWhatsapp,
} from 'react-icons/io5'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { AttachmentIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container maxW="container.md">
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h3" variant="section-title">
              <br />
              <Icon as={ChevronRightIcon} boxSize={6} mr={2} />
              Joseph Silva
              <Divider my={6} />
            </Heading>
            <p> Developer | Math enthusiastic :D </p>
            <br />
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <br />
            <Image
              borderColor="gray"
              borderWidth={5}
              borderStyle="solid"
              maxWidth="200px"
              display="inline-block"
              borderRadius="full"
              src="/images/joseph.jpg"
              alt="Profile image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            <Icon as={ChevronRightIcon} boxSize={6} mr={2} />
            Sobre Mi
            <Divider my={6} />
          </Heading>
          <Paragraph>
            ¡Hola! Soy Joseph Cristian Silva Casas, un apasionado estudiante de
            matemáticas e ingeniería de sistemas. Mi objetivo principal es
            aplicar mis conocimientos en ambas disciplinas para resolver
            desafíos complejos y crear soluciones innovadoras. Estoy emocionado
            por colaborar en proyectos estimulantes que requieran un enfoque
            interdisciplinario y un pensamiento crítico. Mi enfoque se basa en
            encontrar soluciones eficientes y efectivas, utilizando tanto mis
            habilidades técnicas como mi capacidad para trabajar en equipo.
          </Paragraph>
          <Box align="center" my={8}>
            <NextLink href="/works">
              <Button
                rightIcon={<AttachmentIcon />}
                colorScheme="gray"
                variant="outline"
              >
                Mi Portafolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            <Icon as={ChevronRightIcon} boxSize={6} mr={2} />
            Contáctame
            <Divider my={6} />
          </Heading>
          <List spacing={4} textAlign="left">
            <ListItem>
              <Link href="https://wa.me/+573235026722" target="_blank">
                <Button
                  colorScheme="gray"
                  variant="ghost"
                  size="md"
                  leftIcon={<IoLogoWhatsapp />}
                >
                  +57 323 5026 722
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Button
                colorScheme="gray"
                variant="ghost"
                size="md"
                leftIcon={<IoLogoGoogle />}
              >
                josephsilva0121@gmail.com
              </Button>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
