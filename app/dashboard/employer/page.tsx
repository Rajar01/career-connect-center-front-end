import React from 'react';
import Navbar from '@/components/navbar';
import UserType from '@/enums/user-type';

function EmployerDashboardPage() {
  return (
    <>
      <Navbar userType={UserType.Employer} />
      <main />
      <footer />
    </>
  );
}

export default EmployerDashboardPage;
