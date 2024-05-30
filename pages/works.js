import {
  Box,
  useColorModeValue,
  Container,
  Heading,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import Section from "@/components/section";
import { WorkGridItem } from "@/components/grid-item";
import thumbwalletwhisperer from "../public/images/thumbwalletwhisperer.png";
import thumbgrandchase from "../public/images/thumbgrandchase.png";
import thumbcalistar from "../public/images/thumbcalistar.png";
import Layout from "@/components/layouts/article";

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mt={5} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={9}>
          <Section delay={0.2}>
            <WorkGridItem
              id="walletwhisperer"
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
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem
              id="grandchase"
              title="Grand Chase"
              thumbnail={thumbgrandchase}
            >
              <Box
                borderRadius="lg"
                bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
                p={1}
                align="center"
                margin={2}
              >
                This website was built using NextJS following the designers
                specifications.
              </Box>
            </WorkGridItem>
          </Section>
          <Section delay={0.6}>
            <WorkGridItem
              id="calistarentertainment"
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
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
