import * as React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Box, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const MyBoxContainer = styled(Box)(() => ({
  marginTop: "75px",
}));

export default function FullWidthGrid() {
  return (
    <Box>
      <MyBoxContainer>
        <Box sx={{ backgroundColor: "rgb(14,23,36)", color: "#fff" }}>
          <Grid container spacing={3} sx={{ padding: "10px 20px 20px 40px" }}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Typography variant="h6" align="left" textTransform="uppercase">
                Company information
              </Typography>
              <Box align="left">
                <Typography mt={1}>How to help</Typography>
                <Typography mt={1}>Privacy & Policy</Typography>
                <Typography mt={1}>Terms & Condition</Typography>
              </Box>
              <Box mt={2}>
                <FacebookIcon sx={{ marginRight: "15px" }}></FacebookIcon>
                <TwitterIcon sx={{ marginRight: "15px" }}></TwitterIcon>
                <InstagramIcon></InstagramIcon>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Typography variant="h6" align="left" textTransform="uppercase">
                Policies & order
              </Typography>
              <Box align="left">
                <Typography mt={1}>How to help</Typography>
                <Typography mt={1}>Privacy & Policy</Typography>
                <Typography mt={1}>Terms & Condition</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Typography variant="h6" align="left" textTransform="uppercase">
                <Typography variant="span">Why shop with us</Typography>
              </Typography>
              <Box align="left">
                <Typography mt={1}>How to help</Typography>
                <Typography mt={1}>Privacy & Policy</Typography>
                <Typography mt={1}>Terms & Condition</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </MyBoxContainer>
    </Box>
  );
}
