import React from "react";
import {
  Typography,
  Grid,
  Box,
  IconButton,
  Container,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
// import { ArrowForwardIosRounded } from "@mui/icons-material";

const CardSection = () => {
  const cardInfo = [
    {
      destination: "Lonavla",
      distance: "66 kilometres away",
      image:
        "https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_w=320",
      color: "blue",
      id: 1,
    },
    {
      destination: "Alibagh",
      distance: "37 kilometres away",
      image:
        "https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_w=320",
      color: "blue",
      id: 2,
    },
    {
      destination: "Calangute",
      distance: "396 kilometres away",
      image:
        "https://a0.muscache.com/im/pictures/88960fb8-6ebb-48d2-ac44-4f5e08501435.jpg?im_w=320",
      color: "blue",
      id: 3,
    },
    {
      destination: "Karjat",
      distance: "53 kilometres away",
      image:
        "https://a0.muscache.com/im/pictures/a7a97132-3ab9-4969-ad23-32c676193df7.jpg?im_w=240",
      color: "blue",
      id: 4,
    },
  ];

  return (
    <Container sx={{ mb: 6 }}>
      <Box>
        <Typography variant="h5">Inspiration for your next trip</Typography>
      </Box>
      <Grid item xs={12}>
        <Grid
          container
          justifyContent="center"
          sx={{ flexGrow: 1 }}
          spacing={2}
        >
          {cardInfo.map((card) => (
            <Grid item key={card.id}>
              <Card
                sx={{ width: 300, height: 350, mt: 3, borderRadius: "10px" }}
              >
                <CardActionArea>
                  <CardMedia
                    borderRadius="10px"
                    component="img"
                    height="200"
                    image={card.image}
                    alt="Card"
                  />
                  <CardContent sx={{ backgroundColor: "#cc2d4a" }}>
                    <Typography gutterBottom variant="h5" color="whitesmoke">
                      {card.destination}
                    </Typography>
                    <Typography variant="body1" marginBottom={16} color="white">
                      {card.distance}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CardSection;
