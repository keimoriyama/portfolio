import {
  Container,
  Box,
  Button,
  Heading,
  List,
  ListItem,
  Link,
  OrderedList,
  UnorderedList,
  Image,
  Text
} from '@chakra-ui/react'
import Layout from '../components/layout/article'
import Section from '../components/section'
import Work from '../components/work'
import Education from '../components/education'
import { IoLogoGithub } from 'react-icons/io5'
import { FaKaggle } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

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
                馬場研究室D1
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
              src="./images/KeiMoriyama.png"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Education
          </Heading>
          <Education
            degree="博士（学術）"
            school="東京大学総合文化研究科広域システム科学系"
            href="http://yukinobaba.jp/ja/"
            teacher="馬場 雪乃准教授"
            time="2025/04~現在"
          />
          <Education
            degree="修士（学術）"
            school="東京大学総合文化研究科広域システム科学系"
            href="http://yukinobaba.jp/ja/"
            teacher="馬場 雪乃准教授"
            time="2023/04~2025/03"
          />
          <Education
            degree="学士（情報工学）"
            school="筑波大学情報学群情報科学類"
            href="http://yukinobaba.jp/"
n            teacher="馬場 雪乃准教授"
            time="2021/04~2023/03"
          />
          <Education
            degree="準学士"
            school="豊田工業高等専門学校情報工学科"
            href="https://mnacsm.github.io/"
            teacher="村田 匡輝准教授"
            time="2014/04~2021/03"
          />
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Publication (Peer review)
          </Heading>
          <OrderedList>
            <ListItem>Work in Progress...</ListItem>
          </OrderedList>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Publication (No Peer review)
          </Heading>
          <OrderedList>
            <ListItem>
              <Box>
                <Link href="https://yans.anlp.jp/entry/yans2024program">
                  タスク特徴を考慮したマッチング制約下におけるアノテーション割り当て
                </Link>
                <Text fontSize="lg">
                  <Text as="ins">守山 慧</Text>,中山 功太,馬場 雪乃
                </Text>
                <Text fontSize="lg">NLP若手の会 (YANS) 第19回シンポジウム</Text>
              </Box>
            </ListItem>
            <ListItem>
              <Box>
                <Link href="https://www.anlp.jp/proceedings/annual_meeting/2024/pdf_dir/P3-6.pdf">
                  マッチング数制約下でのアノテーション検証割り当ての自動化
                </Link>
                <Text fontSize="lg">
                  <Text as="ins">守山 慧</Text>,中山 功太,馬場 雪乃
                </Text>
                <Text fontSize="lg">
                  言語処理学会第30回年次大会 発表論文集(NLP2024)
                </Text>
              </Box>
            </ListItem>
            <ListItem>
              <Box>
                <Link href="https://www.anlp.jp/proceedings/annual_meeting/2024/pdf_dir/A5-4.pdf">
                  文献理解のための人間の応答を利用したプロンプト最適化
                </Link>
                <Text fontSize="lg">
                  今川 涼平,<Text as="ins">守山 慧</Text>,楊 明哲,馬場 雪乃
                </Text>
                <Text fontSize="lg">
                  言語処理学会第30回年次大会 発表論文集(NLP2024)
                </Text>
              </Box>
            </ListItem>
            <ListItem>
              <Box>
                <Link href="https://yans.anlp.jp/entry/yans2023program#1750-1850-%E3%83%9D%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3-3">
                  Wisdom of Prompts：プロンプトの重みづけによるLLMの精度向上
                </Link>
                <Text fontSize="lg">
                  <Text as="ins">守山 慧</Text>,中山 功太,馬場 雪乃
                </Text>
                <Text fontSize="lg">NLP若手の会 (YANS) 第18回シンポジウム</Text>
              </Box>
            </ListItem>
            <ListItem>
              <Box>
                <Link href="https://www.anlp.jp/proceedings/annual_meeting/2023/pdf_dir/P9-7.pdf">
                  専門家と非専門家によるアノテーション検証割り当ての自動化
                </Link>
                <Text fontSize="lg">
                  <Text as="ins">守山 慧</Text>,中山 功太,馬場 雪乃
                </Text>
                <Text fontSize="lg">
                  言語処理学会第29回年次大会 発表論文集(NLP2023)
                </Text>
              </Box>
            </ListItem>
          </OrderedList>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Awards
          </Heading>
          <UnorderedList>
            <ListItem>令和7年度広域科学専攻奨励賞</ListItem>
          </UnorderedList>
          <UnorderedList>
            <ListItem>令和5年度筑波大学心青会賞</ListItem>
          </UnorderedList>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Work experience
      </Heading>
          <Work
      title="大規模言語モデル研究開発センター(LLMC)"
      start="2024/09"
      end='now'
      desc="RAとして働いています"/>
          <Work
            title="理化学研究所"
            start="2022/04"
            end="2023/03"
            desc="RAとして働いていました"
          />
          <Work
            title="株式会社HogeticLab"
            start="2021/06"
            end="2023/03"
            desc="インターンとして働いていました"
          />
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://twitter.com/moriy4ma">
                <Button variant="ghost">
                  <FaXTwitter size={24} />
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
