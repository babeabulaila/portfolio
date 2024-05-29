import { Container, Box, Heading, Image, useColorModeValue, Button } from '@chakra-ui/react'
import Section from '@/components/section'
import Paragraph from '@/components/paragraph'
import NextLink from 'next/link'
import React from 'react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '@/components/bio';

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
            boxShadow='5px 5px 5px #2d2d2e'
          />
        </Box>
      </Box>
      <Section delay={0.2}>
        <Heading as='h3' variant='section-title'>
          Work
        </Heading>
        <Paragraph>
          Babe is a first generation American full-stack developer based in Brooklyn, New York with a passion for building digital solutions, and collaboration.
          He has a knack for problem solving, music and technology. From planning and designing to debugging and launching, he respects the journey of each coding project.
          When not in the codezone, he loves to write and record music in a plethora of genres. Currently, he is building more projects and learning Next.js to add to his repertoire!
        </Paragraph>
        <Box align='center' my={4}>
          <NextLink href='/works'>
            <Button rightIcon={<ChevronRightIcon marginTop={1.4} />} colorScheme='teal' >
              My Portfolio 
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.4}>
        <Heading as='h3' variant='section-title'>
          Bio
        </Heading>
        <BioSection>
          <BioYear>1995</BioYear>
          Entered the world
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Graduated from Pace University with a Bachelors Degree in Advertising and Integrated Marketing Communications
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Graduated from Flatiron School with a certificate in the Full Stack Web Development program
        </BioSection>
        <BioSection>
          <BioYear>2022 - Present</BioYear>
          Working as a freelancer, developing skills, building my tech stack
        </BioSection>
      </Section>
      <Section delay={0.6}>
        <Heading as='h3' variant='section-title'>
          I ♥
        </Heading>
        <Paragraph>
          Cats, Star Trek, music, food, language, cats, playing guitar and bass, hiking, cats
        </Paragraph>
      </Section>
    </Container>
  )
}

