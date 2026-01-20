import { ComponentExample } from "@/components/component-example";
import { Toaster } from "./components/ui/sonner";
import Navbar from "./components/Navbar";
import Landing from "./sections/Landing";
import Contact from "./sections/Contact";
import About from "./sections/About";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";

export function App() {
  return (
    <>
      <SidebarProvider>
        <Toaster position="top-center" />
        <AppSidebar />
        <main>
          <Navbar />
          <SidebarTrigger />
          <Landing />
          <About />
          <Contact />
          <ComponentExample />
        </main>
      </SidebarProvider>
    </>
  );
}

export default App;
