import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import TaskSummarizer from "./TaskSummarizer";
import LanguageTranslator from "./LanguageTranslator";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task_summarizer" element={<TaskSummarizer />} />
        <Route path="/language_tanslator" element={<LanguageTranslator />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
