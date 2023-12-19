import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import Swal from "sweetalert2";
import { useCreateTaskMutation } from "../../redux/features/tasks/taskApi";

export default function TaskModal({ open, handleOpen, data: projectData }) {
  const [createTask, { data, isError }] = useCreateTaskMutation();

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
  };

  // console.log(data)

  if (data?._id) {
    handleOpen();
  }

  if (isError) {
    handleOpen();
    Swal.fire({
      title: "Error",
      text: "Something wrong please try again",
      icon: "error",
    });
  }

  return (
    <Dialog open={open} onClose={handleOpen}>
      <DialogTitle>Create new project</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOpen}>Cancel</Button>
          <Button type="submit">Create</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
