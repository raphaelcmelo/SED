import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { selectUser, useSelector } from "@/lib/redux";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, userSlice } from "@/lib/redux";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  toggleDrawer: () => void;
}

const drawerWidth: number = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function AppBarComponent({ open, toggleDrawer }: AppBarProps) {
  const { usuario } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(userSlice.actions.logoutUser());
  };

  return (
    <AppBar position="absolute" open={open} toggleDrawer={toggleDrawer}>
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          SED - Sistema de Eleição de Diretores
        </Typography>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {usuario}
        </Typography>
        <IconButton onClick={() => handleOnClick()} color="inherit">
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
