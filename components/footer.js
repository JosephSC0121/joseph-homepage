import { Box, Flex, Link, Text, List, ListItem, Button} from "@chakra-ui/react";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io5'

function Footer() {
  return (
    <Box bg="whiteAlpha" py={4} px={6}>
      <Flex justifyContent="space-between" alignItems="center">
        <Text>© 2023 Joseph Silva</Text>
        <List display="flex">
          <ListItem>
            <Link href="https://twitter.com/JosephSilva21_" target="_blank">
              <Button
                colorScheme="gray"
                variant="ghost"
                size="md"
                leftIcon={<IoLogoTwitter />}
              />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/josephsilva_21" target="_blank">
              <Button
                colorScheme="gray"
                variant="ghost"
                size="md"
                leftIcon={<IoLogoInstagram />}
              />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/joseph-cristian-silva-casas/" target="_blank">
              <Button
                colorScheme="gray"
                variant="ghost"
                size="md"
                leftIcon={<IoLogoLinkedin />}
              />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/JosephSC0121" target="_blank">
              <Button
                colorScheme="gray"
                variant="ghost"
                size="md"
                leftIcon={<IoLogoGithub />}
              />
            </Link>
          </ListItem>
        </List>
      </Flex>
    </Box>
  );
}

export default Footer;
