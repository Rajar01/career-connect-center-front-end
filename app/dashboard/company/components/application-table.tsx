import React from 'react';
import { StatusType } from '@/enums/enums';
import {
  Button,
  Chip,
  ChipProps,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input, Modal, ModalBody, ModalContent,
  Pagination,
  Selection, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow,
  useDisclosure,
} from '@nextui-org/react';
import FeatherIcon from 'feather-icons-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { capitalize } from '@nextui-org/shared-utils';

type CompanyApplication = {
  id: string,
  applicantName: string,
  position: string,
  applicationDate: string,
  status: StatusType,
};

const data: CompanyApplication[] = [
  {
    id: '1',
    applicantName: 'Gretchen Grant',
    position: 'Software Engineer',
    applicationDate: '22 August 2024',
    status: StatusType.ACCEPTED,
  },
  {
    id: '2',
    applicantName: 'Michael Smith',
    position: 'Product Manager',
    applicationDate: '15 July 2024',
    status: StatusType.PENDING,
  },
  {
    id: '3',
    applicantName: 'Jennifer Lee',
    position: 'Data Scientist',
    applicationDate: '10 June 2024',
    status: StatusType.REJECTED,
  },
  {
    id: '4',
    applicantName: 'Samuel Johnson',
    position: 'UX Designer',
    applicationDate: '30 May 2024',
    status: StatusType.ACCEPTED,
  },
  {
    id: '5',
    applicantName: 'Emily Davis',
    position: 'DevOps Engineer',
    applicationDate: '12 April 2024',
    status: StatusType.PENDING,
  },
  {
    id: '6',
    applicantName: 'Daniel Wilson',
    position: 'Marketing Specialist',
    applicationDate: '25 March 2024',
    status: StatusType.REJECTED,
  },
  {
    id: '7',
    applicantName: 'Natalie Brown',
    position: 'Software Engineer',
    applicationDate: '05 February 2024',
    status: StatusType.ACCEPTED,
  },
  {
    id: '8',
    applicantName: 'Christopher Green',
    position: 'Product Manager',
    applicationDate: '17 January 2024',
    status: StatusType.PENDING,
  },
  {
    id: '9',
    applicantName: 'Sophia Miller',
    position: 'Data Scientist',
    applicationDate: '08 December 2023',
    status: StatusType.REJECTED,
  },
  {
    id: '10',
    applicantName: 'Andrew Harris',
    position: 'UX Designer',
    applicationDate: '20 November 2023',
    status: StatusType.ACCEPTED,
  },
  {
    id: '11',
    applicantName: 'Olivia Clark',
    position: 'DevOps Engineer',
    applicationDate: '02 October 2023',
    status: StatusType.PENDING,
  },
  {
    id: '12',
    applicantName: 'James Robinson',
    position: 'Marketing Specialist',
    applicationDate: '14 September 2023',
    status: StatusType.REJECTED,
  },
  {
    id: '13',
    applicantName: 'Ava Martinez',
    position: 'Software Engineer',
    applicationDate: '26 August 2023',
    status: StatusType.ACCEPTED,
  },
  {
    id: '14',
    applicantName: 'Liam Lewis',
    position: 'Product Manager',
    applicationDate: '07 July 2023',
    status: StatusType.PENDING,
  },
  {
    id: '15',
    applicantName: 'Isabella Walker',
    position: 'Data Scientist',
    applicationDate: '19 June 2023',
    status: StatusType.REJECTED,
  },
  {
    id: '16',
    applicantName: 'Ethan Hall',
    position: 'UX Designer',
    applicationDate: '01 May 2023',
    status: StatusType.ACCEPTED,
  },
];

const statusOptions = [
  { name: 'pending', key: 'pending' },
  { name: 'accepted', key: 'accepted' },
  { name: 'rejected', key: 'rejected' },
];

const companyApplicationStatusColorMap: Record<string, ChipProps['color']> = {
  pending: 'default',
  accepted: 'success',
  rejected: 'danger',
};

const columns = [
  {
    label: 'Applicant',
    key: 'applicantName',
    center: false,
  },
  {
    label: 'Position',
    key: 'position',
    center: false,
  },
  {
    label: 'Application Date',
    key: 'applicationDate',
    center: false,
  },
  {
    label: 'Application Document',
    key: 'applicationDocument',
    center: true,
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

function ApplicationTable() {
  const [filterValue, setFilterValue] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState<Selection>('all');
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 5;
  const hasSearchFilter = Boolean(filterValue);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const renderCell = React.useCallback((application : CompanyApplication, columnKey: React.Key) => {
    const cellValue = application[columnKey as keyof CompanyApplication];

    switch (columnKey) {
      case 'applicantName':
        return <span className="text-darkAccent text-base">{application.applicantName}</span>;
      case 'position':
        return <span className="text-darkAccent text-base">{application.position}</span>;
      case 'applicationDate':
        return <span className="text-darkAccent text-base">{application.applicationDate}</span>;
      case 'applicationDocument':
        return <Button color="primary" className="text-base rounded-lg w-[100px] h-9" onClick={onOpen}>View</Button>;
      case 'status':
        return (
          <Chip
            className="capitalize"
            classNames={{
              base: '!max-w-none w-[100px] h-9 rounded  p-0  ',
              content: 'p-0 flex flex-row items-center justify-center',
            }}
            color={companyApplicationStatusColorMap[application.status]}
          >
            {application.status}
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
    let filteredApplications = [...data];

    if (hasSearchFilter) {
      filteredApplications = filteredApplications.filter(
        (application) => application.applicantName.toLowerCase()
          .includes(filterValue.toLowerCase()),
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
        placeholder="Search by applicant name"
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
    <>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        hideCloseButton
        onClose={onClose}
        size="xl"
        classNames={{
          base: 'p-4 rounded-lg',
          body: 'p-0',
        }}
      >
        <ModalContent>
          {() => (
            <ModalBody className="space-y-3">
              <div className="flex flex-row items-center justify-between text-darkAccent">
                <span className="font-bold text-[19px]">Uploaded Application Documents</span>
                <Button isIconOnly color="danger" variant="light" className="text-danger rounded-lg" onClick={onClose}>
                  <FeatherIcon icon="x-circle" />
                </Button>
              </div>
              <div className="space-y-5">
                <div className="bg-secondary px-4 py-3 rounded-lg flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center justify-center gap-x-3">
                    <FeatherIcon icon="file" size={32} />
                    <div className="flex flex-col gap-y-0.5">
                      <span className="text-darkAccent">Resume.pdf</span>
                      <span className="text-[#B3B3B3] text-[14px]">9.83 MB</span>
                    </div>
                  </div>
                  <Button color="primary" variant="light" className="text-base rounded-lg">
                    Download
                  </Button>
                </div>
                <div className="bg-secondary px-4 py-3 rounded-lg flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center justify-center gap-x-3">
                    <FeatherIcon icon="file" size={32} />
                    <div className="flex flex-col gap-y-0.5">
                      <span className="text-darkAccent">Resume.pdf</span>
                      <span className="text-[#B3B3B3] text-[14px]">9.83 MB</span>
                    </div>
                  </div>
                  <Button color="primary" variant="light" className="text-base rounded-lg">
                    Download
                  </Button>
                </div>
                <div className="bg-secondary px-4 py-3 rounded-lg flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center justify-center gap-x-3">
                    <FeatherIcon icon="file" size={32} />
                    <div className="flex flex-col gap-y-0.5">
                      <span className="text-darkAccent">Resume.pdf</span>
                      <span className="text-[#B3B3B3] text-[14px]">9.83 MB</span>
                    </div>
                  </div>
                  <Button color="primary" variant="light" className="text-base rounded-lg">
                    Download
                  </Button>
                </div>
              </div>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
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
    </>
  );
}

export default ApplicationTable;
