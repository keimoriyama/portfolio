import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>
      <Text>The page you are looking for does not exist.</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button coloScheme="teal">Back to Home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}
export default NotFound
