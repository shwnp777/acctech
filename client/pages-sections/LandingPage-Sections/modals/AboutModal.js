import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ApartmentIcon from '@material-ui/icons/Apartment';


import Pix from '../../../assets/img/logos/pic01.jpg';
import SDVOSB from '../../../assets/img/logos/SDVOSB.png';

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
sdvosbDiv: {
  width: '100%',
  dtextAlign: 'center',
  '& img': {
    width: '100px',
    display: 'block',
    margin: '0 auto'
  }
},
img1: {
    width: '100%',
    display: 'block',
    margin: '0 auto',
    borderRadius: '5px',
    paddingBottom: '10px'
}
}));

export default function AboutModal() {
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
        <ApartmentIcon />
        <hr/>
        About Us
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
        
      >
        <div style={modalStyle} className={classes.paper} >
        <h2 className="major">About Us</h2>
          <span className="image main"><img src={Pix} alt="" className={classes.img1} /></span>
          <div className={classes.sdvosbDiv} >
            <img src={SDVOSB} alt="Disabiled Veteran Business Logo"/>
          </div>
          <h3 className="major">We Are:</h3>
          <p>Accolade Technologies, LLC established in 2014, is a Service-Disabled Veteran Owned Small Business (SDVOSB) with a focus on providing technical, analytic, and engineering services, intelligence support, program management support, acquisition support, and other professional services to the Intelligence Community, employing quality, dedicated, highly technical individuals to provide innovative solutions to meet our customers' needs. We specialize in challenging areas including high performance computing, testing, consulting, in addition to traditional disciplines such as acquisition and business management support.</p>
          <p>

We at Accolade are passionate about exceeding expectations at every level. Our company's staff have over 100 years of professional experience in software, hardware and system engineering and over 60 years of experience in service delivery. Our competencies enable us to have a true understanding of the goals and needs of our customers and their missions. We perform critical consulting services on a variety of operations and support projects for the defense communities.</p>
<h3>Corporate Registrations:</h3>
            <ul>
            <li>
            Registered with the DoD Office of Small Business Programs (OSBP) as a Small Business (SB)</li>
            <li>
            Registered with the Defense Logistics Agency as a Commercial and Government Entity (CAGE): 6YW48</li>
            <li>
            Registered with the U.S. Government's System for Award Management (SAM) to contract with the U.S. Federal Government</li>
            <li>
            Registered with D&B: DUNS 079083372</li>
            <li>
            Contract & Financial Mail</li>
            </ul>
          <br/>
            <hr/>
            <button type="button" onClick={handleClose} className={classes.btnBG}>
        Close
      </button>
        </div>
      </Modal>
    </div>
  );
}