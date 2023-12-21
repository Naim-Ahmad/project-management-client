import { Grid, IconButton, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { GoPlus } from "react-icons/go";

import { Link } from "react-router-dom";
import CustomizedProgressBars from "./Progress";

export default function OutlinedCard({ data }) {
  // console.log(Object.keys(data).join(','))
  const { _id, name, description, complete, tasks, createdBy, creationTime } =
    data;

  const handleAddTask = () => {};

  return (
    <>
      {/* <TaskModal open={toggle} handleOpen={handleCheck} data={data} /> */}
      <Grid container>
        <Grid item xs={12} md={6} lg={4}>
          <Link to={`/dashboard/projectDetails/${_id}`}>
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">
                <React.Fragment>
                  <CardContent>
                    <Box display="flex" justifyContent="space-between">
                      <Typography variant="h6" component="h6" fontSize={16}>
                        {name}
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
                      <CustomizedProgressBars tasks={tasks} />
                    )}
                  </CardContent>
                </React.Fragment>
              </Card>
            </Box>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
