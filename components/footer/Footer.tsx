import classes from './Footer.module.css';
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
    return(
        <div className={classes.footer}>
            <div className={classes.iconList}>

                {/* Github Link */}
                <Link 
                    href='https://github.com/mandanamandanamandana'
                    target='_blank'>
                    <AiFillGithub
                        style={{
                            color:'white',
                            cursor:'pointer'
                        }}
                    />
                </Link>

                {/* LinkedIn Link */}
                <Link 
                    href='https://www.linkedin.com/in/mandana-yousefi-ghadim/'
                    target='_blank'>
                <AiFillLinkedin
                    style={{
                        color:'white',
                        cursor:'pointer'
                    }}
                />
                </Link>

                <AiOutlineMail
                    style={{
                        color:'white'
                    }}
                />
                <p className={classes.designerTag}>
                    <span className={classes.mandana}>Mandana </span>
                  ™  {' '}
                    <span className={classes.tmYear}> 2023</span>
                </p>
                </div>
        </div>
    )
}

export default Footer;