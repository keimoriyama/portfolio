import { Container, Box, Heading } from '@chakra-ui/react'
const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a Master student in Japan.
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Kei Moriyama
          </Heading>
          <p> I am a M1 student in Japan at Tokyo Univ. </p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
