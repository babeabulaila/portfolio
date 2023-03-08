import { Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import Section from '@/components/section'
import Paragraph from '@/components/paragraph'
import NextLink from 'next/link'
import React from 'react';
export default function Home() {
  return (
    <Container>
      <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} align='center' margin={5}>
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
            boxShadow='5px 5px 5px #505050'
          />
        </Box>
      </Box>
      <Section delay={0.2}>
        <Heading as='h3' variant='section-title'>
          Work
        </Heading>
        <Paragraph>
          Babe is a freelance and full-stack developer based in Brooklyn, New York with a passion for building digital solutions, and collaboration.
          He has a knack for problem solving, music and technology. From planning and designing to debugging and launching, he respects the journey of each coding project.
          When not in the codezone, he loves to write and record music in a plethora of genres. Currently, he is building more projects and learning Next.js to add to his repertoire.
          <NextLink href='/works'>Works</NextLink>
        </Paragraph>
      </Section>
    </Container>
  )
}

