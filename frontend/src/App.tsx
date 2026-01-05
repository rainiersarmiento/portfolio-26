import { ComponentExample } from "@/components/component-example";
import Navbar from "./components/Navbar";
import Landing from "./sections/Landing";

export function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <ComponentExample />
    </>
  );
}

export default App;
