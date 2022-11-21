import { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import UserMenu from "./UserMenu";
import SearchBar from "./SearchBar";
import LogoBadge from "./LogoBadge";
import AppDrawer from "./AppDrawer";
import DesktopModePageLinks from "./DesktopModePageLinks";

const Header: FC = () => {
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AppDrawer />
          <LogoBadge />
          <DesktopModePageLinks />
          <SearchBar />
          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
