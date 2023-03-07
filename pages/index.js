import { Container, Box, Heading, Image } from '@chakra-ui/react'
export default function Home() {
  return (
    <Container>
      <Box borderRadius='lg' bg='red' p={3} align='center' margin={5}>
        Hello, I&apos;m a full-stack developer based in Brooklyn!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Babe Abulaila
          </Heading>
          <p> (Developer / Musician / Cat-Lover)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align='center'
        >
          <Image
            borderColor='whiteAlpha.800'
            borderWidth={2}
            borderStyle='solid'
            maxWidth='120px'
            display='inline-block'
            borderRadius='full'
            src='/images/square.png'
            alt='Profile Picture'
          />
        </Box>
      </Box>
    </Container>
  )
}

