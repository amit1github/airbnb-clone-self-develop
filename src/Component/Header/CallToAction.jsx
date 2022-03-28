import React from "react";
import {
  Container,
  Box,
  Card,
  CardActionArea,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import banners from "./Assets/banners.jpg";

// TODO: to make action button like airbnb

const CallToAction = () => {
  return (
    <Container sx={{ borderRadius: 0, mb: 6 }}>
      <Card
        sx={{
          borderRadius: "20px",
          backgroundImage: `url(${banners})`,
          backgroundSize: "cover",
          height: "400px",
          padding: "30px",
          marginTop: "-200px",
        }}
      >
        <CardActionArea>
          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 6,
              position: "absolute",
              bottom: -400,
              left: 0,
              right: 0,
            }}
          >
            <Typography variant="h5" color="white" mb={3}>
              Let your curiosity do the booking
            </Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: 14,
                color:
                  "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
                backgroundColor: "#4158D0",
                textTransform: "none",
              }}
            >
              I'm flexible
            </Button>
          </Stack>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default CallToAction;
