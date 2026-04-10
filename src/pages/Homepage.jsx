import React from "react";
import MainKeyVisual from "../components/MainKeyVisual";
import FeatureStory from "../components/FeatureStory";
import Resources from "../components/Resources";

const Homepage = () => {
  return (
    <div className="flex flex-col gap-8 px-3">
      <MainKeyVisual />
      <FeatureStory />
      <Resources />
    </div>
  );
};

export default Homepage;
