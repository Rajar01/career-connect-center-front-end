'use client';

import React, { useState } from 'react';
import {
  Navbar as NextUINavbar, Button, Image, Link, NavbarBrand, NavbarContent, NavbarItem,
} from '@nextui-org/react';

function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    window.addEventListener('scroll', (_) => {
      if (window.scrollY >= 96) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    });
  }

  return (
    <NextUINavbar
      isBordered
      maxWidth="full"
      classNames={{
        item: ['data-[active=true]:font-bold'], base: 'px-[130px] border-b-[2px] border-[#D9D9D9]', wrapper: 'px-0 h-24',
      }}
      className={`${isScrolling ? 'bg-white' : 'bg-secondary'}`}
    >
      <NavbarContent justify="start" className="gap-8">
        <NavbarItem>
          <NavbarBrand>
            <Image src="./logo.svg" alt="career connect center logo" />
          </NavbarBrand>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/" className="text-darkAccent hover:text-primary">Employers</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/company" className="text-darkAccent hover:text-primary">Company</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} className="rounded h-12 w-[120px] text-primary text-[16px]" variant="bordered" color="primary">Login</Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className="rounded h-12 w-[120px] text-[16px]" color="primary">Register</Button>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
}

export default Navbar;
