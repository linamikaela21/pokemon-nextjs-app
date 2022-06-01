import { FC } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { Link, Spacer, Text, useTheme } from "@nextui-org/react";

export const NavBar: FC = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignContent: "center",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="Pikachu"
        width={70}
        height={70}
      />
      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h1>
            P
          </Text>
          <Text color="white" h2>
            okemon
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Link
          css={{
            mx: "$10",
            display: "flex",
            justify: "center",
            alignItems: "center",
          }}
        >
          <Text color="white" h2>
            Favorites
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};
