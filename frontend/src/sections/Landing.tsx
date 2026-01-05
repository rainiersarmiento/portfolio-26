import { useState, useEffect, useMemo } from "react";

import Avatar from "@/components/Avatar";

const Landing = () => {
  // Cycle through text using useEffect
  const intro: Array<string> = useMemo(
    () => ["Web Developer", "Software Engineer"],
    []
  );
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setIndex(index === 0 ? 1 : 0), 2000);
    return () => clearTimeout(timer);
  }, [intro, index]);
  return (
    <>
      <div>
        <Avatar />
        <h1>Rainier Sarmiento, </h1>
        <h2>{intro[index]}</h2>
      </div>
    </>
  );
};
export default Landing;
