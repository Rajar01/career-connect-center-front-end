import React from 'react';
import Navbar from '@/components/navbar';
import { UserType } from '@/enums/enums';
import FeatherIcon from 'feather-icons-react';

function NotificationsPage() {
  return (
    <>
      <Navbar userType={UserType.Employer} />
      <main className="px-[130px] pt-16 mb-20 bg-white">
        <h1 className="text-darkAccent text-[40px] font-bold mb-1">Notifications</h1>
        <h2 className="text-darkAccent text-base mb-12">
          Stay updated with the latest alerts and updates related to your
          job applications.
        </h2>
        <div className="w-full space-y-4">
          <div className="bg-secondary rounded p-4 flex flex-row items-center justify-between gap-x-3">
            <div className="flex flex-row items-center gap-x-3">
              <div className="bg-primary p-3 rounded-full text-white"><FeatherIcon icon="globe" /></div>
              <div className="flex flex-col items-start gap-y-0.5">
                <span className="font-bold text-darkAccent">Job Application Submitted</span>
                <span className="text-darkAccent">
                  You have an interview scheduled with FinTech Ltd. on August 15, 2024
                </span>
              </div>
            </div>
            <span className="text-darkAccent text-[14px] whitespace-nowrap">2 Minute Ago</span>
          </div>
          <div className="bg-secondary rounded p-4 flex flex-row items-center justify-between gap-x-3">
            <div className="flex flex-row items-center gap-x-3">
              <div className="bg-primary p-3 rounded-full text-white"><FeatherIcon icon="globe" /></div>
              <div className="flex flex-col items-start gap-y-0.5">
                <span className="font-bold text-darkAccent">Job Application Submitted</span>
                <span className="text-darkAccent">
                  You have an interview scheduled with FinTech Ltd. on August 15, 2024
                </span>
              </div>
            </div>
            <span className="text-darkAccent text-[14px] whitespace-nowrap">2 Minute Ago</span>
          </div>
          <div className="bg-secondary rounded p-4 flex flex-row items-center justify-between gap-x-3">
            <div className="flex flex-row items-center gap-x-3">
              <div className="bg-primary p-3 rounded-full text-white"><FeatherIcon icon="globe" /></div>
              <div className="flex flex-col items-start gap-y-0.5">
                <span className="font-bold text-darkAccent">Job Application Submitted</span>
                <span className="text-darkAccent">
                  You have an interview scheduled with FinTech Ltd. on August 15, 2024
                </span>
              </div>
            </div>
            <span className="text-darkAccent text-[14px] whitespace-nowrap">2 Minute Ago</span>
          </div>
          <div className="bg-secondary rounded p-4 flex flex-row items-center justify-between gap-x-3">
            <div className="flex flex-row items-center gap-x-3">
              <div className="bg-primary p-3 rounded-full text-white"><FeatherIcon icon="globe" /></div>
              <div className="flex flex-col items-start gap-y-0.5">
                <span className="font-bold text-darkAccent">Job Application Submitted</span>
                <span className="text-darkAccent">
                  You have an interview scheduled with FinTech Ltd. on August 15, 2024
                </span>
              </div>
            </div>
            <span className="text-darkAccent text-[14px] whitespace-nowrap">2 Minute Ago</span>
          </div>
          <div className="bg-secondary rounded p-4 flex flex-row items-center justify-between gap-x-3">
            <div className="flex flex-row items-center gap-x-3">
              <div className="bg-primary p-3 rounded-full text-white"><FeatherIcon icon="globe" /></div>
              <div className="flex flex-col items-start gap-y-0.5">
                <span className="font-bold text-darkAccent">Job Application Submitted</span>
                <span className="text-darkAccent">
                  You have an interview scheduled with FinTech Ltd. on August 15, 2024
                </span>
              </div>
            </div>
            <span className="text-darkAccent text-[14px] whitespace-nowrap">2 Minute Ago</span>
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-center py-4 bg-darkAccent text-white">
        <span className="text-[14px] font-bold">@Copyright 2024. All Rights Reserved Career Connect Center.</span>
      </footer>
    </>
  );
}

export default NotificationsPage;
