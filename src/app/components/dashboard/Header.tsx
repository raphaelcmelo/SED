"use client";
import React from "react";
import AppBarComponent from "./AppBarComponent";
import DrawerComponent from "./Drawer";

export default function Header() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <DrawerComponent open={open} toggleDrawer={toggleDrawer} />
      <AppBarComponent open={open} toggleDrawer={toggleDrawer} />
    </>
  );
}
