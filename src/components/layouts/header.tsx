"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import Logo from "../../../public/favicons/logo.svg";
import { HeaderNavigationLinks } from "@/constants/layouts-data";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <header className="h-[88px] header-shadow w-full bg-background sticky top-[-1px] left-0 z-[200]">
      <div className="layout-standard h-full flex items-center justify-between">
        <Link href={"/"} passHref>
          <Image src={Logo} alt="Legal Trademark Office" priority width={100} />
        </Link>

        <div className="md:flex hidden items-center lg:gap-12 gap-8">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center lg:gap-8 gap-4 text-heading font-medium lg:text-lg md:text-base font-inter">
              {HeaderNavigationLinks.map((link, index) => (
                <Fragment key={index}>
                  {link.subLinks ? (
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-heading font-medium lg:text-lg md:text-base font-inter">
                        {link.navText}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="lg:w-[300px] w-[250px] flex flex-col gap-4 px-4 pt-4 pb-6 lg:text-base text-sm font-medium font-inter text-heading">
                          {link.subLinks.map((subLink, subIndex) => (
                            <Fragment key={subIndex}>
                              <NavigationMenuLink
                                href={subLink.subLink}
                                className={cn(
                                  pathname === subLink.subLink
                                    ? "text-primary"
                                    : "hover:text-primary"
                                )}
                              >
                                {subLink.subLinkText}
                              </NavigationMenuLink>

                              {subIndex < link.subLinks.length - 1 && (
                                <Separator />
                              )}
                            </Fragment>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem
                      className={cn(
                        pathname === link.navLink
                          ? "text-primary"
                          : "hover:text-primary"
                      )}
                    >
                      <NavigationMenuLink href={link.navLink}>
                        {link.navText}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )}
                </Fragment>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            onClick={() => handleNavigation("/business-registration/step-1")}
            className="h-[45px] lg:text-base rounded-lg border-2 border-primary bg-transparent text-primary font-inter font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Trademark Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
