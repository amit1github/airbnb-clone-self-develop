import React from "react";
import Navbar from "./Component/Header/Navbar.jsx";
import CallToAction from "./Component/Header/CallToAction.jsx";
import CardSection from "./Component/Card/CardSection";
import Footer from "./Component/Footer/Footer.jsx"

import commerce from "./lib/commerce";

import { Box, Container } from "@mui/material";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Box sx={{ backgroundColor: "black", height: 250 }} />
      <Container>
        <CallToAction />
        <CardSection/>
      </Container>
      <Footer/>
    </Box>
  );
};

export default App;
