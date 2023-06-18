"use client";
import { CircularProgress } from "@mui/material";
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-white">
      <CircularProgress color="primary" />
    </div>
  );
};

export default React.memo(Loader);
