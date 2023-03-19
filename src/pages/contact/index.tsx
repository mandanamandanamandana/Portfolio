import Navbar from "../../../components/navigation/Navbar";
import classes from "./contact.module.css";
import Card from "../../../components/card/card";
import {MdEmail} from 'react-icons/md';
import {VscGithub} from 'react-icons/vsc';

const contact = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.main}>
        <div className={classes.contact}>
          <p>
            Ways to reach me: 
          </p>

          <p><MdEmail style={{fontSize:'2rem', marginBottom:'-.65rem'}}/> mandy7373@gmail.com 
           <VscGithub style={{fontSize:'1.75rem', marginBottom:'-.65rem', marginLeft:'1rem'}}/> <a href='https://github.com/mandanamandanamandana' target='_blank'>/mandanamandanamandana</a></p>
          </div>
      </div>
    </div>
  );
};

export default contact;
