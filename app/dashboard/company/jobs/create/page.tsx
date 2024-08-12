'use client';

import React from 'react';
import Navbar from '@/components/navbar';
import { UserType } from '@/enums/enums';
import {
  Button,
  DatePicker, Input, Select, SelectItem,
} from '@nextui-org/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactQuill from 'react-quill';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-quill/dist/quill.snow.css';
import Footer from '@/components/footer';

function CreateVacancyPage() {
  return (
    <>
      <Navbar userType={UserType.Company} />
      <main className="px-[130px] pt-16 mb-20 bg-white">
        <section className="mb-8">
          <h1 className="text-darkAccent text-[40px] font-bold mb-1">Create Vacancy</h1>
          <h2 className="text-darkAccent text-base">
            Unlock the Potential of Your Team by Quickly Creating New Job Opportunities
          </h2>
        </section>
        <section className="grid grid-cols-2 gap-x-5 gap-y-8 mb-16">
          <div className="col-span-2 flex flex-col">
            <span
              className="text-darkAccent font-medium mb-2 after:text-danger after:content-['_*']"
            >
              Position name
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
              Job Type
            </span>
            <Select
              placeholder="Select an option"
              classNames={{
                base: 'w-full h-[40px]',
                trigger: [
                  'rounded h-full px-3',
                  'data-[focus=true]:border-primary data-[focus=true]:border-2',
                  'data-[hover=true]:border-primary data-[hover=true]:border-2',
                  'data-[open=true]:border-primary data-[open=true]:border-2',
                  'group-data-[focus=true]:border-primary group-data-[focus=true]:border-2',
                  'group-data-[hover=true]:border-primary group-data-[hover=true]:border-2',
                ],
                value: [
                  'text-base !text-darkAccent',
                  'data-[has-start-content=true]:ps-0 data-[has-end-content=true]:pe-0',
                ],
                popoverContent: 'p-2 rounded',
                listbox: 'p-0',
              }}
              variant="bordered"
            >
              <SelectItem key={1} className="rounded text-base text-darkAccent">
                Value 1
              </SelectItem>
            </Select>
          </div>
          <div className="flex flex-col">
            <span
              className="text-darkAccent font-medium mb-2 after:text-danger after:content-['_*']"
            >
              Work Type
            </span>
            <Select
              placeholder="Select an option"
              classNames={{
                base: 'w-full h-[40px]',
                trigger: [
                  'rounded h-full px-3',
                  'data-[focus=true]:border-primary data-[focus=true]:border-2',
                  'data-[hover=true]:border-primary data-[hover=true]:border-2',
                  'data-[open=true]:border-primary data-[open=true]:border-2',
                  'group-data-[focus=true]:border-primary group-data-[focus=true]:border-2',
                  'group-data-[hover=true]:border-primary group-data-[hover=true]:border-2',
                ],
                value: [
                  'text-base !text-darkAccent',
                  'data-[has-start-content=true]:ps-0 data-[has-end-content=true]:pe-0',
                ],
                popoverContent: 'p-2 rounded',
                listbox: 'p-0',
              }}
              variant="bordered"
            >
              <SelectItem key={1} className="rounded text-base text-darkAccent">
                Value 1
              </SelectItem>
            </Select>
          </div>
          <div className="flex flex-col">
            <span
              className="text-darkAccent font-medium mb-2 after:text-danger after:content-['_*']"
            >
              Experince level
            </span>
            <Select
              placeholder="Select an option"
              classNames={{
                base: 'w-full h-[40px]',
                trigger: [
                  'rounded h-full px-3',
                  'data-[focus=true]:border-primary data-[focus=true]:border-2',
                  'data-[hover=true]:border-primary data-[hover=true]:border-2',
                  'data-[open=true]:border-primary data-[open=true]:border-2',
                  'group-data-[focus=true]:border-primary group-data-[focus=true]:border-2',
                  'group-data-[hover=true]:border-primary group-data-[hover=true]:border-2',
                ],
                value: [
                  'text-base !text-darkAccent',
                  'data-[has-start-content=true]:ps-0 data-[has-end-content=true]:pe-0',
                ],
                popoverContent: 'p-2 rounded',
                listbox: 'p-0',
              }}
              variant="bordered"
            >
              <SelectItem key={1} className="rounded text-base text-darkAccent">
                Value 1
              </SelectItem>
            </Select>
          </div>
          <div className="flex flex-col">
            <span className="text-darkAccent font-medium mb-2 after:text-danger after:content-['_*']">Application deadline</span>
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
                  'w-full h-[40px]',
                ],
              }}
              variant="bordered"
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <span className="text-darkAccent font-medium mb-2 after:text-danger after:content-['_*']">Job description</span>
            <ReactQuill theme="snow" className="flex flex-col w-full h-[200px]" />
          </div>
          <div className="col-span-2 flex flex-col">
            <span className="text-darkAccent font-medium mb-2 after:text-danger after:content-['_*']">
              Responsibility
            </span>
            <ReactQuill theme="snow" className="flex flex-col w-full h-[200px]" />
          </div>
          <div className="col-span-2 flex flex-col">
            <span className="text-darkAccent font-medium mb-2 after:text-danger after:content-['_*']">
              Required documents
            </span>
            <ReactQuill theme="snow" className="flex flex-col w-full h-[200px]" />
          </div>
        </section>
        <section className="flex flex-row items-center justify-start gap-x-5">
          <Button color="primary" variant="bordered" className="rounded-lg text-base w-[180px] h-[52px]">Cancel</Button>
          <Button color="primary" variant="solid" className="rounded-lg text-base w-[180px] h-[52px]">Save</Button>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default CreateVacancyPage;
