import { Button, DropdownMenu } from "@radix-ui/themes";
import { navbar } from "../data/navbar";

const Header = () => {
  return (
    <>
      <nav className="h-10 flex gap-2">
        {navbar.map((navItem) => (
          <DropdownMenu.Root key={navItem.headItem.name}>
            <DropdownMenu.Trigger>
              <Button variant="soft">
                {navItem.headItem.name}
                {navItem.subItems && <DropdownMenu.TriggerIcon />}
              </Button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content>
              {navItem.subItems?.map((subItem, index) => (
                <DropdownMenu.Item key={index} shortcut="🖉">
                  {subItem.name}
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        ))}
      </nav>
    </>
  );
};

export default Header;
