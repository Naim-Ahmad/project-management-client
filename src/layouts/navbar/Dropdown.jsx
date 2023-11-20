import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import svg from "../../assets/nophoto.webp";
import { useLogoutMutation } from "../../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/auth/authSlice";

// routes
const settings = ["Profile", "Account", "Dashboard"];

export default function Dropdown() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();

  const handelLogout = () => {
    logout();
    dispatch(setUser(null));
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton
            onClick={handleOpenUserMenu}
            sx={{ p: 0, border: "3px solid #7C3AED", width: 40, height: 40 }}
          >
            <Avatar alt="Remy Sharp" src={svg} />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <NavLink to={`/${setting.toLowerCase()}`}>{setting}</NavLink>
            </MenuItem>
          ))}
          <MenuItem onClick={handelLogout}>
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </div>
  );
}
