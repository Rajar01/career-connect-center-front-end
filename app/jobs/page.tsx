'use client';

import React from 'react';
import Navbar from '@/components/navbar';
import {
  Button, Card, Input, Select,
  SelectItem,
  CardBody,
  AccordionItem,
  Accordion,
  Checkbox,
  CheckboxGroup, CardHeader, Image, CardFooter,
  Pagination, Link,
} from '@nextui-org/react';
import FeatherIcon from 'feather-icons-react';

function JobsPage() {
  const jobs :String[] = [];

  for (let i = 0; i < 6; i += 1) {
    jobs.push(i.toString());
  }

  return (
    <>
      <Navbar />
      <main className="px-[130px] pt-16 mb-20 bg-white">
        <section className="mb-8">
          <h1 className="text-darkAccent text-[40px] font-bold mb-1">Job Search</h1>
          <h2 className="text-darkAccent text-base mb-4">Search for your desired job matching your skills</h2>
          <div className="flex flex-row items-center justify-start gap-x-5">
            <Input
              classNames={{
                base: 'h-12 w-[350px]',
                inputWrapper: 'bg-secondary group-data-[focus=true]:bg-secondary group-data-[hover=true]:bg-secondary rounded-lg h-full px-3',
                innerWrapper: 'space-x-2 ',
                input: [
                  'text-base !text-darkAccent',
                  'placeholder:text-[#B3B3B3]',
                  'data-[has-start-content=true]:ps-0 data-[has-end-content=true]:pe-0',
                ],
              }}
              placeholder="Enter job title or keyword"
              startContent={<FeatherIcon icon="search" size={24} className="text-[#B3B3B3] group-data-[focus=true]:text-darkAccent group-data-[has-value=true]:text-darkAccent" />}
            />
            <Input
              classNames={{
                base: 'h-12 w-[350px]',
                inputWrapper: 'bg-secondary group-data-[focus=true]:bg-secondary group-data-[hover=true]:bg-secondary rounded-lg h-full px-3',
                innerWrapper: 'space-x-2 ',
                input: [
                  'text-base !text-darkAccent',
                  'placeholder:text-[#B3B3B3]',
                  'data-[has-start-content=true]:ps-0 data-[has-end-content=true]:pe-0',
                ],
              }}
              placeholder="Enter job location"
              startContent={<FeatherIcon icon="map-pin" size={24} className="text-[#B3B3B3] group-data-[focus=true]:text-darkAccent group-data-[has-value=true]:text-darkAccent" />}
            />
            <Button color="primary" className="h-12 w-[120px] rounded-lg text-base">Find Job</Button>
          </div>
        </section>
        <section className="flex flex-row gap-x-8 items-start w-full">
          <div className="basis-3/12">
            <div className="flex flex-row items-center justify-between h-12 mb-6">
              <span className="text-darkAccent text-[19px] font-bold">Filter</span>
              <button type="button" className="text-darkAccent text-base">Clear All</button>
            </div>
            <Accordion
              defaultExpandedKeys={['1', '2', '3']}
              isCompact
              className="p-5 bg-secondary rounded-lg space-y-5"
              selectionMode="multiple"
              showDivider={false}
              itemClasses={{
                base: '',
                content: 'py-0 mt-5',
                title: 'text-base text-darkAccent font-bold',
                trigger: 'py-0',
              }}
            >
              <AccordionItem key="1" aria-label="Job Type" title="Job Type" indicator={<FeatherIcon icon="chevron-left" className="text-darkAccent" />}>
                <CheckboxGroup
                  color="primary"
                  classNames={{ base: 'text-base text-darkAccent' }}
                >
                  <Checkbox value="full-time">Full Time</Checkbox>
                  <Checkbox value="part-time">Part Time</Checkbox>
                  <Checkbox value="contract">Contract</Checkbox>
                </CheckboxGroup>
              </AccordionItem>
              <AccordionItem key="2" aria-label="Work Type" title="Work Type" indicator={<FeatherIcon icon="chevron-left" className="text-darkAccent" />}>
                <CheckboxGroup
                  color="primary"
                  classNames={{ base: 'text-base text-darkAccent' }}
                >
                  <Checkbox value="on-site">On Site</Checkbox>
                  <Checkbox value="remote">Remote</Checkbox>
                  <Checkbox value="hybrid">Hybrid</Checkbox>
                </CheckboxGroup>
              </AccordionItem>
              <AccordionItem key="3" aria-label="Experience Level" title="Experience Level" indicator={<FeatherIcon icon="chevron-left" className="text-darkAccent" />}>
                <CheckboxGroup
                  color="primary"
                  classNames={{ base: 'text-base text-darkAccent' }}
                >
                  <Checkbox value="fresher-or-entry-level">Fresher/Entry Level</Checkbox>
                  <Checkbox value="junior">Junior</Checkbox>
                  <Checkbox value="mid-level">Mid Level</Checkbox>
                  <Checkbox value="senior">Senior</Checkbox>
                  <Checkbox value="lead-or-managerial">Lead/Managerial</Checkbox>
                  <Checkbox value="director-or-executive">Director/Executive</Checkbox>
                </CheckboxGroup>
              </AccordionItem>
            </Accordion>

          </div>
          <div className="basis-9/12 flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-between w-full mb-6">
              <span className="text-darkAccent text-[19px] font-bold">All Job (2300)</span>
              <Select
                selectedKeys={['popular']}
                color="primary"
                selectorIcon={<FeatherIcon icon="chevron-down" size={32} strokeWidth={2} />}
                classNames={{
                  base: 'h-12 w-[120px]',
                  mainWrapper: 'h-full',
                  popoverContent: 'rounded-lg text-darkAccent',
                  trigger: 'bg-primary  data-[hover=true]:bg-primary rounded-lg h-full px-3 text-white',
                  value: [
                    'text-white text-base',
                    'data-[has-start-content=true]:ps-0 data-[has-end-content=true]:pe-0',
                  ],
                }}
              >
                <SelectItem key="latest">
                  Latest
                </SelectItem>
                <SelectItem key="popular">
                  Popular
                </SelectItem>
              </Select>
            </div>
            <div className="flex flex-col gap-y-8 mb-16">
              {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
              {jobs.map((_) => (
                <Card
                  shadow="none"
                  classNames={{
                    base: 'bg-secondary rounded-lg p-6 gap-y-5',
                    header: 'p-0',
                    body: 'p-0',
                    footer: 'p-0 rounded-none',
                  }}
                >
                  <CardHeader className="flex flex-row items-center gap-x-4 overflow-hidden">
                    <Image src="/facebook-logo.svg" className="object-cover h-[64px] w-[64px] max-w-none" />
                    <div className="space-y-2 text-darkAccent text-base flex-1">
                      <div>
                        <span className="text-lg font-bold line-clamp-1 overflow-ellipsis">Sofware Engineer</span>
                      </div>
                      <div className="flex flex-row items-center gap-x-2">
                        <FeatherIcon icon="map-pin" size={20} className="text-darkAccent" />
                        <div className="flex flex-row items-center justify-stretch gap-x-1 flex-1 overflow-hidden">
                          <span className="whitespace-nowrap max-w-[30ch] overflow-hidden">Facebook</span>
                          <div className="bg-darkAccent w-1 h-1 before:contents-[''] rounded-full" />
                          <span className="whitespace-nowrap max-w-[40ch] overflow-hidden">Kalimatan Barat, Pontianak Barat</span>
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
                    <Button as={Link} href="/jobs/1" color="primary" className="rounded-lg text-base h-12 w-[120px]">
                      See Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <Pagination showControls color="primary" total={10} initialPage={1} />
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center py-4 bg-darkAccent text-white">
        <span className="text-[14px] font-bold">@Copyright 2024. All Rights Reserved Career Connect Center.</span>
      </footer>
    </>
  );
}

export default JobsPage;
