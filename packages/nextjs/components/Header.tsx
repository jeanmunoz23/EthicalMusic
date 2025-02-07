"use client";

import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RainbowKitCustomConnectButton } from "./scaffold-eth";
import { FaBars } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useOutsideClick } from "~~/hooks/scaffold-eth";

type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Aprender",
    href: "/",
    icon: <MdOutlineKeyboardArrowDown className="h-4 w-4" />,
  },
  {
    label: "Construir",
    href: "/",
    icon: <MdOutlineKeyboardArrowDown className="h-4 w-4" />,
  },
  {
    label: "Alianzas",
    href: "/",
    icon: <MdOutlineKeyboardArrowDown className="h-4 w-4" />,
  },
  {
    label: "Comunidad",
    href: "/",
    icon: <MdOutlineKeyboardArrowDown className="h-4 w-4" />,
  },
];

export const HeaderMenuLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ label, href, icon }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              passHref
              className={`${
                isActive ? "shadow-md" : ""
              } hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm   gap-2 grid grid-flow-col`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

/**
 * Site header
 */
export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  return (
    <header>
      <div className="px-5 md:flex items-center fixed top-0 navbar  min-h-20 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2 w-full">
        <div className="navbar-start w-auto md:flex">
          <div className="lg:hidden dropdown" ref={burgerMenuRef}>
            <label
              tabIndex={0}
              className={`ml-1 btn btn-ghost ${isDrawerOpen ? "hover:bg-secondary" : "hover:bg-transparent"}`}
              onClick={() => {
                setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
              }}
            >
              <FaBars />
            </label>
            {isDrawerOpen && (
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                onClick={() => {
                  setIsDrawerOpen(false);
                }}
              >
                <HeaderMenuLinks />
              </ul>
            )}
          </div>
          <Link href="/" passHref className="hidden lg:flex items-center gap-2 ml-4 mr-6 shrink-0">
            <div className="flex flex-col">
              <span className="font-bold leading-tight">Ethical Music</span>
            </div>
            <div className="flex relative w-10 h-10">
              <Image alt="SE2 logo" className="cursor-pointer" fill src="/logo.svg" />
            </div>
          </Link>
        </div>
        <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2">
          <HeaderMenuLinks />
        </ul>

        <div className="flex items-center">
          <RainbowKitCustomConnectButton />
        </div>
      </div>
    </header>
  );
};
