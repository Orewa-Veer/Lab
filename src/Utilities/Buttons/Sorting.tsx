"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";

interface Props {
  sortType: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

export function ComboboxDemo({ sortType, setSort }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>{sortType}</PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem
                onSelect={() => {
                  setSort("newest");
                  setOpen(!open);
                }}
              >
                Newest
              </CommandItem>

              <CommandItem
                onSelect={() => {
                  setSort("upvotes");
                  setOpen(!open);
                }}
              >
                Upvotes
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
