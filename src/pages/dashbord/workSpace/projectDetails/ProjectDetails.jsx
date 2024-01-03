import { Box, Button, Grid, Typography } from "@mui/material";

import { AddTask } from "@mui/icons-material";
import { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import TaskModal from "../../../../components/TaskModal/TaskModal";
import ErrorAlert from "../../../../components/sweetAlert/ErrorAlert";
import useToggler from "../../../../hooks/toggler/useToggler";
import { useGetTaskByIdQuery } from "../../../../redux/features/tasks/taskApi";
import TaskListsCard from "./TaskListCard";

export default function ProjectDetails() {

    const { id } = useParams()

    const { data = [], isError, isLoading, error } = useGetTaskByIdQuery(id)
    // console.log(data)
    const todo = data.filter(item => item.completed === false)
    const ongoing = data.filter(item => item.status === 'ongoing')
    const completed = data.filter(item => item.completed === true)

    const [open, handleOpen] = useToggler()

    if (isLoading) return

    if (isError) return <ErrorAlert error={error} />

    // console.log(data)



    return (
        <>
            <Box p={4}>
                <Toaster />
                <Box>
                    <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold' }}>All Todos</Typography>
                </Box>

                <Box my={2} textAlign="center">
                    <Button variant="contained" onClick={handleOpen} >
                        <AddTask style={{ marginRight: '10px' }} /> Add Task</Button>
                    <TaskModal open={open} handleOpen={handleOpen} />
                </Box>

                <Grid container spacing={3} mt={2}>

                    {["todo", "ongoing", "completed"].map(status => <TaskListsCard
                        key={status}
                        status={status}
                        completed={completed}
                        todo={todo}
                        ongoing={ongoing} />)}

                </Grid>
            </Box>
        </>

    )
}