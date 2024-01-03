import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import { useCreateTaskMutation } from "../../redux/features/tasks/taskApi";

export default function TaskModal({ open, handleOpen, data: projectData }) {
  const [createTask, { data, isError, isSuccess }] = useCreateTaskMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    // const title = e.target.title.value;
    // const title = e.target.title.value;
    // console.log(title)
    const taskInfo = {
      taskTitle: title,
      taskDescription: description,
      projectId: projectData?._id,
    };
    createTask(taskInfo);
    handleOpen();
  };

  // console.log(data)

  useEffect(() => {
    if (isSuccess) {
      toast.success('Task Added')
    }
  }, [])


  if (isError) {
    Swal.fire({
      title: "Error",
      text: "Something wrong please try again",
      icon: "error",
    });
  }

  return (
    <>
      <Toaster />
      <Dialog open={open} onClose={handleOpen}>
        <DialogTitle p={0}>Create new Task</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent style={{ paddingTop: '0px' }}>
            <TextField
              margin="dense"
              label="Task Title"
              name="title"
              type="text"
              fullWidth
              variant="standard"
              required
            />
            <TextField
              margin="dense"
              name="description"
              label="Description"
              type="text"
              rows={10}
              fullWidth
              variant="standard"
            />

            <TextField
              margin="dense"
              name="description"
              // label="Description"
              type="date"
              rows={10}
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleOpen}>Cancel</Button>
            <Button type="submit">Create</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
