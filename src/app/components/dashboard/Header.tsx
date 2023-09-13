"use client";
import React, { useEffect } from "react";
import AppBarComponent from "./AppBarComponent";
import DrawerComponent from "./Drawer";
import { selectUser, useSelector } from "@/lib/redux";
import { useRouter } from "next/navigation";

export default function Header() {
  const [open, setOpen] = React.useState(true);
  const { usuario } = useSelector(selectUser);
  const router = useRouter();
  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (!usuario) {
      router.push("/login");
    }
  }, [router, usuario]);

  return (
    <>
      <DrawerComponent open={open} toggleDrawer={toggleDrawer} />
      <AppBarComponent open={open} toggleDrawer={toggleDrawer} />
    </>
  );
}
