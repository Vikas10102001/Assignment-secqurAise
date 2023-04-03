import { Typography } from "@mui/material";
import React from "react";

export default function DetailTitle({ title }) {
  // console.log(title);
  return (
    <Typography variant="h5" sx={{ textAlign: "center" ,fontWeight:'700'}}>
      {title}
    </Typography>
  );
}
