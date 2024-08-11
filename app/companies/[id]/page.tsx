import React from 'react';
import Navbar from '@/components/navbar';
import FeatherIcon from 'feather-icons-react';
import {
  Button, Card, CardBody, CardFooter, CardHeader, Image, Link,
} from '@nextui-org/react';
import { UserType } from '@/enums/enums';

function CompanyPage() {
  const jobs :String[] = [];

  for (let i = 0; i < 3; i += 1) {
    jobs.push(i.toString());
  }

  return (
    <>
      <Navbar userType={UserType.Guest} />
      <main className="px-[130px] mt-16 mb-24 bg-white">
        <section className="flex flex-row items-center gap-x-3 mb-8">
          <FeatherIcon icon="chevron-left" />
          <Link href="/jobs" className="text-darkAccent">All Jobs</Link>
        </section>
        <section>
          <div className="flex flex-row items-center gap-x-4 mb-5">
            <Image src="/facebook-logo.svg" className="w-[80px] h-[80px]" />
            <div className="text-darkAccent">
              <h1 className="text-[33px] font-bold line-clamp-1 overflow-ellipsis">TechWave</h1>
              <h2 className="line-clamp-1 overflow-ellipsis">Empowering Your Future with Innovative Technology.</h2>
            </div>
          </div>
          <div className="flex flex-row items-center gap-x-2 mb-12">
            <div className="flex flex-row items-center justify-center px-2 py-3 gap-x-2 bg-secondary rounded text-primary">
              <FeatherIcon icon="briefcase" size={20} />
              <span className="text-sm font-medium">Cybersecurity Consulting Firm</span>
            </div>
            <div className="flex flex-row items-center justify-center px-2 py-3 gap-x-2 bg-secondary rounded text-primary">
              <FeatherIcon icon="map-pin" size={20} />
              <span className="text-sm font-medium">Indonesia, Jakarta</span>
            </div>
          </div>
          <div className="mb-12">
            <h3 className="text-[23px] text-darkAccent font-bold mb-5">Company Description</h3>
            <div className="text-darkAccent ">
              TechWave Solutions is a dynamic and innovative company at the forefront of the
              technology consulting industry. Founded in 2010, we specialize in providing
              cutting-edge IT solutions and services to businesses of all sizes. Our mission
              is to empower organizations by leveraging technology to streamline operations,
              enhance productivity, and drive growth.
              <br />
              <br />
              At TechWave Solutions, we offer a comprehensive suite of services including
              IT consulting, software development, cloud computing, cybersecurity, and data
              analytics. Our team of experienced professionals is dedicated to delivering tailored
              solutions that meet the unique needs of each client. We pride ourselves on our
              customer-centric approach, ensuring that we build strong,
              lasting relationships with our clients.
              <br />
              <br />
              With a focus on continuous improvement and innovation, TechWave Solutions is committed
              to staying ahead of industry trends
              and technological advancements. Our state-of-the-art
              solutions are designed to provide our clients with a
              competitive edge in today&apos;s rapidly
              evolving digital landscape. Whether you are
              looking to modernize your IT infrastructure,
              develop custom software applications, or protect your data from cyber threats,
              TechWave Solutions is your trusted partner in achieving technological excellence.
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full flex flex-row items-center justify-between mb-5">
              <h3 className="text-[23px] text-darkAccent font-bold">Jobs From TechWave </h3>
              <Link href="/jobs" className="text-darkAccent">View All Jobs</Link>
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
            <Button endContent={<FeatherIcon icon="arrow-right" size={20} />} variant="bordered" className="rounded-lg text-base border-primary text-primary h-[44px] w-[120px]">View all</Button>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center py-4 bg-darkAccent text-white">
        <span className="text-[14px] font-bold">@Copyright 2024. All Rights Reserved Career Connect Center.</span>
      </footer>
    </>
  );
}

export default CompanyPage;
