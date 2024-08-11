import React from 'react';
import Navbar from '@/components/navbar';
import UserType from '@/enums/user-type';

function EmployerDashboard() {
  return (
    <>
      <Navbar userType={UserType.Employer} />
      <main />
      <footer />
    </>
  );
}

export default EmployerDashboard;
