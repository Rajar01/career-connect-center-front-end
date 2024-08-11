'use client';

import React from 'react';
import Navbar from '@/components/navbar';
import { UserType } from '@/enums/enums';
import { Tab, Tabs } from '@nextui-org/react';
import ApplicationTable from '@/app/dashboard/employer/components/application-table';
import InterviewTable from '@/app/dashboard/employer/components/interview-table';
import Footer from '@/components/footer';

function EmployerDashboardPage() {
  return (
    <>
      <Navbar userType={UserType.Employer} />
      <main className="px-[130px] pt-16 mb-20 bg-white">
        <Tabs
          color="primary"
          classNames={{
            base: 'text-base mb-12',
            tabList: 'rounded-lg',
            panel: 'p-0',
            tab: 'h-10 w-[120px] rounded-lg',
          }}
        >
          <Tab key="applications" title="Applications">
            <ApplicationTable />
          </Tab>
          <Tab key="interviews" title="Interviews">
            <InterviewTable />
          </Tab>
        </Tabs>
      </main>
      <Footer />
    </>
  );
}

export default EmployerDashboardPage;
