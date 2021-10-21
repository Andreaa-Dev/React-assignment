import React from "react";
import World from "./World";
import Title from "./Title";
import ExploreButton from "./ExploreButton";

/** @jsxImportSource @emotion/react */
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { css, keyframes } from "@emotion/react";
import { useTheme } from "@mui/material/styles";

const enter = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-150%);

  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
  `;
function LandingPage() {
  const theme = useTheme();
  const animatedEnter = css`
    animation: ${enter} 3000ms ${theme.transitions.easing.easeInOut};
  `;

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
        <World />

        <Box
          sx={{
            marginTop: 25,
            marginLeft: 5,
          }}
          css={animatedEnter}
        >
          {/* <Title /> */}
          <Typography
            variant="h4"
            style={{ marginTop: "10px", fontWeight: "bold" }}
          >
            EXPLORE THE WORLD
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ marginTop: "20px", marginRight: "50px" }}
          >
            The love of one's country is a splendid thing. But why should love
            stop at the border?
          </Typography>
          <ExploreButton />
        </Box>
      </Box>
    </div>
  );
}

export default LandingPage;
