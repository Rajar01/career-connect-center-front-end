import React from 'react';
import Navbar from '@/components/navbar';
import { Button, Divider, Image } from '@nextui-org/react';
import Balancer from 'react-wrap-balancer';
import FeatherIcon from 'feather-icons-react';

function CompanyLandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="h-[calc(100vh-98px)] bg-secondary px-[130px] flex flex-col items-center justify-center">
          <h1 className="text-7xl font-bold text-darkAccent text-center leading-[125%] mb-3">
            <Balancer>
              The
              {' '}
              <span className="text-primary">Best Recruitment</span>
              {' '}
              Solution for Skilled Professionals
            </Balancer>
          </h1>
          <h2 className="text-[23px] text-darkAccent text-center mb-8">
            <Balancer>
              Career Connect Center connects you with talented professionals
              to meet your business needs, ensuring a seamless and
              efficient hiring process that helps you build a team
              of top-notch experts to drive your company’s success.
            </Balancer>
          </h2>
          <Button color="primary" className="text-base w-40 h-12 rounded">Post a Job</Button>
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
        <section className="bg-secondary px-[130px] pt-16 pb-[100px]">
          <h2 className="text-darkAccent text-[40px] font-bold text-center mb-4">Getting Started is Easy</h2>
          <h3 className="text-[19px] text-center mb-10">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </h3>
          <div
            className="flex flex-row justify-between items-center gap-x-4 bg-darkAccent overflow-hidden rounded-[32px] mb-[84px]"
          >
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
          <div className="flex flex-row items-center gap-x-5 mb-[100px]">
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
          <div className="bg-primary flex flex-col items-center justify-center rounded-2xl w-full py-20 gap-y-10">
            <div className="space-y-3 text-white">
              <h4 className="text-5xl font-bold ">Get the Best Candidates</h4>
              <h5>Join as a recruiter and get the best digital talent for your company now!</h5>
            </div>
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

export default CompanyLandingPage;
