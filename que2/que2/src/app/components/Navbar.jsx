"use client";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" component={Link} href="/learn">
          Learn
        </Button>
        <Button color="inherit" component={Link} href="/market">
          Market
        </Button>
        <Button color="inherit" component={Link} href="/learn/tools">
          Tools
        </Button>
        <Button color="inherit" component={Link} href="/market/compare">
          Compare
        </Button>
      </Toolbar>
    </AppBar>
  );
}
