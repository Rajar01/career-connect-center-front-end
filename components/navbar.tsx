'use client';

import React, { useState } from 'react';
import {
  Navbar as NextUINavbar, Button, Image, Link, NavbarBrand, NavbarContent, NavbarItem, Avatar,
  PopoverTrigger,
  Popover,
  PopoverContent, Divider,
  Listbox,
  ListboxItem,
} from '@nextui-org/react';
import { UserType } from '@/enums/enums';
import FeatherIcon from 'feather-icons-react';

type NavbarProps = {
  userType : UserType
};

function Navbar({ userType }: NavbarProps) {
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
      className={`${isScrolling || userType !== UserType.Guest ? 'bg-white' : 'bg-secondary'}`}
    >
      <NavbarContent justify="start" className="gap-8">
        <NavbarItem>
          <NavbarBrand>
            <Image src="/logo.svg" alt="career connect center logo" />
          </NavbarBrand>
        </NavbarItem>
        {userType === UserType.Employer && (
        <NavbarItem isActive>
          <Link href="/" className="text-darkAccent hover:text-primary">Find Jobs</Link>
        </NavbarItem>
        )}
        {userType === UserType.Guest && (
        <>
          <NavbarItem isActive>
            <Link href="/" className="text-darkAccent hover:text-primary">Employers</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/company" className="text-darkAccent hover:text-primary">Company</Link>
          </NavbarItem>
        </>
        )}
      </NavbarContent>
      <NavbarContent justify="end">
        {userType === UserType.Guest ? (
          <>
            <NavbarItem>
              <Button as={Link} href="/login" className="rounded h-12 w-[120px] text-primary text-[16px]" variant="bordered" color="primary">Login</Button>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} className="rounded h-12 w-[120px] text-[16px]" color="primary">Register</Button>
            </NavbarItem>
          </>
        ) : (
          <>
            <Popover placement="bottom-end" classNames={{ content: 'rounded w-[480px] p-0' }}>
              <PopoverTrigger>
                <Button isIconOnly color="primary" variant="bordered" className="h-[40px] w-[40px] rounded">
                  <FeatherIcon icon="bell" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="p-4 w-full text-darkAccent text-[19px] font-bold border-b-[#D9D9D9] border-b-2">
                  Notification
                </div>
                <div className="w-full p-4 space-y-3">
                  <div className="flex flex-row items-center justify-between gap-x-3">
                    <div className="flex flex-row items-center gap-x-3">
                      <div className="bg-secondary p-3 rounded-full text-primary"><FeatherIcon icon="globe" /></div>
                      <div className="flex flex-col items-start gap-y-0.5">
                        <span className="font-bold text-darkAccent">Job Application Submitted</span>
                        <span className="text-[#B3B3B3]">
                          You have an interview scheduled with FinTech Ltd. on August 15, 2024
                        </span>
                      </div>
                    </div>
                    <span className="text-[#B3B3B3] text-[14px] whitespace-nowrap">2 Minute Ago</span>
                  </div>
                  <Divider className="h-[1.6px] bg-[#D9D9D9] rounded" />
                  <div className="flex flex-row items-center justify-between gap-x-3">
                    <div className="flex flex-row items-center gap-x-3">
                      <div className="bg-secondary p-3 rounded-full text-primary"><FeatherIcon icon="globe" /></div>
                      <div className="flex flex-col items-start gap-y-0.5">
                        <span className="font-bold text-darkAccent">Job Application Submitted</span>
                        <span className="text-[#B3B3B3]">
                          You have an interview scheduled with FinTech Ltd. on August 15, 2024
                        </span>
                      </div>
                    </div>
                    <span className="text-[#B3B3B3] text-[14px] whitespace-nowrap">2 Minute Ago</span>
                  </div>
                  <Divider className="h-[1.6px] bg-[#D9D9D9] rounded" />
                  <div className="flex flex-row items-center justify-between gap-x-3">
                    <div className="flex flex-row items-center gap-x-3">
                      <div className="bg-secondary p-3 rounded-full text-primary"><FeatherIcon icon="globe" /></div>
                      <div className="flex flex-col items-start gap-y-0.5">
                        <span className="font-bold text-darkAccent">Job Application Submitted</span>
                        <span className="text-[#B3B3B3]">
                          You have an interview scheduled with FinTech Ltd. on August 15, 2024
                        </span>
                      </div>
                    </div>
                    <span className="text-[#B3B3B3] text-[14px] whitespace-nowrap">2 Minute Ago</span>
                  </div>
                </div>
                <Link href="/notifications" className="p-4 w-full text-base text-darkAccent font-bold border-b-[#D9D9D9] border-t-2">
                  Show all notification
                </Link>
              </PopoverContent>
            </Popover>
            <Popover placement="bottom-end" classNames={{ content: 'rounded w-[200px] p-0' }}>
              <PopoverTrigger>
                <Button isIconOnly color="primary" variant="light" className="h-[40px] w-[40px] rounded-full">
                  <Avatar src="/avatar.jpg" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Listbox classNames={{ base: 'p-2 rounded' }}>
                  <ListboxItem classNames={{ title: 'text-base' }} className="rounded text-darkAccent" key="profile" href={`/dashboard/${userType === UserType.Employer ? 'employer' : userType === UserType.Company && 'company'}/profile`}>Profile</ListboxItem>
                  <ListboxItem classNames={{ title: 'text-base' }} className="rounded text-danger" key="log-out" color="danger">
                    Log out
                  </ListboxItem>
                </Listbox>
              </PopoverContent>
            </Popover>
          </>
        )}
      </NavbarContent>
    </NextUINavbar>
  );
}

export default Navbar;
