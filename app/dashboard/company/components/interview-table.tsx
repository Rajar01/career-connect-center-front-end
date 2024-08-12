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
  Input,
  Link,
  Pagination,
  PopoverTrigger,
  PopoverContent,
  Popover,
  Selection,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  ListboxItem,
  Listbox,
  Modal,
  ModalContent,
  ModalBody, useDisclosure, DatePicker,

} from '@nextui-org/react';
import FeatherIcon from 'feather-icons-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { capitalize } from '@nextui-org/shared-utils';

type CompanyInterview = {
  id: string,
  applicantName: string,
  position: string,
  interviewDate: string,
  interviewLink:string
  status: StatusType,
};

const data: CompanyInterview[] = [
  {
    id: '1',
    applicantName: 'Robert',
    position: 'Software Engineer',
    interviewDate: '22 August 2024',
    interviewLink: 'https://example.com/interview/robert',
    status: StatusType.PENDING,
  },
  {
    id: '2',
    applicantName: 'Emily Smith',
    position: 'Product Manager',
    interviewDate: '25 August 2024',
    interviewLink: 'https://example.com/interview/emily-smith',
    status: StatusType.ACCEPTED,
  },
  {
    id: '3',
    applicantName: 'Michael Brown',
    position: 'Data Scientist',
    interviewDate: '30 August 2024',
    interviewLink: 'https://example.com/interview/michael-brown',
    status: StatusType.REJECTED,
  },
  {
    id: '4',
    applicantName: 'Sarah Johnson',
    position: 'UX Designer',
    interviewDate: '15 September 2024',
    interviewLink: 'https://example.com/interview/sarah-johnson',
    status: StatusType.PENDING,
  },
  {
    id: '5',
    applicantName: 'David Lee',
    position: 'DevOps Engineer',
    interviewDate: '20 September 2024',
    interviewLink: 'https://example.com/interview/david-lee',
    status: StatusType.ACCEPTED,
  },
  {
    id: '6',
    applicantName: 'Laura Martinez',
    position: 'Marketing Specialist',
    interviewDate: '01 October 2024',
    interviewLink: 'https://example.com/interview/laura-martinez',
    status: StatusType.REJECTED,
  },
  {
    id: '7',
    applicantName: 'James Wilson',
    position: 'Software Engineer',
    interviewDate: '05 October 2024',
    interviewLink: 'https://example.com/interview/james-wilson',
    status: StatusType.PENDING,
  },
  {
    id: '8',
    applicantName: 'Emma Davis',
    position: 'Product Manager',
    interviewDate: '10 October 2024',
    interviewLink: 'https://example.com/interview/emma-davis',
    status: StatusType.ACCEPTED,
  },
  {
    id: '9',
    applicantName: 'John Garcia',
    position: 'Data Scientist',
    interviewDate: '20 October 2024',
    interviewLink: 'https://example.com/interview/john-garcia',
    status: StatusType.REJECTED,
  },
  {
    id: '10',
    applicantName: 'Olivia Miller',
    position: 'UX Designer',
    interviewDate: '25 October 2024',
    interviewLink: 'https://example.com/interview/olivia-miller',
    status: StatusType.PENDING,
  },
  {
    id: '11',
    applicantName: 'Benjamin Hernandez',
    position: 'DevOps Engineer',
    interviewDate: '05 November 2024',
    interviewLink: 'https://example.com/interview/benjamin-hernandez',
    status: StatusType.ACCEPTED,
  },
  {
    id: '12',
    applicantName: 'Sophia Clark',
    position: 'Marketing Specialist',
    interviewDate: '10 November 2024',
    interviewLink: 'https://example.com/interview/sophia-clark',
    status: StatusType.REJECTED,
  },
  {
    id: '13',
    applicantName: 'William Martinez',
    position: 'Software Engineer',
    interviewDate: '15 November 2024',
    interviewLink: 'https://example.com/interview/william-martinez',
    status: StatusType.PENDING,
  },
  {
    id: '14',
    applicantName: 'Ava Rodriguez',
    position: 'Product Manager',
    interviewDate: '20 November 2024',
    interviewLink: 'https://example.com/interview/ava-rodriguez',
    status: StatusType.ACCEPTED,
  },
  {
    id: '15',
    applicantName: 'Elijah White',
    position: 'Data Scientist',
    interviewDate: '25 November 2024',
    interviewLink: 'https://example.com/interview/elijah-white',
    status: StatusType.REJECTED,
  },
  {
    id: '16',
    applicantName: 'Mia Hall',
    position: 'UX Designer',
    interviewDate: '30 November 2024',
    interviewLink: 'https://example.com/interview/mia-hall',
    status: StatusType.PENDING,
  },
];

const statusOptions = [
  { name: 'pending', key: 'pending' },
  { name: 'accepted', key: 'accepted' },
  { name: 'rejected', key: 'rejected' },
];

const companyInterviewStatusColorMap: Record<string, ChipProps['color']> = {
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
    label: 'Interview Date',
    key: 'interviewDate',
    center: false,
  },
  {
    label: 'Interview Link',
    key: 'interviewLink',
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

function InterviewTable() {
  const [filterValue, setFilterValue] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState<Selection>('all');
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 5;
  const hasSearchFilter = Boolean(filterValue);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const renderCell = React.useCallback((interview : CompanyInterview, columnKey: React.Key) => {
    const cellValue = interview[columnKey as keyof CompanyInterview];

    switch (columnKey) {
      case 'applicantName':
        return <span className="text-darkAccent text-base">{interview.applicantName}</span>;
      case 'position':
        return <span className="text-darkAccent text-base">{interview.position}</span>;
      case 'interviewDate':
        return <span className="text-darkAccent text-base">{interview.interviewDate}</span>;
      case 'interviewLink':
        return (
          <Button
            color="primary"
            className="text-base rounded-lg w-[100px] h-9"
            as={Link}
            target="_blank"
            href={interview.interviewLink}
          >
            Open
          </Button>
        );
      case 'status':
        return (
          <Chip
            className="capitalize"
            classNames={{
              base: '!max-w-none w-[100px] h-9 rounded  p-0  ',
              content: 'p-0 flex flex-row items-center justify-center',
            }}
            color={companyInterviewStatusColorMap[interview.status]}
          >
            {interview.status}
          </Chip>
        );
      case 'actions':
        return (
          <Dropdown placement="bottom-end" classNames={{ content: 'rounded w-[200px] p-0' }}>
            <DropdownTrigger className="">
              <Button isIconOnly variant="light" className="text-darkAccent rounded-lg">
                <FeatherIcon icon="more-vertical" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              closeOnSelect
              classNames={{ base: 'p-2 rounded' }}
            >
              <DropdownItem
                className="rounded text-darkAccent [&>span]:text-base"
                onPress={onOpen}
              >
                Edit
              </DropdownItem>
              <DropdownItem
                className="rounded text-danger [&>span]:text-base"
                color="danger"
              >
                Reject
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        );
      default:
        return cellValue;
    }
  }, []);

  const filteredItems = React.useMemo(() => {
    let filteredInterviews = [...data];

    if (hasSearchFilter) {
      filteredInterviews = filteredInterviews.filter(
        (interview) => interview.applicantName.toLowerCase()
          .includes(filterValue.toLowerCase()),
      );
    }

    if (statusFilter !== 'all' && Array.from(statusFilter).length !== statusOptions.length) {
      filteredInterviews = filteredInterviews.filter(
        (application) => Array.from(statusFilter).includes(application.status),
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
              <div className="flex flex-col text-darkAccent">
                <span className="font-bold text-[19px]">Edit Interview Details</span>
                <span>
                  Update the interview schedule and other details.
                  Make sure all changes are saved before exiting.
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex flex-col">
                  <span className="text-darkAccent font-medium mb-2 after:text-danger after:content-['_*']">Interview date</span>
                  {/* Temporary solution for style input wrapper (https://github.com/nextui-org/nextui/issues/2895) */}
                  <DatePicker
                    className="[&>div]:rounded [&>div]:h-full [&>div]:px-3 [&>div]:active:border-primary
                [&>div]:active:border-2 [&>div]:focus:border-primary [&>div]:focus:border-2
                [&>div]:focus-within:border-primary [&>div]:focus-within:border-2
                [&>div]:target:border-primary [&>div]:target:border-2
                [&>div]:hover:border-primary [&>div]:hover:border-2
                [&>div]:visited:border-primary [&>div]:visited:border-2
                [&>div]:focus-visible:border-primary [&>div]:focus-visible:border-2
                [&>div]:group-active:border-primary [&>div]:group-active:border-2
                [&>div]:group-focus:border-primary [&>div]:group-focus:border-2
                [&>div]:group-focus-within:border-primary
                [&>div]:group-focus-within:border-2 [&>div]:group-target:border-primary
                [&>div]:group-target:border-2 [&>div]:group-hover:border-primary
                [&>div]:group-hover:border-2 [&>div]:group-visited:border-primary
                [&>div]:group-visited:border-2 [&>div]:group-focus-visible:border-primary
                [&>div]:group-focus-visible:border-2"
                    classNames={{
                      base: [
                        'w-full h-[40px]',
                      ],
                    }}
                    variant="bordered"
                  />
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-darkAccent font-medium mb-2 after:text-danger after:content-['_*']"
                  >
                    Interview link
                  </span>
                  <Input
                    classNames={{
                      base: 'w-full h-[40px]',
                      inputWrapper: [
                        'rounded h-full px-3',
                        'group-data-[focus=true]:border-primary group-data-[focus=true]:border-2',
                        'group-data-[hover=true]:border-primary',
                      ],
                      input: [
                        'text-base !text-darkAccent',
                        'placeholder:text-[#B3B3B3]',
                        'data-[has-start-content=true]:ps-0 data-[has-end-content=true]:pe-0',
                      ],
                    }}
                    variant="bordered"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-x-3">
                <Button
                  onPress={onClose}
                  color="primary"
                  variant="bordered"
                  className="rounded-lg flex-1"
                >
                  Cancel
                </Button>
                <Button onPress={onClose} color="primary" className="rounded-lg flex-1">Save</Button>
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

export default InterviewTable;
