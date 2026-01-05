import { ComponentExample } from "@/components/component-example";
import { Toaster } from "./components/ui/sonner";
import Navbar from "./components/Navbar";
import Landing from "./sections/Landing";
import Contact from "./sections/Contact";

export function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Navbar />
      <Landing />
      <Contact />
      <ComponentExample />
    </>
  );
}

export default App;
