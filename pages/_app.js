import { ChakraProvider} from '@chakra-ui/react'
import Fonts from '../components/fonts'
import Layout from '../components/layouts/main'
import Footer from '../components/footer'
import { AnimatePresence } from 'framer-motion'
import theme from "../lib/theme"

const Website = ({ Component, pageProps, router}) => {
  return (
    <ChakraProvider theme={theme}>

      <Fonts/>
      <Layout router={router}>
      <AnimatePresence
          mode ="wait"
          initial={true}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <Footer path ={router.asPath}/>
      </Layout>
    </ChakraProvider>
  )
}
export default Website
