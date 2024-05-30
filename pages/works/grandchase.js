import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from "@/components/layouts/article"

const Work = () => {
return(
    <Layout title="Grand Chase">
        <Container>
            <Title>
                Grand Chase <Badge>2023</Badge>
            </Title>
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
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Live Preview</Meta>
                    <Link href="https://grandchase-three.vercel.app/" target="_blank">
                    https://grandchase-three.vercel.app/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux/iOS/Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React, NextJS, NodeJS, TypeScript, Tailwind CSS, Wagmi </span>
                </ListItem>
            </List>
            <WorkImage src="/images/works/grandchasework.png" alt="Grand Chase"/>
        </Container>
    </Layout>
)

}

export default Work