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
  Box,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { fontWeight, maxWidth } from "@mui/system";
// import { height } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    borderRadius: "10px",
    height: "450px",
    width: "400px",
  },

  stack: {
    marginTop: "-105%",
    paddingLeft: "6px",
    maxWidth: "60%",
    position: "absolute",
  },

  button: {
    maxWidth: "250px",
    color: "black",
    backgroundColor: "whitesmoke",
    fontWeight: "bold",
    textTransform: "none",
    '&:hover': {
      backgroundColor: "#fce9e9"
    }
  },

  container: {
    minHeight: "100vh",
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // [theme.breakpoints.down("sm")] : {
    //   maxWidth: 200
    //   }
  },
}));

const CardExperience = () => {
  const classes = useStyles();

  const cardExp = [
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
  ];

  return (
    <>
      <Container className={classes.container}>
        <Box>
          <Typography variant="h5">Discover Airbnb Experiences</Typography>
        </Box>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Grid
            container
            sx={{ flexGrow: 1 }}
            spacing={2}
            justifyContent="center"
          >
            {cardExp.map((card) => (
              <Grid item key={card.id}>
                <Box sx={{ mt: 2 }}>
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt={card.alt}
                    className={classes.cardMedia}
                  />
                  <CardActionArea>
                    <Stack className={classes.stack}>
                      <Typography gutterBottom variant="h4" color="whiteSmoke">
                        {card.cardText}
                      </Typography>
                      <Button variant="contained" className={classes.button}>
                        {card.buttonText}
                      </Button>
                    </Stack>
                  </CardActionArea>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CardExperience;
