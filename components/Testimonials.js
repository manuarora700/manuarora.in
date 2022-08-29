import { testimonials } from "@/constants/testimonials";
import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import TestimonialRow from "./TestimonialRow";

const Testimonials = () => {
  const [playing, setPlaying] = useState(true);
  return (
    <div className="w-full p-4 relative">
      <TestimonialRow speed={20} playing={playing}>
        {testimonials.map((card, idx) => (
          <TestimonialCard key={idx} card={card} />
        ))}
      </TestimonialRow>
    </div>
  );
};

export default Testimonials;
