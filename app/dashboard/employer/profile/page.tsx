import React from 'react';
import Navbar from '@/components/navbar';
import UserType from '@/enums/user-type';
import {
  Button, DatePicker, Image, Input,
} from '@nextui-org/react';
import Footer from '@/components/footer';

function EmployerProfilePage() {
  return (
    <>
      <Navbar userType={UserType.Employer} />
      <main className="px-[130px] pt-16 mb-20 bg-white">
        <section className="mb-8">
          <h1 className="text-darkAccent text-[40px] font-bold mb-1">My Profile</h1>
          <h2 className="text-darkAccent text-base">
            Manage your personal information, preferences, and account settings
          </h2>
        </section>
        <section>
          <div className="space-y-6 mb-12">
            <div className="flex flex-col">
              <span className="text-darkAccent font-medium mb-2">Profile picture</span>
              <Image src="/avatar.jpg" className="object-cover h-[80px] w-[80px] rounded mb-5" />
              <Button color="primary" className="text-base rounded h-[40px] w-[120px] mb-3">Upload photo</Button>
              <span
                className="text-darkAccent text-[14px]"
              >
                Upload photos in JPG/JPEG/PNG format (maximum 2 MB).
              </span>
            </div>
            <div className="flex flex-col">
              <span
                className="text-darkAccent font-medium mb-2 after:text-danger after:content-['_*']"
              >
                Full name
              </span>
              <Input
                classNames={{
                  base: 'w-[580px] h-[40px]',
                  inputWrapper: [
                    'rounded h-full px-3',
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
              />
            </div>
            <div className="flex flex-col">
              <span
                className="text-darkAccent font-medium mb-2 after:text-danger after:content-['_*']"
              >
                Email
              </span>
              <Input
                classNames={{
                  base: 'w-[580px] h-[40px]',
                  inputWrapper: [
                    'rounded h-full px-3',
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
              />
            </div>
            <div className="flex flex-col">
              <span className="text-darkAccent font-medium mb-2 after:text-danger after:content-['_*']">City of domicile</span>
              <Input
                classNames={{
                  base: 'w-[580px] h-[40px]',
                  inputWrapper: [
                    'rounded h-full px-3',
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
              />
            </div>
            <div className="flex flex-col">
              <span className="text-darkAccent font-medium mb-2 after:text-danger after:content-['_*']">Date of birth</span>
              {/* Temporary solution for style input wrapper (https://github.com/nextui-org/nextui/issues/2895) */}
              <DatePicker
                className="[&>div]:rounded [&>div]:h-full [&>div]:px-3 [&>div]:active:border-primary
                [&>div]:active:border-2 [&>div]:focus:border-primary [&>div]:focus:border-2
                [&>div]:focus-within:border-primary [&>div]:focus-within:border-2
                [&>div]:target:border-primary [&>div]:target:border-2
                [&>div]:hover:border-primary [&>div]:hover:border-2
                [&>div]:visited:border-primary [&>div]:visited:border-2
                [&>div]:focus-visible:border-primary [&>div]:focus-visible:border-2
                [&>div]:group-active:border-primary [&>div]:group-active:border-2
                [&>div]:group-focus:border-primary [&>div]:group-focus:border-2
                [&>div]:group-focus-within:border-primary
                [&>div]:group-focus-within:border-2 [&>div]:group-target:border-primary
                [&>div]:group-target:border-2 [&>div]:group-hover:border-primary
                [&>div]:group-hover:border-2 [&>div]:group-visited:border-primary
                [&>div]:group-visited:border-2 [&>div]:group-focus-visible:border-primary
                [&>div]:group-focus-visible:border-2"
                classNames={{
                  base: [
                    'w-[580px] h-[40px]',
                  ],
                }}
                variant="bordered"
              />
            </div>
          </div>
          <Button color="primary" className="text-base rounded h-[40px] w-[120px]">Save</Button>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default EmployerProfilePage;
