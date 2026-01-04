import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <a href="Home">Home</a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          {/* <a href="about">About</a> */}
          <NavigationMenuLink>
            <a href="github">About</a>
          </NavigationMenuLink>
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
