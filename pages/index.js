import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Container, Box, Heading } from '@chakra-ui/react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Container>
      <Box borderRadius='lg' bg='red' p={3} align='center'>
        Hello, I&apos;m a full-stack developer based in Brooklyn!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Babe Abulaila
          </Heading>
          <p>Digital Craftsman: (Musician / Artist / Developer / Cat-Lover)</p>
        </Box>
      </Box>
    </Container>
  )
}
