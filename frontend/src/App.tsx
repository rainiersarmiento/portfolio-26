import { ComponentExample } from "@/components/component-example";
import { Toaster } from "./components/ui/sonner";
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
      <Toaster />
    </>
  );
}

export default App;
