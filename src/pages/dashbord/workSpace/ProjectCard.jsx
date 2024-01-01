import { Button, CardActions, Grid, IconButton, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { GoPlus } from "react-icons/go";
import { IoCreateSharp } from "react-icons/io5";

import { Link } from "react-router-dom";

import TaskModal from "../../../components/TaskModal/TaskModal";
import useToggler from "../../../hooks/toggler/useToggler";
import CircularWithValueLabel from "./Progress";

export default function OutlinedCard({ data }) {
  // console.log(Object.keys(data).join(','))
  const { _id, name, description, complete, tasks, createdBy, creationTime } =
    data;
    const [toggle, handleToggle] = useToggler()

  const handleAddTask = () => {
    handleToggle()
   };

  return (
    <>
      <TaskModal open={toggle} handleOpen={handleToggle} data={data} />
      <Grid container>
        <Grid item xs={12} md={6} lg={4}>

          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
              <React.Fragment>
                <CardContent>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="h6" component="h6" fontSize={16}>
                      {name.length > 21 ? `${name.slice(0, 21)}...` : name}
                    </Typography>

                    <Tooltip
                      onClick={handleAddTask}
                      title="Add Task"
                      placement="top"
                    >
                      <IconButton>
                        <GoPlus className="font-semibold text-2xl" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                  {tasks?.length > 0 && (
                    <CircularWithValueLabel tasks={tasks} />
                  )}
                  <Box>
                    <div className="flex items-center space-x-1">
                      <IoCreateSharp />{" "}
                      <h1 className="capitalize">
                        {createdBy?.firstName} {createdBy?.lastName}
                      </h1>
                    </div>
                  </Box>
                </CardContent>
                <CardActions>
                  <Link to={`/dashboard/projectDetails/${_id}`}>
                    <Button>See Details</Button>
                  </Link>
                </CardActions>
              </React.Fragment>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
