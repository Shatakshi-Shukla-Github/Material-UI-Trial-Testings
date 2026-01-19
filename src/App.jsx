// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AlarmIcon from "@mui/icons-material/Alarm";
import Fingerprint from "@mui/icons-material/Fingerprint";
import "./App.css";
import RatingDemo from "./RatingDemo";

function App() {
  return (
    <>
      {/* <Button color="success" variant="contained" size="small">
        Contained
      </Button>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton aria-label="fingerprint" color="success">
        <Fingerprint />
      </IconButton> */}

      <RatingDemo />
    </>
  );
}

export default App;
