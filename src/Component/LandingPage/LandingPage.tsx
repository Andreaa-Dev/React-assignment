import React from "react";
import World from "./World";
import Title from "./Title";
import ExploreButton from "./ExploreButton";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Margin } from "@mui/icons-material";

function LandingPage() {
  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          p: 1,
          bgcolor: "background.paper",
        }}
      >
        <Box
          sx={{
            marginTop: 25,
            marginLeft: 5,
          }}
        >
          <Title />
          <Typography variant="subtitle1">
            The love of one's country is a splendid thing. But why should love
            stop at the border?
          </Typography>
          <ExploreButton />
        </Box>

        <World />
      </Box>
    </div>
  );
}

export default LandingPage;
