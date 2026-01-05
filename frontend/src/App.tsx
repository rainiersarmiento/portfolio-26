import { ComponentExample } from "@/components/component-example";
import Navbar from "./components/Navbar";
import Landing from "./sections/Landing";
import Contact from "./sections/Contact";
import About from "./sections/About";
export function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Contact />
      <ComponentExample />
    </>
  );
}

export default App;
