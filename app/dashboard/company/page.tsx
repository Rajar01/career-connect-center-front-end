'use client';

import React from 'react';
import Navbar from '@/components/navbar';
import { UserType } from '@/enums/enums';
import { Tab, Tabs } from '@nextui-org/react';
import VacancyTable from '@/app/dashboard/company/components/vacancy-table';
import ApplicationTable from '@/app/dashboard/company/components/application-table';
import InterviewTable from '@/app/dashboard/company/components/interview-table';
import Footer from '@/components/footer';

function CompanyDashboardPage() {
  return (
    <>
      <Navbar userType={UserType.Company} />
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
          <Tab key="vacancy" title="Vacancy">
            <VacancyTable />
          </Tab>
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

export default CompanyDashboardPage;
