import {
  Calendar,
  DeleteIcon,
  Home,
  Inbox,
  Search,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { toast } from "sonner";
import { useState } from "react";
import { Button } from "@base-ui/react";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const [item, setItem] = useState(Array<string>);
  const clickHandler = () => {
    console.log("Add button clicked");
    setItem([...item, "New Item"]);
    toast.success("Add button clicked");
  };
  return (
    <Sidebar className="z-5">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <button onClick={clickHandler}>Add</button>
              {item.map((i, index) => (
                <SidebarMenuItem key={index} className="flex justify-between">
                  {i} {index}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-2 p-0"
                    onClick={() =>
                      setItem((prev) =>
                        prev.filter((_, index) => index !== item.indexOf(i)),
                      )
                    }
                  >
                    <DeleteIcon />
                  </Button>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
