'use client';

import React from 'react';
import { Button, Link } from '@nextui-org/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import OtpInput from 'react-otp-input';

function EmailConfirmationPage() {
  const [otp, setOtp] = React.useState('');

  return (
    <main className="h-screen flex flex-row items-center justify-between gap-x-[130px] pl-[130px] bg-white">
      <div className="basis-4/12 flex flex-col items-center justify-center text-darkAccent">
        <h1 className="text-[40px] font-bold self-start">Enter the Code</h1>
        <h2 className="text-[19px] mb-6 self-start">
          A confirmation code has been sent to your email a*****y@gmail.com.
          Please enter the code below to verify your email and complete your registration.
        </h2>
        <OtpInput
          containerStyle="w-full flex flex-row justify-between mb-6"
          inputStyle="h-[80px] !w-[80px] hover:border-primary border-[#D9D9D9] border-2 rounded text-[23px] text-darkAccent"
          value={otp}
          onChange={setOtp}
          numInputs={4}
          inputType="tel"
          renderInput={(props) => <input {...props} />}
        />
        <Button className="h-[52px] mb-2.5 rounded-lg text-base" fullWidth color="primary">Continue</Button>
        <Button className="h-[52px] mb-2.5 rounded-lg text-base" fullWidth color="primary" variant="bordered">Send code again</Button>
        <span className="self-start">
          Remember your password?
          {' '}
          <Link href="/register" className="text-darkAccent underline underline-offset-2">Log in</Link>
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

export default EmailConfirmationPage;
