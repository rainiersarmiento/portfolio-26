import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface NavObj {
  name: string;
  href: string;
}

const navigation: Array<NavObj> = [
  {
    name: "github",
    href: "https://github.com/rainiersarmiento",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/rainier-sarmiento/",
  },
];

const Navbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="#home">Home</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          {/* <a href="about">About</a> */}
          <NavigationMenuLink href="about">About</NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Links</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>LinkedIn</NavigationMenuLink>
          </NavigationMenuContent>
          <NavigationMenuContent>
            <NavigationMenuLink>Github</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default Navbar;
