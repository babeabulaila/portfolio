import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "@/components/layouts/article";

const Work = () => {
  return (
    <Layout title="Wallet Whisperer">
      <Container>
        <Title>
          Wallet Whisperer<Badge ml="1.5">2023</Badge>
        </Title>
        <P>
          This project was made during the very first Flow Hackathon! This
          application helps solve the problems many crypto native and non-crypto
          native users experience when trying to make an offer on another piece
          of art in another person’s collection that belongs to a wallet that
          has little or no way to communicate them especially when no socials
          are linked. This allows people to be able to communicate with other
          wallets while also incentivizing others to check their inbox as they
          receive coins for weekly logins that can be used to share some of
          their collection or post an advertisement on the home page.
        </P>
        <br></br>
        <ul>
          <li>
            Utilized secure authentication methods to store encrypted user data.
          </li>
          <li>
            Configured the application using the Flow blockchain, MongoDB,
            NextJS, React, NodeJS.
          </li>
          <li>
            Facilitated engagement by providing easy and secure accessibility in
            the NFT industry.
          </li>
        </ul>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Video Demo</Meta>
            <Link
              href="https://devfolio.co/projects/wallet-whisperer-672c"
              target="_blank"
            >
              https://devfolio.co/projects/wallet-whisperer-672c{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, NextJS, NodeJS, MongoDB, Flow blockchain </span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/walletwhisperwork.png" alt="Wallet Whisperer"  />
      </Container>
    </Layout>
  );
};

export default Work;
