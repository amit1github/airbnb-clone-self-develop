import React, { useState, useEffect } from "react";
import { Typography, Grid, Box, IconButton, Container } from "@mui/material";
import { ArrowForwardIosRounded } from "@mui/icons-material";
import CardSections from "./CardSections";

//Todo: look for style of typo and arrow in one line
//Todo: GO FOR GREEN COMMENTS

const CardSection = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/cards")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <Container>
      <Box sx={{ justifyContent: "space-between" }}>
        <Typography variant="h5">Inspiration for your next trip</Typography>
        <IconButton>
          <ArrowForwardIosRounded />
        </IconButton>
      </Box>

      <Grid container sx={{ flexGrow: 1 }} spacing={2} justifyContent="center">
        {cards.map((card) => (
          //TODO: {/* Screen spacing issue while giving screen size to 3 */}
          <Grid item key={card.id} xs={12} sm={6} lg={4}>
            {/* {card.destination} */}

            <CardSections card={card} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardSection;
