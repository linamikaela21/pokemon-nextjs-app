import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Card, Container, Grid, Button, Text } from "@nextui-org/react";
import { PokemonFull } from "../../interfaces";
import { setingFavorites } from "../../utils";
import { existInFavorites } from "../../utils/addFavorites";
import confetti from "canvas-confetti";
interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetailsCard: FC<Props> = ({
  pokemon: {
    id,
    name,
    sprites,
    types,
    abilities,
    weight,
    height,
    base_experience,
  },
}) => {
  const [isInFavorites, setIsInFavorites] = useState(false);

  const addFavoritePokemon = () => {
    setingFavorites(id);
    setIsInFavorites(existInFavorites(id));
    if (isInFavorites) return;
    confetti({
      zIndex: 999,
      particleCount: 500,
      spread: 160,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  return (
    <Grid.Container css={{ marginTop: "5px" }} gap={2}>
      <Grid xs={12} sm={4}>
        <Card hoverable css={{ padding: "20px" }}>
          <Card.Body
            css={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card.Image
              src={sprites.other?.dream_world.front_default || require('../../assets/pokemon-no-found.jpeg')}
              alt={name}
              width="100%"
              height={550}
            />
          </Card.Body>
        </Card>
      </Grid>

      <Grid xs={12} sm={8}>
        <Card>
          <Card.Header
            css={{ display: "flex", justifyContent: "space-around" }}
          >
            <Text h1 transform="capitalize">
              {name}
            </Text>
            <Text h3 transform="capitalize">
              (experience: {base_experience})
            </Text>

            <Button
              color="gradient"
              ghost={isInFavorites}
              css={{ mx: "$8" }}
              onPress={addFavoritePokemon}
            >
              {isInFavorites ? "Pokemon in favorites" : "Add to favorites"}
            </Button>
          </Card.Header>

          <Card.Body>
            <Grid.Container
              gap={2}
              css={{
                display: "flex",
                p: 10,
              }}
            >
              <Grid>
                <Text
                  css={{
                    height: "100%",
                    width: 150,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  size={30}
                >
                  Types:
                </Text>
              </Grid>
              <Grid
                css={{
                  display: "flex",
                }}
              >
                {types?.map((t) => (
                  <Card
                    key={t.type.name}
                    css={{
                      margin: "5px",
                      backgroundColor: "green",
                      display: "inline-block",
                    }}
                  >
                    <Text
                      size={20}
                      transform="capitalize"
                      css={{
                        width: 120,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {t.type.name}
                    </Text>
                  </Card>
                ))}
              </Grid>
            </Grid.Container>
          </Card.Body>

          <Card.Body>
            <Grid.Container
              gap={2}
              css={{
                display: "flex",
                p: 10,
              }}
            >
              <Grid>
                <Text
                  css={{
                    height: "100%",
                    width: 150,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  size={30}
                >
                  Information
                </Text>
              </Grid>
              <Grid
                css={{
                  display: "flex",
                }}
              >
                <Card
                  css={{
                    margin: "5px",
                    backgroundColor: "blue",
                    display: "inline-block",
                    width: 200,
                  }}
                >
                  <Text
                    size={20}
                    transform="capitalize"
                    css={{
                      display: "inline-block",
                    }}
                  >
                    Weight: {weight} kg
                  </Text>
                </Card>

                <Card
                  css={{
                    margin: "5px",
                    backgroundColor: "blue",
                    display: "inline-block",
                    width: 180,
                  }}
                >
                  <Text
                    size={20}
                    transform="capitalize"
                    css={{
                      display: "inline-block",
                      alignItems: "center",
                    }}
                  >
                    Height: {height} mts
                  </Text>
                </Card>
              </Grid>
            </Grid.Container>
          </Card.Body>

          <Card.Body>
            <Grid.Container css={{ marginTop: "5px" }} gap={1}>
              <Grid>
                <Text
                  css={{
                    height: "100%",
                    width: 150,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  size={30}
                >
                  Sprites:
                </Text>
              </Grid>
              <Grid css={{ width: "70%" }}>
                <Container
                  direction="row"
                  display="flex"
                  gap={1}
                  justify="space-around"
                >
                  <Image
                    src={sprites.front_default}
                    alt={name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={sprites.back_default}
                    alt={name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={sprites.front_shiny}
                    alt={name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={sprites.back_shiny}
                    alt={name}
                    width={100}
                    height={100}
                  />
                </Container>
              </Grid>
            </Grid.Container>
          </Card.Body>

          <Card.Body>
            <Grid.Container
              gap={2}
              css={{
                display: "flex",
                p: 10,
              }}
            >
              <Grid>
                <Text
                  css={{
                    height: "100%",
                    width: 150,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  size={30}
                >
                  Abilities:
                </Text>
              </Grid>
              <Grid
                css={{
                  display: "flex",
                }}
              >
                {abilities?.map((a) => (
                  <Card
                    key={a.ability.name}
                    css={{
                      margin: "5px",
                      backgroundColor: "green",
                      display: "inline-block",
                    }}
                  >
                    <Text
                      size={20}
                      transform="capitalize"
                      css={{
                        width: 120,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {a.ability.name}
                    </Text>
                  </Card>
                ))}
              </Grid>
            </Grid.Container>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
};
