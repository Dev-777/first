import React from "react";
import "../../../assets/css/main.css";
import { SectionLeft } from "./sectionLeft/SectionLeft";
import { SectionRight } from "./sectionRight/SectionRight";

export const Main = () => {
  return (
    <main className="d-flex col justify-content-between flex-wrap">
      <SectionLeft />
      <SectionRight />
    </main>
  );
};
