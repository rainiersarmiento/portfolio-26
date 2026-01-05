import { ComponentExample } from "@/components/component-example";
import Navbar from "./components/Navbar";
import Landing from "./sections/Landing";
import Contact from "./sections/Contact";
export function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Contact />
      <ComponentExample />
    </>
  );
}

export default App;
