import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
} from "@material-tailwind/react";
import moment from "moment/moment";
import EditOption from "./EditOption";
import { useState } from "react";
import { useSelector } from "react-redux";

const TABS = [
  {
    label: "Employee",
    value: "employee",
  },
  {
    label: "Manager",
    value: "manager",
  },
  {
    label: "Panding",
    value: "notvarified",
  },
];

const TABLE_HEAD = ["Employee", "Role", "Status", "Join Date", ""];

export default function EmployeeTable({
  results,
  setrole,
  setvarified,
  currentPage,
  setCurrentPage,
  setName,
}) {
  const { user } = useSelector((state) => state.auth);

  const [itemPerPage] = useState(8);
  const totalPage = Math.ceil(results?.count / itemPerPage);

  // this funtion willbe handel set query
  const handelSetQuery = (value) => {
    if (value === "notvarified") {
      setCurrentPage(1);
      setrole("employee");
      setvarified(false);
    } else {
      setCurrentPage(1);
      setrole(value);
      setvarified(true);
    }
  };

  const handelSetCurrentPage = (page) => {
    setCurrentPage(page);
  };

  // debounce handeling for input box
  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }
  function saveInput(value) {
    setName(value);
  }
  const handelOnchange = debounce((value) => saveInput(value));
  return (
    <Card className=" w-full z-0">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Members list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all members
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outlined" size="sm">
              view all
            </Button>
            <Button className="flex items-center gap-3" size="sm">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="employee" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => handelSetQuery(value)}
                >
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              onChange={(e) => handelOnchange(e.target.value)}
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {results?.users?.length == 0 && (
              <tr className="text-lg text-center font-bold capitalize">
                <td> no Data Found</td>
              </tr>
            )}
            {results?.users?.map(
              (
                {
                  _id,
                  firstName,
                  lastName,
                  email,
                  role,
                  isVarified,
                  createdAt,
                },
                index
              ) => {
                const isLast = index === results.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={_id}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar
                          src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg"
                          alt={firstName}
                          size="sm"
                        />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {firstName + " " + lastName}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70 capitalize"
                        >
                          {role}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={isVarified ? "Varified" : "Not Varified"}
                          color={isVarified ? "green" : "red"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {moment(createdAt).format("DD MMM YYYY")}
                      </Typography>
                    </td>
                    <td className={classes}>
                      {/* action */}
                      {user?.email == email ? (
                        <p>You</p>
                      ) : (
                        <EditOption user={{ _id, role, isVarified }} />
                      )}
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page {currentPage} of {totalPage}
        </Typography>
        <div className="flex gap-2">
          <Button
            variant="outlined"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => handelSetCurrentPage(currentPage - 1)}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            size="sm"
            disabled={currentPage === totalPage}
            onClick={() => handelSetCurrentPage(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
