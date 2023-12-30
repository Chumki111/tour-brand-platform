import { Box, Container, IconButton, Typography } from "@mui/material";

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";


const Footer = () => {

   
    return (
        <Box className="bg-black shadow-lg px-2 py-6">
            <Container>
            <Typography color='white' variant="h5" textAlign="center">
                    Contact Information
                    </Typography>
                    <Typography color='white' variant="body2" textAlign="center">
                    Email : chumkikhatun370@gmail.com
                    </Typography>
                    <Typography color='white' variant="body2" textAlign="center">
                    Phone : +880 1777-250277
                    </Typography>
                <Box className="w-full text-center" sx={{
                        '& svg': {
                            color: 'white'
                        }
                    }}>
                   <IconButton>
                            <Link to='https://www.facebook.com/profile.php?id=100093644379500'>
                            <FacebookIcon />
                            </Link>
                        </IconButton>
                        
                        <IconButton>
                           <Link to='https://github.com/Chumki111'>
                           <GitHubIcon/>
                           </Link>
                        </IconButton>
                        <IconButton>
                            
                            <Link to='https://www.linkedin.com/in/chumki-khatun-3083232a4'>
                            <LinkedInIcon />
                            </Link>
                        </IconButton>
                    
                </Box>

               

                    
                   
                    <Typography color='gray' variant="body2" textAlign="center">
                    @2023 Portfolio. Design by Chumki Khatun
                    </Typography>
            </Container>
        </Box>
    );
};

export default Footer;