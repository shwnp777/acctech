import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


import Pix from '../../../assets/img/logos/pic04.jpg';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({

a: {
    textDecoration: 'none',
    color: '#ffffff'
},
textColor: {
  color: '#ffffff',
  fontSize: '18px',
},
icons: {
    listStyleType: 'none'
},
svgs: {
    color: '#ffffff',
    fontSize: '44px'
},
  paper: {
    position: 'fixed',
    backgroundColor: '#183148',
    border: 'none',
    borderRadius: '10px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: '#ffffff',
    maxHeight: '800px',
    overflow: 'scroll',
    [theme.breakpoints.down('sm')]: {
        maxHeight: '500px',
        minWidth: '90%',
        display: 'block',
        margin: '0 auto'
    }
  },
  btnBG: {
      background: 'none',
      border: 'none',
      color: '#ffffff',
      fontSize: '1.2rem',
      height: '100%',
      minWidth: '100%',
      cursor: 'pointer',
      padding: '20px',
      '&:hover': {
          color: '#808080'
  }
},
image: {
    width: '100%',
  height: 'auto',
  padding: '5%'
},
img1: {
    width: '100%',
    display: 'block',
    margin: '0 auto',
    borderRadius: '5px',
    paddingBottom: '10px'
}
}));

export default function ContactModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen} className={classes.btnBG}>
        <PermContactCalendarIcon />
        <hr/>
        Contact
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
        
      >
        <div style={modalStyle} className={classes.paper} >
        <h2 className="major">Contact</h2>
          <span className="image main"><img src={Pix} alt="" className={classes.img1} /></span>
          <h2 className="major">Connect With Us!</h2>
          <ul className={classes.icons}>
            
            {/* <li><a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a></li> */}
            
            <li><a href="https://www.linkedin.com/company/accolade-technologies-llc/">
              <LinkedInIcon className={classes.svgs} />
            </a></li>
          </ul>

<h3 className={classes.textColor}>Office Address:</h3>
<p>Accolade Technologies, LLC<br />10810 Guilford Road, Suite 108<br />Annapolis Junction, MD 20701</p>
<hr />
<h3 className="page-title">Telephone:</h3>
<p>Office: 301-490-9213
<br/>
Fax: 301-490-9569</p>
<hr />
<h3 className="page-title">Electronic Mail:</h3>
<p className={classes.textColor}><a className={classes.textColor} href="mailto:information@accolade-llc.com">Send us messages at: information@accolade-llc.com</a><br /><a className={classes.textColor} href="mailto:careers@accolade-llc.com">Send us resumes at: careers@accolade-llc.com</a><br /><a className={classes.textColor} href="mailto:contracts@accolade-llc.com">Our contracts office is: contracts@accolade-llc.com</a><br /><a className={classes.textColor} href="mailto:support@accolade-llc.com">IT Support is: support@accolade-llc.com</a></p>
         
            <hr/>
            <button type="button" onClick={handleClose} className={classes.btnBG}>
        Close
      </button>
        </div>
      </Modal>
    </div>
  );
}