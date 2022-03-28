import React from "react";
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";

const CardSections = ({card}) => {
  return (
    <Box>
      <Card sx={{ width: 300, height: 350, mt: 3, borderRadius: "10px" }}>
        <CardActionArea>
          <CardMedia
            borderRadius="10px"
            component="img"
            height="200"
            image={card.image}
            alt="Card"
          />
          {/* unable to pass props of backgroundColor */}
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
    </Box>
  );
};

export default CardSections;
