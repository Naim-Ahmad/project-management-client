import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { setModalOpen } from "../../redux/features/project/projectSlice";
import { useCreateProjectMutation } from "../../redux/features/project/projectApi";
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function ProjectModal() {
  const { modalOpen } = useSelector((state) => state.project);
  const [createProject, { data, isError }] = useCreateProjectMutation();
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setModalOpen(false));
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    // send post request
    createProject({ name, description });
  };
  useEffect(() => {
    if (data?.project?._id) {
        // first model willbe close then alert willbe show
      dispatch(setModalOpen(false));
      Swal.fire({
        title: "Welcome",
        text: "Project initiated successfully",
        icon: "success",
      });
    }
    if (isError) {
      // first model willbe close then alert willbe show
      dispatch(setModalOpen(false));

      Swal.fire({
        title: "Error",
        text: "Something wrong please try again",
        icon: "error",
      });
    }
  }, [data, dispatch, isError]);

  return (
    <>
      <Dialog open={modalOpen} onClose={handleClose}>
        <DialogTitle>Create new project</DialogTitle>
        <form onSubmit={handelSubmit}>
          <DialogContent>
            <TextField
              margin="dense"
              id="name"
              label="Project Name"
              name="name"
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
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Create</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
