import NextLink from 'next/link'
import {
  Container,
  Box,
  Button,
  Heading,
  List,
  ListItem,
  useColorModeValue,
  Link,
  SimpleGrid,
  OrderedList,
  UnorderedList,
  Image,
  Text
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layout/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'
import { FaKaggle } from 'react-icons/fa'
import { IoMailOutline } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h3" variant="page-title">
              Profile
            </Heading>
            <List>
              <ListItem>
                所属：東京大学総合文化研究科広域科学専攻広域システム科学系
                馬場研究室M1
              </ListItem>
              <ListItem>Mail:kei-moriyama[at]g.ecc.u-tokyo.ac.jp</ListItem>
            </List>
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

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Education
          </Heading>
          <List>
            <ListItem>
              <BioSection>
                <BioYear>修士（学術）</BioYear>2024/04~2025/03(予定)
                <Box>
                  <Text>東京大学総合文化研究科広域システム科学系</Text>
                  <Text>
                    指導教員：
                    <Link href="http://yukinobaba.jp/ja/">
                      馬場　雪乃准教授
                    </Link>
                  </Text>
                </Box>
              </BioSection>
            </ListItem>
            <ListItem>
              <BioSection>
                <BioYear>学士（情報工学）</BioYear>2021/04~2022/03
                <Box>
                  <Text>筑波大学情報学群情報科学類</Text>
                  <Text>
                    卒業研究「専門家と非専門家に対するアノテーション検証割り当ての自動化」
                  </Text>
                  <Text>
                    指導教員：
                    <Link href="http://yukinobaba.jp/ja/">
                      馬場　雪乃准教授
                    </Link>
                  </Text>
                </Box>
              </BioSection>
            </ListItem>
            <ListItem>
              <BioSection>
                <BioYear>準学士</BioYear>2014/04~2021/03
                <Box>
                  <Text>豊田工業高等専門学校情報工学科</Text>
                  <Text>卒業研究「」</Text>
                  <Text>
                    指導教員：
                    <Link href="https://mnacsm.github.io/">
                      村田 匡輝准教授
                    </Link>
                  </Text>
                </Box>
              </BioSection>
            </ListItem>
          </List>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Publication
          </Heading>
          <OrderedList>
            <ListItem>
              <Box>
                <Link href="https://www.anlp.jp/proceedings/annual_meeting/2023/pdf_dir/P9-7.pdf">
                  専門家と非専門家によるアノテーション検証割り当ての自動化
                </Link>
                <Text fontsize="lg">
                  <Text as="ins">守山　慧</Text>,中山　功太,馬場　雪乃
                </Text>
                <Text fontsize="lg">言語処理学会第29回年次大会(NLP2023)</Text>
              </Box>
            </ListItem>
          </OrderedList>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Awards
          </Heading>
          <UnorderedList>
            <ListItem>令和5年度筑波大学心青会賞</ListItem>
          </UnorderedList>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://twitter.com/moriy4ma">
                <Button variant="ghost">
                  <IoLogoTwitter size={24} />
                </Button>
              </Link>
              <Link href="https://github.com/keimoriyama">
                <Button variant="ghost">
                  <IoLogoGithub size={24} />
                </Button>
              </Link>
              <Link href="https://www.kaggle.com/keimoriyama">
                <Button variant="ghost">
                  <FaKaggle size={24} />
                </Button>
              </Link>
              <Link href="https://atcoder.jp/users/keimoriyama">
                <Button variant="ghost">AtCoder</Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
