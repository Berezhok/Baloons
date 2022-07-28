import React, { useEffect } from "react";
import "./style.css";
import balloonIco from "../img/balloonico.png";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";

export const Header = ({ basket, favorite, list, cost, setCost }) => {
  list.map((el) => {
    if (basket.includes(el._id)) {
      cost += el.price;
    }
  });

  useEffect(() => {
    setCost(cost);
  }, []);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "40ch",
        },
      },
    },
  }));

  return (
    <div>
      <div className="header">
        <div className="ico_and_name">
          <img src={balloonIco} className="balloon_ico"></img>
          <div className="sitename">МегаШарики</div>
        </div>
        <div className="search">
          <Search style={{ border: "1px solid" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Поиск…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </div>
        <div className="badger">
          {basket.length > 0 ? (
            <Badge badgeContent={basket.length} color="primary">
              <ShoppingBasketIcon color="black" />
            </Badge>
          ) : (
            <Badge badgeContent={"0"} color="primary">
              <ShoppingBasketIcon color="black" />
            </Badge>
          )}
          {cost ? <div>{cost}</div> : <div></div>}
        </div>
      </div>
    </div>
  );
};
