import {
  Box,
  useColorModeValue,
  Container,
  Heading,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import Section from "@/components/section";
import { WorkGridItem } from "@/components/layouts/grid-item";
import thumbwalletwhisperer from "../public/images/thumbwalletwhisperer.png";
import thumbgrandchase from "../public/images/thumbgrandchase.png";
import thumbcalistar from "../public/images/thumbcalistar.png";
import thumbauthentication from "../public/images/thumbauthentication.png";

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mt={5} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={9}>
        <Section delay={0.2}>
          <WorkGridItem
            id="wallet-whisperer"
            title="Wallet Whisperer"
            thumbnail={thumbwalletwhisperer}
          >
            <Box
              borderRadius="lg"
              bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
              p={1}
              align="center"
              margin={5}
            >
              This project was done during the very first Flow Hackathon. It
              solves problems encountered in the crypto industry.
            </Box>
            <ul>
              <li>
                Utilized secure authentication methods to store encrypted user
                data.
              </li>
              <li>
                Configured the application using the Flow blockchain, MongoDB,
                NextJS, React, NodeJS.
              </li>
              <li>
                Facilitated engagement by providing easy and secure
                accessibility in the NFT industry.
              </li>
            </ul>
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem
            id="grand-chase"
            title="Grand Chase"
            thumbnail={thumbgrandchase}
          >
            <Box
              borderRadius="lg"
              bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
              p={1}
              align="center"
              margin={5}
            >
              This website was built using NextJS, following the clients
              specifications.
            </Box>

            <ul>
              <li>
                Utilized NextJS, and React to create a clean modern landing
                page.
              </li>
              <li>
                Integrated Web3 functionality that works with Ethereum Smart
                Contracts.
              </li>
            </ul>
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem
            id="calistar-entertainment"
            title="Calistar Entertainment"
            thumbnail={thumbcalistar}
          >
            <Box
              borderRadius="lg"
              bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
              p={1}
              align="center"
              margin={5}
            >
              A landing page for a musician and multi-platform entertainment
              company.
            </Box>

            <ul>
              <li>
                Followed industry best-practice styling conventions using
                Tailwind CSS.
              </li>
              <li>
                Integrated dynamic content with Web3, NextJS, React, and
                multi-platform embedding.
              </li>
              <li>
                Encouraged company engagement by spotlighting and linking the
                previous/upcoming works.
              </li>
            </ul>
          </WorkGridItem>
        </Section>
        <Section delay={0.8}>
          <WorkGridItem
            id="authentication-component"
            title="Authentication Component"
            thumbnail={thumbauthentication}
          >
            <Box
              borderRadius="lg"
              bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
              p={1}
              align="center"
              margin={5}
            >
              A signup/login authentication component.
            </Box>
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Works;
