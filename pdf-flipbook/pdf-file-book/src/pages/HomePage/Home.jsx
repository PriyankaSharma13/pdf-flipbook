
import React from "react";
import Navbar from "../../component/Navbar/Navbar"; 
import Banner from "../../component/Banner/Banner";
import Content from "../../component/Content/content";
import FeatureCard from "../../component/Content/FeatureCard";

const HomePage = () => {
  return (
    <div>
      <Navbar />
     <Banner/>
     <Content/>
     <FeatureCard/>
      </div>

  );
};

export default HomePage;
