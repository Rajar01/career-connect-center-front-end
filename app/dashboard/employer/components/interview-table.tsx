'use client';

import React from 'react';
import {
  Button,
  Chip,
  ChipProps,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Input,
  Link,
  Pagination,
  Selection, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow,
} from '@nextui-org/react';
import FeatherIcon from 'feather-icons-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { capitalize } from '@nextui-org/shared-utils';

type EmployerInterview = {
  id: string,
  companyName: string,
  companyLogoURL:string,
  position: string,
  jobLocation: string,
  interviewDate: string,
  status: string,
  interviewLink:string
};

const data: EmployerInterview[] = [
  {
    id: '1',
    companyName: 'Tokopedia',
    companyLogoURL: 'https://placehold.co/400',
    position: 'Software Engineer',
    jobLocation: 'Jakarta, Indonesia',
    interviewDate: '22 July 2024',
    status: 'pending',
    interviewLink: 'https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state',
  },
  {
    id: '2',
    companyName: 'Mahoney-Reed',
    companyLogoURL: 'https://placehold.co/400?text=Mahoney-Reed',
    position: 'Interpreter',
    jobLocation: 'Dixonberg, Albania',
    interviewDate: '13 October 2024',
    status: 'rejected',
    interviewLink: 'https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state',
  },
  {
    id: '3',
    companyName: 'Trujillo-Williams',
    companyLogoURL: 'https://placehold.co/400?text=Trujillo-Williams',
    position: 'Accounting Technician',
    jobLocation: 'Angelafort, Morocco',
    interviewDate: '03 November 2024',
    status: 'rejected',
    interviewLink: 'https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state',
  },
  {
    id: '4',
    companyName: 'Cain, Ponce and Navarro',
    companyLogoURL: 'https://placehold.co/400?text=Cain, Ponce and Navarro',
    position: 'Physicist, Medical',
    jobLocation: 'Lake Lorraine, Bhutan',
    interviewDate: '22 April 2025',
    status: 'rejected',
    interviewLink: 'https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state',
  },
  {
    id: '5',
    companyName: 'Hunter, Singleton and Mccall',
    companyLogoURL: 'https://placehold.co/400?text=Hunter, Singleton and Mccall',
    position: 'Homeopath',
    jobLocation: 'North Josephmouth, Bosnia and Herzegovina',
    interviewDate: '25 July 2025',
    status: 'pending',
    interviewLink: 'https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state',
  },
  {
    id: '6',
    companyName: 'Davis, Copeland and White',
    companyLogoURL: 'https://placehold.co/400?text=Davis, Copeland and White',
    position: 'Investment Banker, Corporate',
    jobLocation: 'Lake Randallchester, Kyrgyz Republic',
    interviewDate: '15 November 2024',
    status: 'accepted',
    interviewLink: 'https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state',
  },
  {
    id: '7',
    companyName: 'Butler, Wright and Olson',
    companyLogoURL: 'https://placehold.co/400?text=Butler, Wright and Olson',
    position: 'Child Psychotherapist',
    jobLocation: 'Jordanburgh, Colombia',
    interviewDate: '19 February 2025',
    status: 'rejected',
    interviewLink: 'https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state',
  },
  {
    id: '8',
    companyName: 'Murphy-Nguyen',
    companyLogoURL: 'https://placehold.co/400?text=Murphy-Nguyen',
    position: 'Emergency Planning/Management Officer',
    jobLocation: 'New Tyler, Guatemala',
    interviewDate: '07 August 2024',
    status: 'pending',
    interviewLink: 'https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state',
  },
  {
    id: '9',
    companyName: 'Gonzalez Inc',
    companyLogoURL: 'https://placehold.co/400?text=Gonzalez Inc',
    position: 'Legal Executive',
    jobLocation: 'East Mariaport, Isle of Man',
    interviewDate: '10 March 2025',
    status: 'accepted',
    interviewLink: 'https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state',
  },
  {
    id: '10',
    companyName: 'Ortiz-Murray',
    companyLogoURL: 'https://placehold.co/400?text=Ortiz-Murray',
    position: 'Marine Scientist',
    jobLocation: 'Lake Donnaton, Grenada',
    interviewDate: '18 August 2024',
    status: 'pending',
    interviewLink: 'https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state',
  },
  {
    id: '11',
    companyName: 'Nelson, Thomas and Jones',
    companyLogoURL: 'https://placehold.co/400?text=Nelson, Thomas and Jones',
    position: 'Physiotherapist',
    jobLocation: 'East Alejandrostad, Djibouti',
    interviewDate: '24 December 2024',
    status: 'accepted',
    interviewLink: 'https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state',
  },
  {
    id: '12',
    companyName: 'Hobbs, Maxwell and Jimenez',
    companyLogoURL: 'https://placehold.co/400?text=Hobbs, Maxwell and Jimenez',
    position: 'Learning Disability Nurse',
    jobLocation: 'West Joseph, Togo',
    interviewDate: '02 April 2025',
    status: 'accepted',
    interviewLink: 'https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state',
  },
  {
    id: '13',
    companyName: 'Reese, Stein and Cook',
    companyLogoURL: 'https://placehold.co/400?text=Reese, Stein and Cook',
    position: 'Solicitor, Scotland',
    jobLocation: 'West Kathrynmouth, Liberia',
    interviewDate: '09 January 2025',
    status: 'pending',
    interviewLink: 'https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state',
  },
  {
    id: '14',
    companyName: 'Hernandez-Martin',
    companyLogoURL: 'https://placehold.co/400?text=Hernandez-Martin',
    position: 'Music Therapist',
    jobLocation: 'Lake Christineton, Malta',
    interviewDate: '15 November 2024',
    status: 'rejected',
    interviewLink: 'https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state',
  },
  {
    id: '15',
    companyName: 'Nicholson-Matthews',
    companyLogoURL: 'https://placehold.co/400?text=Nicholson-Matthews',
    position: 'Pharmacist, Community',
    jobLocation: 'Grosstown, Papua New Guinea',
    interviewDate: '03 May 2025',
    status: 'accepted',
    interviewLink: 'https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state',
  },
  {
    id: '16',
    companyName: 'White, Merritt and Brown',
    companyLogoURL: 'https://placehold.co/400?text=White, Merritt and Brown',
    position: 'Psychologist, Educational',
    jobLocation: 'South Jenniferland, Tokelau',
    interviewDate: '05 July 2025',
    status: 'rejected',
    interviewLink: 'https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state',
  },
  {
    id: '17',
    companyName: 'Hall, Wade and Thompson',
    companyLogoURL: 'https://placehold.co/400?text=Hall, Wade and Thompson',
    position: 'Risk Manager',
    jobLocation: 'Catherineshire, Guyana',
    interviewDate: '23 August 2024',
    status: 'rejected',
    interviewLink: 'https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state',
  },
  {
    id: '18',
    companyName: 'Martin LLC',
    companyLogoURL: 'https://placehold.co/400?text=Martin LLC',
    position: 'Control and Instrumentation Engineer',
    jobLocation: 'Michaelview, Tanzania',
    interviewDate: '03 June 2025',
    status: 'accepted',
    interviewLink: 'https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state',
  },
  {
    id: '19',
    companyName: 'Johnson-Hawkins',
    companyLogoURL: 'https://placehold.co/400?text=Johnson-Hawkins',
    position: 'Buyer, Retail',
    jobLocation: 'Nicholaston, Kiribati',
    interviewDate: '12 November 2024',
    status: 'accepted',
    interviewLink: 'https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state',
  },
  {
    id: '20',
    companyName: 'Campbell PLC',
    companyLogoURL: 'https://placehold.co/400?text=Campbell PLC',
    position: 'Software Developer',
    jobLocation: 'Bakersfield, USA',
    interviewDate: '17 September 2024',
    status: 'pending',
    interviewLink: 'https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state',
  },
  {
    id: '21',
    companyName: 'Rodriguez and Sons',
    companyLogoURL: 'https://placehold.co/400?text=Rodriguez and Sons',
    position: 'Marketing Specialist',
    jobLocation: 'Los Angeles, USA',
    interviewDate: '25 February 2025',
    status: 'pending',
    interviewLink: 'https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state',
  },
];

const statusOptions = [
  { name: 'pending', key: 'pending' },
  { name: 'accepted', key: 'accepted' },
  { name: 'rejected', key: 'rejected' },
];

const interviewStatusColorMap: Record<string, ChipProps['color']> = {
  pending: 'default',
  accepted: 'success',
  rejected: 'danger',
};

const columns = [
  {
    label: 'Company',
    key: 'companyName',
    center: false,
  },
  {
    label: 'Position',
    key: 'position',
    center: false,
  },
  {
    label: 'Job Location',
    key: 'jobLocation',
    center: false,
  },
  {
    label: 'Interview Date',
    key: 'interviewDate',
    center: false,
  },
  {
    label: 'Status',
    key: 'status',
    center: true,
  },
  {
    label: 'Interview Link',
    key: 'interviewLink',
    center: true,
  },
];

function InterviewTable() {
  const [filterValue, setFilterValue] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState<Selection>('all');
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 5;
  const hasSearchFilter = Boolean(filterValue);

  const renderCell = React.useCallback((interview : EmployerInterview, columnKey: React.Key) => {
    const cellValue = interview[columnKey as keyof EmployerInterview];

    switch (columnKey) {
      case 'companyName':
        return (
          <div className="flex flex-row items-center gap-x-3">
            <Image src={interview.companyLogoURL} className="w-12 h-12 rounded-full" />
            <span className="text-darkAccent text-base">{interview.companyName}</span>
          </div>
        );
      case 'position':
        return <span className="text-darkAccent text-base">{interview.position}</span>;
      case 'jobLocation':
        return <span className="text-darkAccent text-base">{interview.jobLocation}</span>;
      case 'inteviewDate':
        return <span className="text-darkAccent text-base">{interview.interviewDate}</span>;
      case 'status':
        return (
          <Chip
            className="capitalize"
            classNames={{
              base: '!max-w-none w-[100px] h-9 rounded  p-0  ',
              content: 'p-0 flex flex-row items-center justify-center',
            }}
            color={interviewStatusColorMap[interview.status]}
          >
            {interview.status}
          </Chip>
        );
      case 'interviewLink':
        return <Button color="primary" as={Link} target="_blank" href={interview.interviewLink} className="text-base rounded-lg w-[100px] h-9">Open</Button>;
      default:
        return cellValue;
    }
  }, []);

  const filteredItems = React.useMemo(() => {
    let filteredInterviews = [...data];

    if (hasSearchFilter) {
      filteredInterviews = filteredInterviews.filter(
        (interview) => interview.position.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }

    if (statusFilter !== 'all' && Array.from(statusFilter).length !== statusOptions.length) {
      filteredInterviews = filteredInterviews.filter(
        (interview) => Array.from(statusFilter).includes(interview.status),
      );
    }

    return filteredInterviews;
  }, [hasSearchFilter, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [filteredItems, page]);

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue('');
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue('');
    setPage(1);
  }, []);

  const topContent = React.useMemo(() => (
    <div className="flex flex-row items-center gap-x-5 mb-5">
      <Input
        isClearable
        value={filterValue}
        onClear={() => onClear()}
        onValueChange={onSearchChange}
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
        placeholder="Search by position name"
        startContent={<FeatherIcon icon="search" size={24} className="text-[#B3B3B3] group-data-[focus=true]:text-darkAccent group-data-[has-value=true]:text-darkAccent" />}
      />
      <Dropdown>
        <DropdownTrigger className="hidden sm:flex">
          <Button variant="solid" color="primary" className="rounded-lg text-base h-12" endContent={<FeatherIcon icon="chevron-down" />}>
            Status
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          disallowEmptySelection
          closeOnSelect={false}
          selectedKeys={statusFilter}
          selectionMode="multiple"
          onSelectionChange={setStatusFilter}
        >
          {statusOptions.map((status) => (
            <DropdownItem key={status.key} className="capitalize">
              {capitalize(status.name)}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  ), [filterValue, onSearchChange, onClear, statusFilter]);

  const bottomContent = React.useMemo(() => (
    <div className="flex w-full justify-center mt-8">
      <Pagination
        showControls
        color="primary"
        page={page}
        total={pages}
        onChange={(newPage) => setPage(newPage)}
      />
    </div>
  ), [page, pages]);

  return (
    <section>
      <Table
        shadow="none"
        removeWrapper
        topContent={topContent}
        bottomContent={bottomContent}
        className=""
        classNames={{
          base: 'gap-0',
          th: 'bg-white py-4 border-b-2 border-b-[#D9D9D9] text-darkAccent font-bold text-base',
          tr: 'py-3 border-b-2 border-b-[#D9D9D9]',
        }}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.key}
              align={column.center ? 'center' : 'start'}
            >
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </section>
  );
}

export default InterviewTable;
