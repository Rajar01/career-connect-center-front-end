'use client';

import {
  Button,
  Chip, ChipProps,
  Image,
  Pagination,
  Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Selection, Input,
  Dropdown, DropdownTrigger,
  DropdownMenu, DropdownItem,
} from '@nextui-org/react';
import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { capitalize } from '@nextui-org/shared-utils';

type Application = {
  id: string,
  companyName: string,
  companyLogoURL:string,
  position: string,
  jobLocation: string,
  applicationDate: string,
  status: string,
};

const data : Application[] = [
  {
    id: '1',
    companyName: 'Tokopedia',
    companyLogoURL: 'https://placehold.co/400',
    position: 'Software Engineer',
    jobLocation: 'Jakarta, Indonesia',
    applicationDate: '22 July 2024',
    status: 'pending',
  },
  {
    id: '2',
    companyName: 'Tokopedia',
    companyLogoURL: 'https://placehold.co/400',
    position: 'Software Engineer',
    jobLocation: 'Jakarta, Indonesia',
    applicationDate: '22 July 2024',
    status: 'pending',
  },
  {
    id: '3',
    companyName: 'Apple',
    companyLogoURL: 'https://placehold.co/400',
    position: 'Software Engineer',
    jobLocation: 'Jakarta, Indonesia',
    applicationDate: '23 August 2024',
    status: 'accepted',
  },
  {
    id: '4',
    companyName: 'Apple',
    companyLogoURL: 'https://placehold.co/400',
    position: 'Software Developer',
    jobLocation: 'Jakarta, Indonesia',
    applicationDate: '23 August 2024',
    status: 'rejected',
  },
  {
    id: '5',
    companyName: 'Apple',
    companyLogoURL: 'https://placehold.co/400',
    position: 'Software Developer',
    jobLocation: 'Jakarta, Indonesia',
    applicationDate: '23 August 2024',
    status: 'rejected',
  },
  {
    id: '6',
    companyName: 'Shoppe',
    companyLogoURL: 'https://placehold.co/400',
    position: 'Software Developer',
    jobLocation: 'Jakarta, Indonesia',
    applicationDate: '23 August 2024',
    status: 'rejected',
  },
  {
    id: '7',
    companyName: 'Amazon',
    companyLogoURL: 'https://placehold.co/400',
    position: 'Software Developer',
    jobLocation: 'Jakarta, Indonesia',
    applicationDate: '23 August 2024',
    status: 'rejected',
  }, {
    id: '8',
    companyName: 'Tokopedia',
    companyLogoURL: 'https://placehold.co/400',
    position: 'Software Engineer',
    jobLocation: 'Jakarta, Indonesia',
    applicationDate: '22 July 2024',
    status: 'pending',
  },
  {
    id: '9',
    companyName: 'Tokopedia',
    companyLogoURL: 'https://placehold.co/400',
    position: 'Software Engineer',
    jobLocation: 'Jakarta, Indonesia',
    applicationDate: '22 July 2024',
    status: 'pending',
  },
  {
    id: '10',
    companyName: 'Tokopedia',
    companyLogoURL: 'https://placehold.co/400',
    position: 'Software Engineer',
    jobLocation: 'Jakarta, Indonesia',
    applicationDate: '22 July 2024',
    status: 'pending',
  },
];

const statusOptions = [
  { name: 'pending', key: 'pending' },
  { name: 'accepted', key: 'accepted' },
  { name: 'rejected', key: 'rejected' },
];

const applicationStatusColorMap: Record<string, ChipProps['color']> = {
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
    label: 'Application Date',
    key: 'applicationDate',
    center: false,
  },
  {
    label: 'Status',
    key: 'status',
    center: true,
  },
  {
    label: 'Application Document',
    key: 'applicationDocument',
    center: true,
  },
];

function ApplicationTable() {
  const [filterValue, setFilterValue] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState<Selection>('all');
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 5;
  const hasSearchFilter = Boolean(filterValue);

  const renderCell = React.useCallback((application : Application, columnKey: React.Key) => {
    const cellValue = application[columnKey as keyof Application];

    switch (columnKey) {
      case 'companyName':
        return (
          <div className="flex flex-row items-center gap-x-3">
            <Image src={application.companyLogoURL} className="w-12 h-12 rounded-full" />
            <span className="text-darkAccent text-base">{application.companyName}</span>
          </div>
        );
      case 'position':
        return <span className="text-darkAccent text-base">{application.position}</span>;
      case 'jobLocation':
        return <span className="text-darkAccent text-base">{application.jobLocation}</span>;
      case 'applicationDate':
        return <span className="text-darkAccent text-base">{application.applicationDate}</span>;
      case 'status':
        return (
          <Chip
            className="capitalize"
            classNames={{
              base: '!max-w-none w-[100px] h-9 rounded  p-0  ',
              content: 'p-0 flex flex-row items-center justify-center',
            }}
            color={applicationStatusColorMap[application.status]}
          >
            {application.status}
          </Chip>
        );
      case 'applicationDocument':
        return <Button color="primary" className="text-base rounded-lg w-[100px] h-9">View</Button>;
      default:
        return cellValue;
    }
  }, []);

  const filteredItems = React.useMemo(() => {
    let filteredApplications = [...data];

    if (hasSearchFilter) {
      filteredApplications = filteredApplications.filter(
        (application) => application.position.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }

    if (statusFilter !== 'all' && Array.from(statusFilter).length !== statusOptions.length) {
      filteredApplications = filteredApplications.filter(
        (application) => Array.from(statusFilter).includes(application.status),
      );
    }

    return filteredApplications;
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

export default ApplicationTable;
