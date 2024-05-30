import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Logobox = styled.span`
  font-weight: bold;
  font-size: 25px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(-20deg);
  }
`;

const Logo = () => {
  const catImg = `/images/cat${useColorModeValue("", "-dark")}.png`;
  return (
    <Link href="/">
      <Logobox>
        <Image src={catImg} width={40} height={30} alt="logo" />
        <Text
          color={useColorModeValue("gray.800", "whiteAlpha.900")}
          fontFamily="M PLUS rounded 1c"
          fontWeight="bold"
          ml={3}
        >
          Babe Abulaila
        </Text>
      </Logobox>
    </Link>
  );
};

export default Logo;
