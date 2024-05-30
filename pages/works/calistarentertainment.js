import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "@/components/layouts/article";

const Work = () => {
  return (
    <Layout title="Calistar Entertainment">
      <Container>
        <Title>
          Calistar Entertainment <Badge>2023</Badge>
        </Title>
        <ul>
          <li>
            Followed best-practice styling conventions using Tailwind CSS.
          </li>
        </ul>
        <ul>
          <li>
            Integrated dynamic content with Web3, NextJS, React, and
            multi-platform embedding.
          </li>
        </ul>
        <ul>
          <li>
            Encouraged company engagement by spotlighting and linking the
            previous/upcoming works.
          </li>
        </ul>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Live Preview</Meta>
            <Link href="https://calistarentertainment-com.vercel.app/" target="_blank">
            https://calistarentertainment-com.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, NextJS, NodeJS, Three.js, TypeScript, Embla</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/behindbrandcalistar.png" alt="Calistar Entertainment Brand" />
        <WorkImage src="/images/works/behindlogocalistar.png" alt="Calistar Entertainment Brand" />

      </Container>
    </Layout>
  );
};

export default Work;
