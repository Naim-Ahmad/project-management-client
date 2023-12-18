import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { setModalOpen } from "../../redux/features/project/projectSlice";

export default function ProjectModal() {
  const { modalOpen } = useSelector((state) => state.project);
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
    console.log(name, description);
  };

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
