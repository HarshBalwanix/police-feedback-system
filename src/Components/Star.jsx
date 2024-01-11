//Star.js
"use client";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

export function MyComponent({ triggerNextStep }) {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
    // console.log(rating);
    triggerNextStep({ value: number, trigger: "18" });
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Rating onClick={handleRating} />
    </div>
  );
}
