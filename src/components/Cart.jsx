import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const CardButton = styled(Button)(() => ({
  padding: "8px 8x 8px 8px",
  backgroundColor: "rgb(14,23,36)",
  marginTop: "30px",
  "&:hover": {
    backgroundColor: "rgba(14, 23, 36, 0.77)",
  },
}));

export default function Cart({ cart, setCart }) {
  const navigate = useNavigate();
  const [summary, setSummary] = useState(0);
  console.log(cart)

  useEffect(() => {
    if (cart.length > 0) {
      let count = 0;
      cart.map((item) => {
        count += item.price * item.countSale;
        //????
        return item;
      });
      setSummary(count);
    }
  }, [cart, cart.length]);

  const removeItem = (id) => {
    cart.map((item)=>{
      if(item.id===id){
        item.countSale=1
      }
      return id;
    })
    let newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const newCartItems = (count, id) => {
    const newCart = [];
    cart.map((item) => {
      if (item.id === id) {
        item.countSale = Number(count);
      }
      newCart.push(item);
      //????
      return id;
    });
    setCart(newCart);
  };

  return (
    <Box sx={{ margin: "30px" }}>
      <Box
        sx={{
          width: "100%",
          height: "35px",
          backgroundColor: "black",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" sx={{ color: "white" }}>
          Your Shopping Cart
        </Typography>
      </Box>
      {cart.length === 0 ? (
        <Box>
          <Typography variant="h5" sx={{ fontStyle: "italic" }}>
            You have no items in your shopping cart.
          </Typography>
          <Typography variant="h5" sx={{ fontStyle: "italic" }}>
            Click{" "}
            <Box
              component="span"
              m="{1}"
              sx={{ cursor: "pointer", color: "blue", fontStyle: "italic" }}
              onClick={() => navigate("/")}
            >
              here
            </Box>{" "}
            to continue shopping.
          </Typography>
        </Box>
      ) : null}
      <Grid container>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "350px",
            paddingRight: "20px",
          }}
          xs={12}
          sm={12}
          md={8}
          lg={8}
        >
          {cart.map((cartItem) => {
            return (
              <Box
                sx={{ display: "flex", borderBottom: "0.5px solid lightgrey" }}
              >
                <Box sx={{ margin: "10px" }}>
                  <img
                    alt={cartItem.title}
                    src={cartItem.img}
                    style={{ width: "100px" }}
                  ></img>
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{ marginTop: "20px", marginLeft: "10px", width: "70%" }}
                >
                  {cartItem.desc}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ marginTop: "20px", marginLeft: "10px", width: "70px" }}
                >
                  ${cartItem.price}
                </Typography>
                <TextField
                  id="outlined-number"
                  size="small"
                  type="number"
                  sx={{ width: "70px", marginTop: "20px", marginLeft: "10px" }}
                  InputProps={{ inputProps: { min: 1 } }}
                  defaultValue={cartItem.countSale}
                  onChange={(e) => newCartItems(e.target.value, cartItem.id)}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      marginTop: "21px",
                      marginLeft: "10px",
                      width: "90px",
                    }}
                  >
                    ${cartItem.price * cartItem.countSale}
                  </Typography>
                  <DeleteForeverOutlinedIcon
                    fontSize="large"
                    sx={{
                      marginLeft: "20px",
                      marginBottom: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => removeItem(cartItem.id)}
                  ></DeleteForeverOutlinedIcon>
                </Box>
              </Box>
            );
          })}
          {cart.length > 0 ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <CardButton variant="contained" onClick={() => navigate("/")}>
                continue shopping
              </CardButton>
            </Box>
          ) : null}
        </Grid>
        {cart.length > 0 ? (
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            sx={{
              padding: "20px",
              backgroundColor: "#F8F8FF",
              maxHeight: "220px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h6"
                sx={{
                  borderBottom: "0.5px solid lightgrey",
                  marginBottom: "20px",
                }}
              >
                Summary: ${summary}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  borderBottom: "0.5px solid lightgrey",
                  marginBottom: "20px",
                }}
              >
                Subtotal: ${summary}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CardButton variant="contained">Proceed to checkout</CardButton>
              </Box>
            </Box>
          </Grid>
        ) : null}
      </Grid>
    </Box>
  );
}
