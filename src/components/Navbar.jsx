import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const CheckboxMen = () => {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
            sx={{
              color: "white",
              "&.Mui-checked": {
                color: "white",
              },
            }}
          />
        }
        label="Men's"
      />
    </FormGroup>
  );
};

const CheckboxWomen = () => {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
            sx={{
              color: "white",
              "&.Mui-checked": {
                color: "white",
              },
            }}
          />
        }
        label="Women's"
      />
    </FormGroup>
  );
};

const ButtonSearch = () => {
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="outlined"
        sx={{ color: "white", borderColor: "white", marginLeft: "10px" }}
      >
        Go
      </Button>
    </Stack>
  );
};

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "14ch",
    [theme.breakpoints.up("sm")]: {
      width: "14ch",
      "&:focus": {
        width: "14ch",
      },
    },
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "25ch",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const logout = async () => {
    await signOut(auth);
};

export default function ButtonAppBar({ user }) {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "rgb(14,23,36)" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: "10px", fontFamily: "Bree Serif", textShadow:'1px 1px #558ABB', cursor:'pointer' }}
            onClick={()=>navigate('/')}
          >
            WatchesForYou
          </Typography>
          {user ? (
            <Typography variant="subtitle2" sx={{color:'red', fontStyle:'italic'}}>{user.email}</Typography>
          ) : null}
          {user ? (
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          ) : null}
          {!user ? (
            <Button color="inherit" onClick={() => navigate("/login")}>
              Login
            </Button>
          ) : null}
          {!user ? (
            <Button color="inherit" onClick={() => navigate("/register")}>
              Sign up
            </Button>
          ) : null}
          <ShoppingCartOutlinedIcon onClick={()=>navigate('/cart')} sx={{ marginLeft: "10px", cursor:'pointer' }} />
        </Toolbar>
        <Toolbar
          display="flex"
          sx={{ justifyContent: "space-between", flexWrap: "wrap" }}
        >
          <Box display="flex" sx={{ marginBottom: "20px" }}>
            <CheckboxMen />
            <CheckboxWomen />
          </Box>
          <Box display="flex" sx={{ marginBottom: "20px" }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search by brand"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <ButtonSearch />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
