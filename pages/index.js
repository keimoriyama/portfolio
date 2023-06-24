import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Image
} from '@chakra-ui/react'
const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m M1 student in Japan!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Kei Moriyama
          </Heading>
          <p> I am a M1 student in Japan at Tokyo Univ. </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/KeiMoriyama.png"
            alt="Profile Image"
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Page
