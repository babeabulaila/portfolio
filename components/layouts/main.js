import Head from "next/head";
import dynamic from "next/dynamic";
import NavBar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../footer";
import VoxelCatLoader from "../voxel-cat-loader";

const LazyVoxelCat = dynamic(() => import("../voxel-cat"), {
  ssr: false,
  loading: () => <VoxelCatLoader />,
});

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Babe Abulaila's homepage" />
        <meta name="author" content="Babe Abulaila" />
        <meta name="author" content="Babe Abulaila" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Babe Abulaila" />
        <meta name="og:title" content="Babe Abulaila" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sketchfab.com/3d-models/voxel-lucky-cat-9635b45c72e748009a62ea7e562bbf27" />
        <title>Babe Abulaila - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelCat />

        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
