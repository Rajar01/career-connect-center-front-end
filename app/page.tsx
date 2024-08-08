import React from 'react';
import {
  Button, Input,
  Link,
} from '@nextui-org/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Balancer from 'react-wrap-balancer';
// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import { Search } from 'feather-icons-react';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="h-[calc(100vh-98px)] bg-secondary px-[130px] flex flex-row items-center justify-center gap-x-[120px]">
          <div className="basis-6/12">
            <div className="mb-[52px] space-y-4">
              <h1 className="text-5xl font-bold leading-[140%] text-darkAccent">
                <Balancer>
                  Discover Your Perfect Career Match and Unlock
                  {' '}
                  <span className="text-primary">New Opportunities</span>
                  {' '}
                  Today
                </Balancer>
              </h1>
              <h2 className="text-[23px] text-darkAccent">
                Discover top opportunities with Career Connect Center.
                Join a community of professionals and find the perfect job today.
              </h2>
            </div>
            <div className="space-y-3">
              <Input
                classNames={{
                  inputWrapper: 'bg-white group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white px-4 py-3 h-auto drop-shadow-[2px_2px_1px_rgba(0,0,0,0.25)] rounded-lg w-[424px]',
                  innerWrapper: 'space-x-5',
                  input: [
                    'text-base !text-darkAccent',
                    'placeholder:text-[#B3B3B3]',
                    'data-[has-start-content=true]:ps-0 data-[has-end-content=true]:pe-0',
                  ],
                }}
                placeholder="Enter job title or keywords"
                startContent={<Search size={32} className="text-[#B3B3B3] group-data-[focus=true]:text-darkAccent group-data-[has-value=true]:text-darkAccent" />}
                endContent={<Button className="!w-[100px] h-8 text-base rounded min-w-max" color="primary">Find Job</Button>}
              />
              <p className="text-base text-darkAccent">
                Confused about finding work?
                {' '}
                <span><Link href="/" className="text-base text-darkAccent underline underline-offset-4 ">View all Jobs</Link></span>
              </p>
            </div>
          </div>
          <div className="basis-5/12 inline-flex justify-end">
            <div className="relative h-[526px] w-[480px] bg-[url('/hero.jpg')]
            bg-cover bg-center p-8 flex flex-col justify-end gap-y-1 rounded-lg before:relative before:contents-['']
            before:bg-gradient-to-r before:from-[#323232] before:bottom-full before:left-0 before:w-full before:h-full before:opacity-80"
            >
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#022365] to-transparent opacity-80 rounded-lg"
              />
              <h2 className="text-white text-[28px] font-bold z-10">Lorem Ipsum</h2>
              <p className="text-white text-base z-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida est sapien,
                vitae pretium sapien viverra ac.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-white px-[130px] py-16 flex flex-col justify-center gap-y-16">
          <h2 className="text-darkAccent text-[40px] font-bold text-center">Why Career Connect Center?</h2>
          <div className="flex flex-row gap-x-5">
            <div className="bg-primary text-white p-8 rounded-2xl space-y-4">
              <h3 className="text-[19px] font-bold">Wide Range of Opportunities</h3>
              <p>
                Explore thousands of job postings across a diverse range
                of industries and locations, including both remote and on-site positions.
              </p>
            </div>
            <div className="bg-primary text-white p-8 rounded-2xl space-y-4">
              <h3 className="text-[19px] font-bold">User-Friendly Platform</h3>
              <p>
                Explore thousands of job postings across a diverse range
                of industries and locations, including both remote and on-site positions.
              </p>
            </div>
            <div className="bg-primary text-white p-8 rounded-2xl space-y-4">
              <h3 className="text-[19px] font-bold">Wide Range of Opportunities</h3>
              <p>
                Explore thousands of job postings across a diverse range
                of industries and locations, including both remote and on-site positions.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer />
    </>
  );
}
