import { Grid, List } from "@mui/material";

import { useParams } from "react-router-dom";
import ErrorAlert from "../../../../components/sweetAlert/ErrorAlert";
import { useGetTaskByIdQuery } from "../../../../redux/features/tasks/taskApi";
import TaskList from "./TaskList";

export default function ProjectDetails() {

    const {id} = useParams()

    const {data, isError, isLoading, error} = useGetTaskByIdQuery(id)

      if(isLoading) return

      if(isError) return <ErrorAlert error={error}/>

      console.log(data)
    

    return (
        <Grid container spacing={4} sx={{minHeight: '90svh'}}>
            <Grid item xs={12} md={6}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {data?.map((value) => <TaskList key={value._id} value={value}/>)}
                </List>
            </Grid>

            <Grid item xs={12} md={6}>
                Box 2
            </Grid>
        </Grid>
    )
}