import * as React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
// import { itemData } from "../data";
import { useNavigate } from "react-router-dom";

const CardButton = styled(Button)(() => ({
  padding: "8px 8x 8px 8px",
  backgroundColor: "rgb(14,23,36)",
  "&:hover": {
    backgroundColor: "rgba(14, 23, 36, 0.77)",
  },
}));

const MyFavoriteIcon = styled(FavoriteIcon)(() => ({
  marginTop: "7px",
  marginRight: "40px",
  color: "rgba(220, 20, 60, 0.44)",
  "&:hover": {
    color: "rgb(220, 20, 60)",
  },
}));

export default function MasonryImageList({ setCardInfo, watches, setCart, cart, cardInfo }) {
  const navigate = useNavigate();

  const addToCart = (watchInfo) => {
    let count = 0;
    if (cart.length === 0) {
      setCart((prev) => prev.concat(watchInfo));
    } else {
      cart.map((item) => {
        if (item.id === watchInfo.id) {
          count++;
        }
        return count;
      });
      if (count === 0) {
        setCart((prev) => prev.concat(watchInfo));
      }
    } 
  };


  return (
    <Container sx={{ marginTop: "20px" }}>
      <Box>
        <Box
          sx={{
            backgroundColor: "rgb(14,23,36)",
            width: "300px",
            marginTop: "30px",
            marginBottom: "30px",
          }}
          display="flex"
        >
          <video
            src="/videos/video_watches_1.mp4"
            autoPlay
            loop
            muted
            style={{ height: "80px" }}
          />
          <Typography
            variant="h6"
            align="center"
            sx={{
              fontFamily: "PT Sans",
              color: "white",
              paddingTop: "9px",
              textShadow: "1px 1px #558ABB",
            }}
          >
            Waiting for their owners ...
          </Typography>
        </Box>
        {watches.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "120px auto",
            }}
          >
            <CircularProgress size={100} />
            <Typography
              variant="h4"
              sx={{ marginLeft: "50px", marginTop: "28px" }}
            >
              Loading...
            </Typography>
          </Box>
        ) : null}

        {watches ? (
          <Grid container>
            {watches.map((item) => (
              <Grid
                item
                key={item.img}
                lg={3}
                md={4}
                sm={6}
                xs={12}
                align="center"
                sx={{
                  "&:hover": {
                    border: "0.5px solid lightGrey",
                  }, border: "0.5px solid white"
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  onClick={() => {
                    setCardInfo(item);
                    navigate("/card");
                  }}
                  style={{ cursor: "pointer", width: "220px" }}
                />
                <Typography
                  variant="h5"
                  align="left"
                  sx={{
                    marginLeft: "20px",
                    fontFamily: "PT Sans",
                    fontSize: "1.8rem",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "grey",
                    marginLeft: "20px",
                    fontSize: "1rem",
                    height: "60px",
                  }}
                  align="left"
                >
                  {item.desc}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    marginLeft: "20px",
                    fontFamily: "PT Sans",
                    fontSize: "1.4rem",
                  }}
                  align="left"
                >
                  Price: ${item.price}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px",
                  }}
                >
                  <CardButton
                    onClick={() => {
                      addToCart(item)
                      navigate("/cart");
                    }}
                    variant="contained"
                  >
                    Add To Cart
                  </CardButton>
                  <MyFavoriteIcon />
                </Box>
              </Grid>
            ))}
          </Grid>
        ) : null}
      </Box>
    </Container>
  );
}
