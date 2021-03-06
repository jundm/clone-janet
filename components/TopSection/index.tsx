import React from "react";
import MainChart from "./MainChart";
import MainInfo from "./MainInfo";
import Slide from "./Slide";
import { ContentTop_section } from "./Slide/style";

interface TopSectionProps {}

function TopSection({}: TopSectionProps) {
  return (
    <ContentTop_section>
      <div style={{ display: "grid", placeContent: "center" }}>
        <div style={{ width: "1250px" }}>
          <Slide />
          <MainInfo />
          <MainChart />
        </div>
      </div>
    </ContentTop_section>
  );
}

export default TopSection;
