import { Link } from "react-router-dom";
import { Button, DropdownMenu } from "@radix-ui/themes";
import { navbar } from "../../data/navbar";

const Header = () => {
  return (
    <>
      <img
        src="https://slpost.gov.lk/wp-content/uploads/2019/10/DOP_header.png"
        alt="Department of Posts"
        className="mx-auto "
      />

      <nav className="h-10 flex gap-2 my-2">
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
                  <Link to={subItem.url}>{subItem.name}</Link>
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
