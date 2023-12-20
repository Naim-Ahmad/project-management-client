import { Grid, IconButton, LinearProgress, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { GoPlus } from "react-icons/go";

import CustomizedProgressBars from "./Progress";

export default function OutlinedCard({ data }) {
  // console.log(Object.keys(data).join(','))
  const { _id, name, description, complete, tasks, createdBy, creationTime } =
    data;

  const [checked, setChecked] = React.useState([0]);

  const handleCheck = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAddTask = () => {};

  return (
    <>
      {/* <TaskModal open={toggle} handleOpen={handleCheck} data={data} /> */}
      <Grid container>
        <Grid item xs={12} md={6} lg={4}>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
              <React.Fragment>
                <CardContent>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="h6" component="h6" fontSize={16}>
                      {name.length > 22 ? `${name.slice(0, 22)}...` : name}
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
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </React.Fragment>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
