import { useState } from "react";
import { Popover, RadioGroup, Flex, Button } from "@radix-ui/themes";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { FilterType } from "../../@types/search";

interface FilterPopoverProps {
  onFilterChange: (type: FilterType) => void;
}

export const FilterPopover = ({ onFilterChange }: FilterPopoverProps) => {
  const [value, setValue] = useState<FilterType>("fileNumber");

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="ghost" size="2">
          <DotsHorizontalIcon width="16" height="16" />
        </Button>
      </Popover.Trigger>
      <Popover.Content className="w-[200px] p-3">
        <RadioGroup.Root
          value={value}
          onValueChange={(val: FilterType) => {
            setValue(val);
            onFilterChange(val);
          }}
        >
          <Flex direction="column" gap="2">
            <RadioGroup.Item value="fileNumber">File Number</RadioGroup.Item>
            <RadioGroup.Item value="nic">NIC</RadioGroup.Item>
            <RadioGroup.Item value="incidentDate">
              Incident Date
            </RadioGroup.Item>
          </Flex>
        </RadioGroup.Root>
      </Popover.Content>
    </Popover.Root>
  );
};
