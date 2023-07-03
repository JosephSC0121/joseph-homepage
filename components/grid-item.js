import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, SimpleGrid } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box
    textAlign="center"
    boxShadow="2xl"
    p={4}
    borderRadius="2xl"
    color="white" // Color del texto
    transition="transform 0.2s" // Agrega una transición suave al transform
    _hover={{
      transform: "scale(1.1)" // Hace que la celda se haga un poco más grande en el hover
    }}
  >
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box
    textAlign="center"
    boxShadow="2xl"
    p={4}
    borderRadius="3xl"
    bg="#0c131c" // Color de fondo oscuro
    color="white" // Color del texto
    transition="transform 0.2s" // Agrega una transición suave al transform
    _hover={{
      transform: "scale(1.1)" // Hace que la celda se haga un poco más grande en el hover
    }}
  >
    <LinkBox
      as={NextLink}
      href={`/works/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
      />
      <LinkOverlay as="div" href={`/works/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
        width: 100%; // Ajusta el ancho de la imagen al 100% del contenedor
        height: auto; // Ajusta la altura de la imagen automáticamente
      }
    `}
  />
)

export const GridContainer = ({ children }) => (
  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
    {children}
  </SimpleGrid>
)
