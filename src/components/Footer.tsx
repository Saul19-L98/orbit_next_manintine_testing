import {createStyles,Grid,Container,Flex} from '@mantine/core';
import Image from 'next/image';
import {AiOutlinePhone,AiOutlineMail} from "react-icons/ai";
import {ImTwitter} from 'react-icons/im'
import {FaFacebookF,FaLinkedinIn} from "react-icons/fa";

const useStyles = createStyles((themes)=>({
    gridContainer:{
        color:'#fff',
    },
    links:{
        color:'#fab817',
        textDecoration: 'none',
        '&:hover':{
            textDecoration: 'underline',
        },
    },
    linksPolicy:{
        paddingTop: '1rem',
        color:'#fff',
        textDecoration: 'none',
        '&:hover':{
            textDecoration: 'underline',
        }
    },
    linksOrbit:{
        color:'#fab817',
        textDecoration:'none',
    },
    icons:{
        color:'#fab817',
    },
    iconsSocial:{
        color: '#fff',
        fontSize: '1.5rem',
    },
    title:{
        marginTop: '0'
    }
}));

const Footer = () => {
    const {classes} = useStyles();
    return(
        <Container bg={{base:'#0c2033'}} maw={{base:'100%'}}  p={{base:'3rem'}}>
            <Grid justify='center' gutter={30} className={classes.gridContainer}>
                <Grid.Col sm={12} md={3} order={1}>
                    <Flex direction='column'>
                        <Image 
                            src='/logo.svg'
                            alt="Logo image"
                            width={169}
                            height={41}
                            priority
                        />
                        <p>
                            Highly respected in the industry for our transparency and professionalism, we’ve earned the trust of our customers by ensuring they are treated with the utmost care and respect.
                        </p>
                    </Flex>
                </Grid.Col>
                <Grid.Col sm={12} md={3} order={2} >
                    <a href="#" className={classes.links}>Careers</a>
                </Grid.Col>
                <Grid.Col sm={12} md={3} order={3}>
                    <Flex direction='column'>
                        <h3 className={classes.title}>Contact Us</h3>
                        <p><a className={classes.icons}><AiOutlineMail /></a> info@cmimc.ca</p>
                        <p><a className={classes.icons}><AiOutlinePhone /></a> 1 (855) 234-9917</p>
                        <Flex gap={10}>
                            <a href="#" className={classes.iconsSocial}><FaFacebookF /></a>
                            <a href="#" className={classes.iconsSocial}><FaLinkedinIn /></a>
                            <a href="#" className={classes.iconsSocial}><ImTwitter /></a>
                        </Flex>
                    </Flex>
                </Grid.Col>
            </Grid>
            <Grid mx={{base:'auto'}} justify='center' gutter={2} className={classes.gridContainer}>
                <Grid.Col sm={12} md={6} order={1}>
                    <p>© 2023 Canadian Mortgages Inc . All Rights Reserved. Web Design by <span><a href="https://orbitweb.net/es" className={classes.linksOrbit}>OrbitWeb Inc.</a></span></p>
                </Grid.Col>
                <Grid.Col sm={12} md={3} order={2}>
                    <Flex direction={{base:'column',md:'row'}} gap={10}>
                        <a href="#" className={classes.linksPolicy}>
                            <small>Privacy Policy</small>
                        </a>
                        <a href="#" className={classes.linksPolicy}>
                            <small>Terms and Conditions</small>
                        </a>
                    </Flex>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default Footer;