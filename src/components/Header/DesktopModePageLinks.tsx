import { FC, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const pages = ["Products", "Pricing", "Blog"];

const DesktopModePageLinks: FC = () => {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const linkHandler = (url: string) => {
    setAnchorElNav(null);
    navigate(url);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          {page}
        </Button>
      ))}
      <Button
        sx={{ my: 2, color: "white", display: "block" }}
        onClick={linkHandler.bind(null, "/sample-post")}
      >
        Sample Post
      </Button>
    </Box>
  );
};

export default DesktopModePageLinks;
