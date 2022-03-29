import React, { useState } from "react";
import {
  Typography,
  Grid,
  Container,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Stack,
} from "@mui/material";
// import CardExperiences from "./CardExperience";

const CardExperience = () => {
  const [cardExp, setCardExp] = useState([
    {
      id: 1,
      alt: "card-one",
      image:
        "https://a0.muscache.com/im/pictures/35612883-8e4c-440a-a768-ca7f268bd294.jpg?im_w=320",
      cardText: "Things to do on your trip",
      buttonText: "Experiences",
    },
    {
      id: 2,
      alt: "card-two",
      image:
        "https://a0.muscache.com/im/pictures/aec597d9-9c5c-4746-965c-d3e1643299f7.jpg?im_w=320",
      cardText: "Things to do from home",
      buttonText: "Online Experiences",
    },
  ]);

  return (
    <Container>
      <Typography variant="h5">Discover Airbnb Experiences</Typography>
      <Grid container sx={{ flexGrow: 1 }} spacing={2} justifyContent="center">
        {cardExp.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} lg={4}>
            <Card sx={{ width: 300, height: 350, mt: 3, borderRadius: "10px" }}>
              <CardMedia
                borderRadius="10px"
                component="img"
                height="200"
                image={card.image}
                alt={card.alt}
              />
              <CardActionArea>
                <Stack 
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 6,
                    position: "absolute",
                    // bottom: -400,
                    left: 0,
                    right: 0,
                  }}
                >
                  <Typography gutterBottom variant="h5" color="whitesmoke">
                    {card.cardText}
                  </Typography>
                  <Button variant="contained">{card.buttonText}</Button>
                </Stack>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardExperience;
