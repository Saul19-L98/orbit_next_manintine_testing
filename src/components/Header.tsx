import {AiOutlinePhone} from "react-icons/ai";
import {FiFacebook,FiTwitter} from "react-icons/fi";
import {CiLinkedin} from "react-icons/ci";
import {createStyles} from "@mantine/core";

const useStyles = createStyles((theme) => ({
    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '0 2rem',
        fontSize: '1.2rem',
        backgroundColor: "#0c2033",
    },
    tag:{
        color: '#fff',
        textDecoration: 'none',
        borderTop: '2px solid #fab817',
    },
    socialIcons: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    socialIcon: {
        marginLeft: theme.spacing.md,
        cursor: 'pointer',
        fontSize: '1.5rem',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#fab817',
        }
    },
}));

function Header(){
    const { classes } = useStyles();
    return(
        <div className={classes.header}>
            <a href="" className={classes.tag}>MCI FUNDS</a>
            <div className={classes.socialIcons}>
                <div>
                    <a href="#" className={classes.socialIcon} >
                        <AiOutlinePhone />
                    </a>
                </div>
                <div>
                    <a href="#" className={classes.socialIcon} >
                        <FiFacebook />
                    </a>
                </div>
                <div>
                    <a href="#" className={classes.socialIcon} >
                        <FiTwitter />
                    </a>
                </div>
                <div>
                    <a href="#" className={`${classes.socialIcon} `} >
                        <CiLinkedin />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;