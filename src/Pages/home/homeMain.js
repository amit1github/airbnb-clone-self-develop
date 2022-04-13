import React from "react";
// import Navbar from "/src/Component/Navbar.jsx";
import Navbar from "../home/HomeComponents/Navbar"
import CallToAction from "./HomeComponents/CallToAction";
import CardExperience from "./HomeComponents/CardExperience";
import CardTrip from "./HomeComponents/CardTrip";
import Footer from "../home/HomeComponents/Footer"
import { Box } from "@mui/system";

const homeMain = () => {
  return (
    <Box>
      <Navbar />
      <Box sx={{ backgroundColor: "black", height: 250 }} />
      <CallToAction />
      <CardTrip />
      <CardExperience />
      <Footer />
    </Box>
  );
};

export default homeMain;
