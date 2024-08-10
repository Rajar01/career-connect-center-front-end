'use client';

import React from 'react';
import {
  Button,
  Card, CardHeader, Input, Link, Tab, Tabs, Image,
} from '@nextui-org/react';
import FeatherIcon from 'feather-icons-react';

function LoginPage() {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <main className="h-screen flex flex-row items-center justify-between gap-x-[130px] pl-[130px] bg-white">
      <div className="basis-4/12 flex flex-col items-center justify-center text-darkAccent">
        <h1 className="text-[40px] font-bold">Welcome back</h1>
        <h2 className="text-[19px] mb-4">Log In to Discover New Opportunities</h2>
        <Tabs
          className="mb-6"
          color="primary"
          classNames={{
            base: 'text-base',
            tabList: 'rounded-lg',
            tab: 'h-10 w-[120px] rounded-lg',
          }}
        >
          <Tab key="employer" title="Employer" />
          <Tab key="recruiter" title="Recruiter" />
        </Tabs>
        <Input
          classNames={{
            base: 'h-[52px] mb-3',
            inputWrapper: [
              'rounded-lg h-full px-3',
              'group-data-[focus=true]:border-primary group-data-[focus=true]:border-2',
              'group-data-[hover=true]:border-primary',
            ],
            input: [
              'text-base !text-darkAccent',
              'placeholder:text-[#B3B3B3]',
              'data-[has-start-content=true]:ps-0 data-[has-end-content=true]:pe-0',
            ],
          }}
          variant="bordered"
          placeholder="Email"
        />
        <Input
          classNames={{
            base: 'h-[52px]  mb-3',
            inputWrapper: [
              'rounded-lg h-full px-3',
              'group-data-[focus=true]:border-primary group-data-[focus=true]:border-2',
              'group-data-[hover=true]:border-primary',
            ],
            input: [
              'text-base !text-darkAccent',
              'placeholder:text-[#B3B3B3]',
              'data-[has-start-content=true]:ps-0 data-[has-end-content=true]:pe-0',
            ],
          }}
          endContent={(
            <button type="button" onClick={() => setIsVisible(!isVisible)}>
              {isVisible ? (
                <FeatherIcon
                  icon="eye"
                  size={20}
                  className="text-[#B3B3B3] group-data-[focus=true]:text-darkAccent group-data-[has-value=true]:text-darkAccent"
                />
              ) : (
                <FeatherIcon
                  icon="eye-off"
                  size={20}
                  className="text-[#B3B3B3] group-data-[focus=true]:text-darkAccent group-data-[has-value=true]:text-darkAccent"
                />
              )}
            </button>
          )}
          variant="bordered"
          placeholder="Password"
          type={isVisible ? 'text' : 'password'}
        />
        <Link href="/" className="self-end mb-5 text-darkAccent">Forgot password?</Link>
        <Button className="h-[52px] mb-2 rounded-lg text-base" fullWidth color="primary">Login</Button>
        <span className="self-start">
          Don’t have an account?
          {' '}
          <Link href="/" className="text-darkAccent underline underline-offset-2">Register</Link>
        </span>
      </div>
      <div className="h-full basis-8/12 py-4 pr-4">
        <div className="relative h-full w-full bg-[url('/hero.jpg')]
            bg-cover bg-center p-8 flex flex-col justify-end gap-y-1 rounded-lg before:relative before:contents-['']
            before:bg-gradient-to-r before:from-[#323232] before:bottom-full before:left-0 before:w-full before:h-full before:opacity-80"
        >
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#022365] to-transparent opacity-80 rounded-lg"
          />
          <p className="indent-10 text-white text-[19px] font-medium z-10">
            “Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
            It has survived not only five centuries,”
          </p>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
