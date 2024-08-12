'use client';

import React from 'react';
import { UserType } from '@/enums/enums';
import Navbar from '@/components/navbar';
import { Button, Image, Input } from '@nextui-org/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactQuill from 'react-quill';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-quill/dist/quill.snow.css';
import Footer from '@/components/footer';

function CompanyProfilePage() {
  return (
    <>
      <Navbar userType={UserType.Company} />
      <main className="px-[130px] pt-16 mb-20 bg-white">
        <section className="mb-8">
          <h1 className="text-darkAccent text-[40px] font-bold mb-1">Company Profile</h1>
          <h2 className="text-darkAccent text-base">
            Edit your company&apos;s profile details
          </h2>
        </section>
        <section>
          <div className="grid grid-cols-2 gap-x-5 gap-y-6 mb-16">
            <div className="col-span-2 flex flex-col">
              <span className="text-darkAccent font-medium mb-2">Company logo</span>
              <Image src="/avatar.jpg" className="object-cover h-[80px] w-[80px] rounded mb-5" />
              <Button color="primary" className="text-base rounded h-[40px] w-[120px] mb-3">
                Upload
                photo
              </Button>
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
                Company name
              </span>
              <Input
                classNames={{
                  base: 'w-full h-[40px]',
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
                Location
              </span>
              <Input
                classNames={{
                  base: 'w-full h-[40px]',
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
            <div className="col-span-2 flex flex-col">
              <span
                className="text-darkAccent font-medium mb-2 after:text-danger after:content-['_*']"
              >
                Slogan
              </span>
              <Input
                classNames={{
                  base: 'w-full h-[40px]',
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
                Business sector
              </span>
              <Input
                classNames={{
                  base: 'w-full h-[40px]',
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
                Website
              </span>
              <Input
                classNames={{
                  base: 'w-full h-[40px]',
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
            <div className="col-span-2 flex flex-col">
              <span className="text-darkAccent font-medium mb-2 after:text-danger after:content-['_*']">Company description</span>
              <ReactQuill theme="snow" className="flex flex-col w-full h-[200px]" />
            </div>
          </div>
          <Button
            color="primary"
            variant="solid"
            className="rounded-lg text-base w-[120px] h-[52px]"
          >
            Save
          </Button>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default CompanyProfilePage;
