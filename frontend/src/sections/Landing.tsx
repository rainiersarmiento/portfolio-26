import { useState, useEffect, useMemo } from "react";

import Avatar from "@/components/Avatar";

const Landing = () => {
  // Cycle through text using useEffect
  const intro: Array<string> = useMemo(
    () => ["Web Developer", "Software Engineer", "IT Technician", "Explorer"],
    []
  );
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(
      () =>
        index < intro.length - 1
          ? setIndex((prevIndex) => prevIndex + 1)
          : setIndex(0),
      2500
    );
    return () => clearTimeout(timer);
  }, [intro, index]);
  return (
    <section id="landing">
      <Avatar />
      <h1>
        <strong>Rainier Sarmiento</strong>,{" "}
      </h1>
      <h2 key={index}>{intro[index]}</h2>
    </section>
  );
};
export default Landing;
