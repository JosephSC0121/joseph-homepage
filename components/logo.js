import Link from 'next/link'
import { Text, useColorModeValue, Icon } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { AtSignIcon } from '@chakra-ui/icons'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 5px;
  padding: 5px;

  &:hover {
    animation: shakeAndScale 2s infinite;
  }

  @keyframes shakeAndScale {
    0% {
      transform: translateX(0px) translateY(0px) scale(1);
    }
    50% {
      transform: translateX(10px) translateY(-5px) scale(1.2);
    }
    100% {
      transform: translateX(0px) translateY(0px) scale(1);
    }
  }
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <Icon as={AtSignIcon} boxSize={6} mr={2} color={useColorModeValue('#172433', '#e3e4e2')}/>
        <Text
          color={useColorModeValue('#172433', '#e3e4e2')}
          fontFamily="M PLUS Rounded 1c, sans-serif"
          fontWeight="bold"
        >
          Joseph Silva
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
