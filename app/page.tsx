'use client';

import React from 'react';
import {
  Button, Card, CardBody, CardFooter, CardHeader, Divider, Image, Input,
  Link,
} from '@nextui-org/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Balancer from 'react-wrap-balancer';
import FeatherIcon from 'feather-icons-react';
import Navbar from '@/components/navbar';

export default function EmployersLandingPage() {
  const jobs :String[] = [];

  for (let i = 0; i < 9; i += 1) {
    jobs.push(i.toString());
  }

  return (
    <>
      <Navbar />
      <main className="mb-[100px]">
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
                startContent={<FeatherIcon icon="search" size={32} className="text-[#B3B3B3] group-data-[focus=true]:text-darkAccent group-data-[has-value=true]:text-darkAccent" />}
                endContent={<Button className="!w-[100px] h-8 text-base rounded min-w-max" color="primary">Find Job</Button>}
              />
              <p className="text-base text-darkAccent">
                Confused about finding work?
                {' '}
                <span><Link href="/jobs" className="text-base text-darkAccent underline underline-offset-4 ">View all Jobs</Link></span>
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
        <section className="bg-secondary px-[130px] py-16">
          <h2 className="text-darkAccent text-[40px] font-bold text-center mb-4">Getting Started is Easy</h2>
          <h3 className="text-[19px] text-center mb-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
          <div className="flex flex-row justify-between items-center gap-x-4 bg-darkAccent overflow-hidden rounded-[32px] mb-[84px]">
            <div className="basis-6/12">
              <Image
                isZoomed
                src="/how-it-work.jpg"
                className="rounded-none h-[600px]"
                classNames={{ img: 'object-cover' }}
              />
            </div>
            <div className="basis-6/12 pl-[calc(52px-20px)] pr-[52px] space-y-6 text-white ">
              <div>
                <span className="text-[23px] font-normal mb-5">01</span>
                <h4 className="text-[40px] mb-3">Create a Profile</h4>
                <p className="text-base">
                  Sign up for account and create a profile
                  that highlights your skills and experience.
                </p>
              </div>
              <Divider className="h-0.5 bg-white rounded-lg" />
              <ul className="text-base space-y-5">
                <li className="flex flex-row gap-x-3 items-center">
                  <span><FeatherIcon icon="check-circle" /></span>
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry&apos;s standard dummy text
                  </span>
                </li>
                <li className="flex flex-row gap-x-3 items-center">
                  <span><FeatherIcon icon="check-circle" /></span>
                  <span>
                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                  </span>
                </li>
                <li className="flex flex-row gap-x-3 items-center">
                  <span><FeatherIcon icon="check-circle" /></span>
                  <span>
                    The standard chunk of Lorem Ipsum used since the 1500s
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row items-center gap-x-5">
            <div className="space-y-3 text-darkAccent flex-1 cursor-pointer select-none">
              <Divider className="h-0.5 bg-darkAccent" />
              <h4 className="text-base">01</h4>
              <h5 className="text-[19px]">Create a Profile</h5>
              <p className="text-[14px]">
                Sign up for account and create a profile that highlights your skills and experience.
              </p>
            </div>
            <div className="space-y-3 text-[#8A8F99] flex-1 cursor-pointer select-none">
              <Divider className="h-0.5 bg-[#8A8F99]" />
              <h4 className="text-base">02</h4>
              <h5 className="text-[19px]">Search for Jobs</h5>
              <p className="text-[14px]">
                Use our search function to find job listings that match your criteria.
              </p>
            </div>
            <div className="space-y-3 text-[#8A8F99] flex-1 cursor-pointer select-none">
              <Divider className="h-0.5 bg-[#8A8F99]" />
              <h4 className="text-base">03</h4>
              <h5 className="text-[19px]">Apply to Jobs</h5>
              <p className="text-[14px]">
                Submit your application directly through our platform.
              </p>
            </div>
            <div className="space-y-3 text-[#8A8F99] flex-1 cursor-pointer select-none">
              <Divider className="h-0.5 bg-[#8A8F99]" />
              <h4 className="text-base">04</h4>
              <h5 className="text-[19px]">Get Hired</h5>
              <p className="text-[14px]">
                Team of jobs experts will guide you through the interview process.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-white px-[130px] pt-[84px] flex flex-col items-center justify-center">
          <h2 className="text-darkAccent text-[40px] font-bold text-center mb-4">
            Explore Latest Jobs
          </h2>
          <h3 className="text-[19px] text-center mb-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </h3>
          <div className="grid grid-cols-3 gap-5 mb-16">
            {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
            {jobs.map(((_) => (
              <Card
                shadow="none"
                classNames={{
                  base: 'bg-secondary rounded-2xl px-4 py-5 gap-y-5',
                  header: 'p-0',
                  body: 'p-0',
                  footer: 'p-0 rounded-none',
                }}
              >
                <CardHeader className="flex flex-row items-center gap-x-4 overflow-hidden">
                  <Image src="/facebook-logo.svg" className="object-cover h-[52px] w-[52px] max-w-none" />
                  <div className="space-y-2 text-darkAccent text-base flex-1">
                    <div>
                      <span className="font-bold line-clamp-1 overflow-ellipsis">Sofware Engineer</span>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                      <FeatherIcon icon="map-pin" size={20} className="text-darkAccent" />
                      <div className="flex flex-row items-center justify-stretch gap-x-1 flex-1 overflow-hidden">
                        <span className="whitespace-nowrap max-w-[12ch] overflow-hidden">Facebook</span>
                        <div className="bg-darkAccent w-1 h-1 before:contents-[''] rounded-full" />
                        <span className="whitespace-nowrap max-w-[30ch] overflow-hidden">Kalimatan Barat, Pontianak Barat</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="line-clamp-3 mb-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry&apos;s standard dummy
                    text ever since the 1500s, when an unknown printer took
                    a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries
                  </p>
                  <div className="flex flex-row items-center justify-start gap-x-3 select-none mb-3">
                    <span className="bg-[#D9E6F4] w-24 h-7 text-primary rounded text-base flex items-center justify-center">
                      Junior
                    </span>
                    <span className="bg-[#D9E6F4] w-24 h-7 text-primary rounded text-base flex items-center justify-center">
                      Full Time
                    </span>
                    <span className="bg-[#D9E6F4] w-24 h-7 text-primary rounded text-base flex items-center justify-center">
                      On Site
                    </span>
                  </div>
                  <div className="flex flex-row items-center justify-stretch gap-x-1 flex-1 overflow-hidden">
                    <span className="whitespace-nowrap">1 hour ago</span>
                    <div className="bg-darkAccent w-1 h-1 before:contents-[''] rounded-full" />
                    <span className="whitespace-nowrap">140 applicant</span>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button color="primary" className="rounded-lg text-base h-12 w-[120px]">
                    See Details
                  </Button>
                </CardFooter>
              </Card>
            )))}
          </div>
          <Button endContent={<FeatherIcon icon="arrow-right" />} variant="bordered" className="rounded-lg text-base border-primary text-primary h-[60px] w-[160px] mb-20">View all</Button>
          <div className="bg-primary flex flex-col items-center justify-center rounded-2xl w-full py-20 gap-y-10">
            <h4 className="text-5xl font-bold text-white">Get Your Dream Job Here</h4>
            <Button className="bg-white text-primary text-base rounded-lg w-[112px] h-11">Get Started</Button>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center py-4 bg-darkAccent text-white">
        <span className="text-[14px] font-bold">@Copyright 2024. All Rights Reserved Career Connect Center.</span>
      </footer>
    </>
  );
}
