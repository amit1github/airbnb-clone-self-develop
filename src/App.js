import React from "react";
import AppBar from "./Component/Header/AppBar";
import CallToAction from "./Component/Header/CallToAction.jsx";
import CardTrip from "./Pages/home/Card/CardTrip";
import CardExperience from "./Pages/home/CardExp/CardExperience";
import Footer from "./Component/Footer/Footer.jsx";

import commerce from "./lib/commerce";

import { Box } from "@mui/material";

const App = () => {
  return (
    <Box>
      <AppBar />
      <Box sx={{ backgroundColor: "black", height: 250 }} />
      <CallToAction />
      <CardTrip />
      <CardExperience/>
      <Footer />
    </Box>
  );
};

export default App;