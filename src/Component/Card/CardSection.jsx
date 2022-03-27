import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Grid,
} from "@mui/material";
import CardSections from "./CardSections";

const CardSection = () => {
  return (
    <>
      <Grid container spacing={2}  sx={{ flexGrow:1 }} >
        <Grid item sx={12}>
          <Card sx={{ maxWidth: 345, mt: 6, borderRadius: "10px" }}>
            <CardActionArea>
              <CardMedia
                borderRadius="10px"
                component="img"
                height="140"
                image="https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_w=320"
                alt="green"
              />
              <CardContent sx={{ backgroundColor: "#cc2d4a", height: "300" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Lonavala
                </Typography>
                <Typography
                  variant="body1"
                  marginBottom={10}
                  color="text.secondary"
                >
                  66 Kilometeres away
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default CardSection;
