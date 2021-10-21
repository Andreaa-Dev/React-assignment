import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { makeStyles } from "@material-ui/core/styles";

type ColorType = {
  favIcon: "action" | "success";
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1rem",
  },

  icon: {
    marginLeft: "1rem",
  },
}));

function More() {
  const classes = useStyles();

  const [iconColor, setIconColor] = useState<ColorType>({
    favIcon: "action",
  });

  const [count, setCount] = useState<number>(0);

  const onClickHandler = () => {
    setIconColor({
      favIcon: iconColor.favIcon === "action" ? "success" : "action",
    });

    let result = count + 1;
    console.log(result, "re");

    let rel = setCount(result);
    console.log(rel, "r");
  };

  return (
    <div>
      <FavoriteIcon
        sx={{ marginRight: "10px" }}
        className={classes.icon}
        onClick={onClickHandler}
        id="favIcon"
        color={iconColor.favIcon}
      />
      <DoubleArrowIcon />
    </div>
  );
}

export default More;
