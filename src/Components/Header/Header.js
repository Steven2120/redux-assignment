import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const user = useSelector((state) => state.user);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">My Music Store 1</Link>
        </Typography>
        {user ? (
          <Typography component="p" sx={{ flexGrow: 1 }}>
            Welcome back, {user.name}!
          </Typography>
        ) : (
          <Link to="/login">
            <Button color="inherit">Login</Button>
          </Link>
        )}
        <Link to="/cart">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <ShoppingCartIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
