import React from 'react';
import Navbar from '@/components/navbar';
import {
  Button, Card, CardBody, Image, Link,
} from '@nextui-org/react';
import FeatherIcon from 'feather-icons-react';

function JobPage() {
  const jobs :String[] = [];

  for (let i = 0; i < 6; i += 1) {
    jobs.push(i.toString());
  }

  return (
    <>
      <Navbar />
      <main className="px-[130px] mt-16 mb-24 bg-white">
        <section className="flex flex-row items-center gap-x-3 mb-8">
          <FeatherIcon icon="chevron-left" />
          <Link href="/jobs" className="text-darkAccent">All Jobs</Link>
        </section>
        <section className="flex flex-row items-start gap-x-5">
          <div className="basis-8/12">
            <div className="flex flex-row items-center justify-between mb-3">
              <h1 className="text-darkAccent text-[33px] font-bold line-clamp-1 overflow-ellipsis">Sofware Engineer</h1>
              <div className="flex flex-row items-center justify-between gap-x-3">
                <Button color="primary" className="h-[40px] w-[120px] rounded text-base">Apply Now</Button>
                <Button isIconOnly color="primary" variant="bordered" className="h-[40px] w-[40px] rounded">
                  <FeatherIcon icon="bookmark" />
                </Button>
              </div>
            </div>
            <div className="flex flex-row items-center gap-x-4 mb-14">
              <Link href="/companies/1">
                <Image src="/facebook-logo.svg" className="w-[72px] h-[72px]" />
              </Link>
              <div className="space-y-2">
                <div className="flex flex-row items-center gap-x-2 overflow-hidden">
                  <Link href="/companies/1" className="whitespace-nowrap max-w-[30ch] overflow-hidden text-darkAccent">Facebook</Link>
                  <div className="bg-darkAccent w-1 h-1 before:contents-[''] rounded-full" />
                  <div className="flex flex-row items-center gap-x-1">
                    <FeatherIcon icon="map-pin" size={20} className="text-darkAccent" />
                    <span className="whitespace-nowrap max-w-[42ch] overflow-hidden">
                      Kalimatan Barat, Pontianak Barat
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-x-3 select-none mb-3">
                  <span
                    className="bg-[#D9E6F4] w-24 h-7 text-primary rounded text-base flex items-center justify-center"
                  >
                    Junior
                  </span>
                  <span
                    className="bg-[#D9E6F4] w-24 h-7 text-primary rounded text-base flex items-center justify-center"
                  >
                    Full Time
                  </span>
                  <span
                    className="bg-[#D9E6F4] w-24 h-7 text-primary rounded text-base flex items-center justify-center"
                  >
                    On Site
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-[23px] text-darkAccent font-bold mb-1">Job Description</h2>
              <p className="text-darkAccent">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-[23px] text-darkAccent font-bold mb-1">Responsibility</h2>
              <ul className="text-darkAccent list-disc list-inside">
                <li>
                  Develop and implement strategic business plans to drive growth and profitability.
                </li>
                <li>
                  Lead cross-functional teams to deliver
                  high-impact projects on time and within budget.
                </li>
                <li>
                  Conduct market research and analysis to identify new business opportunities.
                </li>
                <li>
                  Manage and mentor junior team members to enhance their professional development.
                </li>
                <li>
                  Collaborate with stakeholders to ensure alignment on key
                  objectives and deliverables.
                </li>
                <li>
                  Monitor and report on performance metrics to guide
                  decision-making and strategy adjustments.
                </li>
                <li>
                  Coordinate with the marketing team to create and execute effective campaigns.
                </li>
                <li>
                  Ensure compliance with industry regulations and company policies.
                </li>
                <li>Handle client communications and maintain strong client relationships.</li>
                <li>
                  Drive innovation and continuous improvement within the team and processes.
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h2 className="text-[23px] text-darkAccent font-bold mb-1">Required Skills</h2>
              <ul className="text-darkAccent list-disc list-inside">
                <li>
                  Proficiency in [relevant software or tools]
                  (e.g., Microsoft Office, Adobe Creative Suite, etc.).
                </li>
                <li>
                  Strong analytical and problem-solving abilities.
                </li>
                <li>
                  Excellent written and verbal communication skills.
                </li>
                <li>
                  Ability to work independently and as part of a team.
                </li>
                <li>
                  Strong organizational skills with the
                  ability to manage multiple tasks and deadlines.
                </li>
                <li>
                  Familiarity with [specific industry or field] practices and standards.
                </li>
                <li>
                  Experience with [
                  specific programming languages or technical skills], if applicable.
                </li>
                <li>
                  Ability to adapt to changing priorities and work under pressure.
                </li>
                <li>
                  Strong attention to detail and accuracy.
                </li>
                <li>
                  Leadership and team management skills, if applicable.
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h2 className="text-[23px] text-darkAccent font-bold mb-1">Required Documents</h2>
              <ul className="text-darkAccent list-disc list-inside">
                <li>Updated resume or curriculum vitae (CV).</li>
                <li>Cover letter detailing relevant experience and interest in the position.</li>
                <li>Copies of relevant certifications or licenses.</li>
                <li>Professional references (at least three).</li>
                <li>Academic transcripts, if applicable.</li>
                <li>Portfolio of work, if required (for creative or technical roles).</li>
                <li>Proof of identity (e.g., passport, driver’s license).</li>
              </ul>
            </div>
            <Button color="primary" className="h-[40px] w-[120px] rounded text-base">Apply Now</Button>
          </div>
          <div className="basis-4/12">
            <h5 className="text-[20px] text-darkAccent font-medium mb-3">Similar Jobs</h5>
            <div className="space-y-3">
              {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
              {jobs.map((_) => (
                <Card
                  shadow="none"
                  classNames={{
                    base: 'bg-secondary rounded p-6',
                    header: 'p-0',
                    body: 'p-0',
                    footer: 'p-0 rounded-none',
                  }}
                >
                  <CardBody>
                    <div className="flex flex-row items-center gap-x-4 overflow-hidden mb-4">
                      <Image src="/facebook-logo.svg" className="object-cover h-[40px] w-[40px] max-w-none" />
                      <div className="space-y-0.5 text-darkAccent text-base flex-1">
                        <div>
                          <span className="text-sm font-medium line-clamp-1 overflow-ellipsis">Sofware Engineer</span>
                        </div>
                        <div className="flex flex-row items-center gap-x-2 overflow-hidden">
                          <span className="whitespace-nowrap max-w-[10ch] overflow-hidden text-sm]">Facebook</span>
                          <div className="bg-darkAccent w-1 h-1 before:contents-[''] rounded-full" />
                          <div className="flex flex-row items-center gap-x-1">
                            <FeatherIcon icon="map-pin" size={16} className="text-darkAccent" />
                            <span className="whitespace-nowrap max-w-[20ch] overflow-hidden text-sm]">
                              Kalimatan Barat, Pontianak Barat
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-x-2 select-none mb-3">
                      <span
                        className="bg-[#D9E6F4] w-16 h-6 text-primary rounded text-xs flex items-center justify-center"
                      >
                        Junior
                      </span>
                      <span
                        className="bg-[#D9E6F4] w-16 h-6 text-primary rounded text-xs flex items-center justify-center"
                      >
                        Full Time
                      </span>
                      <span
                        className="bg-[#D9E6F4] w-16 h-6 text-primary rounded text-xs flex items-center justify-center"
                      >
                        On Site
                      </span>
                    </div>
                    <div className="flex flex-row items-center justify-stretch gap-x-1 flex-1 overflow-hidden">
                      <span className="whitespace-nowrap">1 hour ago</span>
                      <div className="bg-darkAccent w-1 h-1 before:contents-[''] rounded-full" />
                      <span className="whitespace-nowrap">140 applicant</span>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center py-4 bg-darkAccent text-white">
        <span className="text-[14px] font-bold">@Copyright 2024. All Rights Reserved Career Connect Center.</span>
      </footer>
    </>
  );
}

export default JobPage;
