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
        <Container >
          <Toolbar  variant="regular"  sx={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end", paddingBottom: "2px"}}>
             <Box mt={1}>
              <CWU width="150px" />
             </Box>
            <Box>
              {pages.map((page) => (
                <Link href={`${page === "home" ? "/" : `/${page}`}`} key={page}>
                  <Button disableRipple sx={{
                     padding: "0 1rem",
                     borderRadius: "0",
                    "&:hover": {
                      backgroundColor: "transparent"
                    },
                    boxShadow: router.pathname === (page === "home" ? "/" : `/${page}`) ? "0px 2px #cf0e68ff" : "none"

                    
                  }} variant="text" color="secondary">{page}</Button>
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