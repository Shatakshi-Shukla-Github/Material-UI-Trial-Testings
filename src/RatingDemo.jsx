import Rating from "@mui/material/Rating";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
export default function RatingDemo() {
  const [score, setScore] = useState(3);
  const [volume, setVolume] = useState(22);
  const changeVolume = (e) => {
    setVolume(e.target.value);
  };
  return (
    <div>
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
      <h2>{}</h2>
      <Slider aria-label="Volume" value={volume} onChange={changeVolume} />
    </div>
  );
}
