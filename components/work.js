import NextLink from 'next/link'
import { Badge, Box, Heading, IMage, Link } from '@chakra-ui/react'
import { chevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/works">
      <Link>Works</Link>
    </NextLink>
    <span>
      &nbsp;
      <chevronRightIcon />
      &nbsp;
    </span>
    <Heading dislpay="inline-block" as="h3" fontsize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" src={src} alt={alt} w="full" mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
