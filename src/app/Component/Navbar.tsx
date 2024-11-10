"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./Ui/navbar_menu";
import { cn } from "../utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50  space-x-6",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <Link href="/Home">Home</Link>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-2 text-sm">
            <HoveredLink href="/All courses">All Courses</HoveredLink>
            <HoveredLink href="/courses/Chef Basics">Chef Basics</HoveredLink>
            <HoveredLink href="/courses/Advanced Cooking">
              Advanced Cooking
            </HoveredLink>
            <HoveredLink href="/courses/Pastry Making">
              Pastry Making
            </HoveredLink>
            <HoveredLink href="/courses/Gourmet Cooking">
              Gourmet Cooking
            </HoveredLink>
            <HoveredLink href="/courses/Culinary Art">Culinary Art</HoveredLink>
            <HoveredLink href="/courses/Food Pairing">Food Pairing</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <Link href="/Contact Us">Contact Us</Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
