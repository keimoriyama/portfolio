import { BioSection, BioYear } from './bio'

import { Text, Box, Link } from '@chakra-ui/react'

const Education = ({ degree, school, href, teacher, time }) => (
  <BioSection>
    <BioYear>{degree}</BioYear>
    {time}
    <Box>
      <Text>{school}</Text>
      <Text>
        指導教員：
        <Link href={href}>{teacher}</Link>
      </Text>
    </Box>
  </BioSection>
)

export default Education
