import { AppBar, Toolbar, Typography, Box, Button, Container } from "@mui/material";
import { useRouter } from 'next/router';

import Link from "next/link";

const Navigation = () => {
  const router = useRouter();

    const pages = ["home", "about", "reps", "agreements", "news"]
   


    return (
        <AppBar position="static">
        <Container>
          <Toolbar disableGutters sx={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
            <Typography variant="h6">SWWAMAL</Typography>
            <Box>
              {pages.map((page) => (
                <Link href={`${page === "home" ? "/" : `/${page}`}`} key={page}>
                  <Button sx={{
                    "&:hover": {
                      backgroundColor: "transparent"
                    },
                    borderBottom: router.pathname === (page === "home" ? "/" : `/${page}`) ? "1px solid red" : "none"

                    
                  }} color="inherit">{page}</Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    )
};

export default Navigation