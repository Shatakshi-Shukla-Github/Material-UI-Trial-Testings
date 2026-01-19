import Rating from "@mui/material/Rating";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
export default function RatingDemo() {
  const [score, setScore] = useState(3);
  const [volume, setVolume] = useState(22);
  const changeVolume = (e) => {
    setVolume(e.target.value);
  };
  return (
    <Box
      sx={{ border: "1px solid red", p: 6, width: 300, height: 400, margin: 0 }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <h1>Rating is:- {score}</h1>
      <Rating
        name="simple-controlled"
        value={score}
        onChange={(event, newValue) => {
          setScore(newValue);
        }}
      />

      <TextField
        id="outlined-basic"
        label="Cato Name"
        variant="outlined"
        placeholder="Mews"
      />
      <h2>Volume:- {volume}</h2>
      <Slider aria-label="Volume" value={volume} onChange={changeVolume} />
    </Box>
  );
}
