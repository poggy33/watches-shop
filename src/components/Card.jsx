import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";


const CardButton = styled(Button)(() => ({
  padding: "8px 8x 8px 8px",
  backgroundColor: "rgb(14,23,36)",
  marginTop: "30px",
  "&:hover": {
    backgroundColor: "rgba(14, 23, 36, 0.77)",
  },
}));

export default function Card({ cardInfo, setCart, cart }) {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (Object.keys(cardInfo).length === 0 && cardInfo.constructor === Object) {
  //     navigate("/");
  //   }
  // }, [cardInfo]);

  const addToCart = () => {
    let count = 0;
    if (cart.length === 0) {
      setCart((prev) => prev.concat(cardInfo));
    } else {
      cart.map((item) => {
        if (item.id === cardInfo.id) {
          count++;
        }
        return count;
      });
      if (count === 0) {
        setCart((prev) => prev.concat(cardInfo));
      }
    } 
  };

  return (
    <Box
      sx={{
        margin: "60px 30px 30px 30px",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ minHeight: "350px" }}>
        <img
          alt={cardInfo.title}
          src={cardInfo.img}
          style={{ width: "350px" }}
        ></img>
      </Box>

      <Box sx={{ marginTop: "50px", marginLeft: "40px" }}>
        <Typography variant="h5">{cardInfo.title}</Typography>
        <Typography sx={{ marginTop: "10px" }}>
          model: {cardInfo.model}
        </Typography>
        <Typography sx={{ marginTop: "10px" }}>{cardInfo.desc}</Typography>
        <Typography
          variant="h6"
          sx={{ marginTop: "10px", color: "red", fontStyle: "italic" }}
        >
          ${cardInfo.price}
        </Typography>
        <Box display="flex">
          <Typography variant="h6" sx={{ paddingTop: "3px" }}>
            Quantity:
          </Typography>
          <TextField
            id="outlined-number"
            size="small"
            type="number"
            sx={{ width: "50px", marginLeft: "10px" }}
            value={1}
          />
        </Box>
        <CardButton
          variant="contained"
          onClick={() => {
            addToCart();
            navigate("/cart");
          }}
        >
          Add to Cart
        </CardButton>
        <CardButton
          variant="contained"
          sx={{ marginLeft: "20px" }}
          onClick={() => navigate("/")}
        >
          continue shopping
        </CardButton>
      </Box>
    </Box>
  );
}
