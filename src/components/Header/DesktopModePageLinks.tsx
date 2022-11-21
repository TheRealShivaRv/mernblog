import { FC, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import HeaderLinks from "./HeaderLinks";
import { HeaderLink } from "../../declarations";

const DesktopModePageLinks: FC = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const linkHandler = (url: string) => {
    setAnchorElNav(null);
    navigate(url);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {HeaderLinks.map((item: HeaderLink) => (
        <Button
          key={item.id}
          sx={{ my: 2, color: "white", display: "block" }}
          onClick={linkHandler.bind(null, item.link)}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
};

export default DesktopModePageLinks;
