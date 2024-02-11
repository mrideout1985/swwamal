import { AppBar, Toolbar, Typography, Box, Button, Container } from "@mui/material";
import { useRouter } from 'next/router';
import CWU from "../icons/cwu-logo.svg";

import Link from "next/link";
import { useMedia } from "react-use";

const MobileNav = () => {
  return(
     <div>MobileNav</div>
  )
}

const DesktopNav = ({pages}: {pages: string[]}) => {
  const router = useRouter();
  
  return (
    <AppBar position="static">
        <Container>
          <Toolbar disableGutters sx={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
             <CWU width="100px"/>
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
}

const Navigation = () => {
  const isWide = useMedia("(min-width: 600px)", false)
  const pages = ["home", "about", "reps", "agreements", "news"]
   
    return (
        <>
        {isWide ? <DesktopNav pages={pages} /> : <MobileNav />}
        </>
    )
};

export default Navigation