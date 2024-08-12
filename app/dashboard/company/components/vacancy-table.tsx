'use client';

import React from 'react';
import {
  ExperienceLevel, JobType, StatusType, WorkType,
} from '@/enums/enums';
import {
  Button,
  Chip,
  ChipProps,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input, Link,
  Pagination,
  Selection,
  Table, TableBody, TableCell, TableColumn, TableHeader, TableRow,
} from '@nextui-org/react';
import FeatherIcon from 'feather-icons-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { capitalize } from '@nextui-org/shared-utils';

type Vacancy = {
  id: string,
  position: string,
  jobType: JobType,
  workType: WorkType,
  experienceLevel: ExperienceLevel,
  applicationDeadline: string,
  status: StatusType,
};

const data: Vacancy[] = [
  {
    id: '1',
    position: 'Software Engineer',
    jobType: JobType.CONTRACT,
    workType: WorkType.ON_SITE,
    experienceLevel: ExperienceLevel.SENIOR,
    applicationDeadline: '22 July 2024',
    status: StatusType.ACCEPTED,
  },
  {
    id: '2',
    position: 'Product Manager',
    jobType: JobType.FULL_TIME,
    workType: WorkType.REMOTE,
    experienceLevel: ExperienceLevel.LEAD_MANAGERIAL,
    applicationDeadline: '30 September 2024',
    status: StatusType.PENDING,
  },
  {
    id: '3',
    position: 'Data Scientist',
    jobType: JobType.PART_TIME,
    workType: WorkType.HYBRID,
    experienceLevel: ExperienceLevel.JUNIOR,
    applicationDeadline: '15 August 2024',
    status: StatusType.REJECTED,
  },
  {
    id: '4',
    position: 'UX Designer',
    jobType: JobType.CONTRACT,
    workType: WorkType.REMOTE,
    experienceLevel: ExperienceLevel.MID_LEVEL,
    applicationDeadline: '22 October 2024',
    status: StatusType.ACCEPTED,
  },
  {
    id: '5',
    position: 'DevOps Engineer',
    jobType: JobType.FULL_TIME,
    workType: WorkType.ON_SITE,
    experienceLevel: ExperienceLevel.SENIOR,
    applicationDeadline: '10 November 2024',
    status: StatusType.PENDING,
  },
  {
    id: '6',
    position: 'Marketing Specialist',
    jobType: JobType.PART_TIME,
    workType: WorkType.HYBRID,
    experienceLevel: ExperienceLevel.FRESHER_ENTRY_LEVEL,
    applicationDeadline: '05 September 2024',
    status: StatusType.REJECTED,
  },
  {
    id: '7',
    position: 'Software Engineer',
    jobType: JobType.CONTRACT,
    workType: WorkType.ON_SITE,
    experienceLevel: ExperienceLevel.MID_LEVEL,
    applicationDeadline: '12 December 2024',
    status: StatusType.ACCEPTED,
  },
  {
    id: '8',
    position: 'Product Manager',
    jobType: JobType.FULL_TIME,
    workType: WorkType.REMOTE,
    experienceLevel: ExperienceLevel.LEAD_MANAGERIAL,
    applicationDeadline: '25 January 2025',
    status: StatusType.PENDING,
  },
  {
    id: '9',
    position: 'Data Scientist',
    jobType: JobType.PART_TIME,
    workType: WorkType.HYBRID,
    experienceLevel: ExperienceLevel.JUNIOR,
    applicationDeadline: '18 February 2025',
    status: StatusType.REJECTED,
  },
  {
    id: '10',
    position: 'UX Designer',
    jobType: JobType.CONTRACT,
    workType: WorkType.REMOTE,
    experienceLevel: ExperienceLevel.MID_LEVEL,
    applicationDeadline: '30 March 2025',
    status: StatusType.ACCEPTED,
  },
  {
    id: '11',
    position: 'DevOps Engineer',
    jobType: JobType.FULL_TIME,
    workType: WorkType.ON_SITE,
    experienceLevel: ExperienceLevel.SENIOR,
    applicationDeadline: '17 April 2025',
    status: StatusType.PENDING,
  },
  {
    id: '12',
    position: 'Marketing Specialist',
    jobType: JobType.PART_TIME,
    workType: WorkType.HYBRID,
    experienceLevel: ExperienceLevel.FRESHER_ENTRY_LEVEL,
    applicationDeadline: '22 May 2025',
    status: StatusType.REJECTED,
  },
  {
    id: '13',
    position: 'Software Engineer',
    jobType: JobType.CONTRACT,
    workType: WorkType.ON_SITE,
    experienceLevel: ExperienceLevel.SENIOR,
    applicationDeadline: '15 June 2025',
    status: StatusType.ACCEPTED,
  },
  {
    id: '14',
    position: 'Product Manager',
    jobType: JobType.FULL_TIME,
    workType: WorkType.REMOTE,
    experienceLevel: ExperienceLevel.LEAD_MANAGERIAL,
    applicationDeadline: '30 July 2025',
    status: StatusType.PENDING,
  },
  {
    id: '15',
    position: 'Data Scientist',
    jobType: JobType.PART_TIME,
    workType: WorkType.HYBRID,
    experienceLevel: ExperienceLevel.JUNIOR,
    applicationDeadline: '20 August 2025',
    status: StatusType.REJECTED,
  },
  {
    id: '16',
    position: 'UX Designer',
    jobType: JobType.CONTRACT,
    workType: WorkType.REMOTE,
    experienceLevel: ExperienceLevel.MID_LEVEL,
    applicationDeadline: '10 September 2025',
    status: StatusType.ACCEPTED,
  },
];

const statusOptions = [
  { name: 'pending', key: 'pending' },
  { name: 'accepted', key: 'accepted' },
  { name: 'rejected', key: 'rejected' },
];

const vacancyStatusColorMap: Record<string, ChipProps['color']> = {
  pending: 'default',
  accepted: 'success',
  rejected: 'danger',
};

const columns = [
  {
    label: 'Position',
    key: 'position',
    center: false,
  },
  {
    label: 'Job Type',
    key: 'jobType',
    center: true,
  },
  {
    label: 'Work Type',
    key: 'workType',
    center: true,
  },
  {
    label: 'Experience Level',
    key: 'experienceLevel',
    center: false,
  },
  {
    label: 'Application Deadline',
    key: 'applicationDeadline',
    center: false,
  },
  {
    label: 'Status',
    key: 'status',
    center: true,
  },
  {
    label: 'Actions',
    key: 'actions',
    center: true,
  },
];

function VacancyTable() {
  const [filterValue, setFilterValue] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState<Selection>('all');
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 5;
  const hasSearchFilter = Boolean(filterValue);

  const renderCell = React.useCallback((vacancy : Vacancy, columnKey: React.Key) => {
    const cellValue = vacancy[columnKey as keyof Vacancy];

    switch (columnKey) {
      case 'position':
        return <span className="text-darkAccent text-base">{vacancy.position}</span>;
      case 'jobType':
        return (
          <Chip
            className="capitalize"
            classNames={{
              base: '!max-w-none w-[100px] h-9 rounded  p-0  ',
              content: 'p-0 flex flex-row items-center justify-center',
            }}
            color="primary"
          >
            {vacancy.jobType.toString()}
          </Chip>
        );
      case 'workType':
        return (
          <Chip
            className="capitalize"
            classNames={{
              base: '!max-w-none w-[100px] h-9 rounded  p-0  ',
              content: 'p-0 flex flex-row items-center justify-center',
            }}
            color="primary"
          >
            {vacancy.workType.toString()}
          </Chip>
        );
      case 'experienceLevel':
        return <span className="capitalize text-darkAccent text-base">{vacancy.experienceLevel.toString()}</span>;
      case 'applicationDeadline':
        return <span className="text-darkAccent text-base">{vacancy.applicationDeadline}</span>;
      case 'status':
        return (
          <Chip
            className="capitalize"
            classNames={{
              base: '!max-w-none w-[100px] h-9 rounded  p-0  ',
              content: 'p-0 flex flex-row items-center justify-center',
            }}
            color={vacancyStatusColorMap[vacancy.status.toString()]}
          >
            {vacancy.status.toString()}
          </Chip>
        );
      case 'actions':
        return (
          <Button isIconOnly variant="light" className="text-darkAccent rounded-lg">
            <FeatherIcon icon="more-vertical" />
          </Button>
        );
      default:
        return cellValue;
    }
  }, []);

  const filteredItems = React.useMemo(() => {
    let filteredVacancies = [...data];

    if (hasSearchFilter) {
      filteredVacancies = filteredVacancies.filter(
        (vacancy) => vacancy.position.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }

    if (statusFilter !== 'all' && Array.from(statusFilter).length !== statusOptions.length) {
      filteredVacancies = filteredVacancies.filter(
        (vacancy) => Array.from(statusFilter).includes(vacancy.status),
      );
    }

    return filteredVacancies;
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
      <Button
        startContent={<FeatherIcon icon="plus" />}
        color="primary"
        className="rounded-lg h-12 text-base"
        as={Link}
        href="/dashboard/company/jobs/create"
      >
        Add Vacancy
      </Button>
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

export default VacancyTable;
