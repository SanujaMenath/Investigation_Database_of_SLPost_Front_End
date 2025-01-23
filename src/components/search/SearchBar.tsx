import { TextField, Box, Button, Flex } from "@radix-ui/themes";
import { FilterPopover } from "./FilterPopover";
import { FilterType } from "../../@types/search";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

interface SearchBarProps {
  onSearch: () => void;
  onFilterChange: (type: FilterType) => void;
  searchValue: string;
  onSearchValueChange: (value: string) => void;
}

export const SearchBar = ({ 
  onSearch, 
  onFilterChange, 
  searchValue, 
  onSearchValueChange 
}: SearchBarProps) => {
  return (
    <Flex gap="3" align="center">
      <Box>
        <TextField.Root
          size="3"
          radius="full"
          placeholder="Search case files..."
          value={searchValue}
          onChange={(e) => onSearchValueChange(e.target.value)}
        >
          <TextField.Slot>
            <MagnifyingGlassIcon />
          </TextField.Slot>
          <TextField.Slot>
            <FilterPopover onFilterChange={onFilterChange} />
          </TextField.Slot>
        </TextField.Root>
      </Box>
      <div className="border border-indigo-500 rounded-full">
        <Button size="3" variant="soft" radius="full" onClick={onSearch}>
          Search
        </Button>
      </div>
    </Flex>
  );
};