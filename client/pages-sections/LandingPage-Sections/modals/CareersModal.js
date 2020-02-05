import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import WorkIcon from '@material-ui/icons/Work';


import Pix from '../../../assets/img/logos/pic03.jpg';

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
  button: {
   
    marginBottom: '20px',
    '&:hover': {
      color: '#ffffff'
    }
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
  textColor: {
    color: '#ffffff',
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center'
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

export default function CorporateModal() {
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
        <WorkIcon />
        <hr/>
        Careers
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
        
      >
        <div style={modalStyle} className={classes.paper} >
        <h2 className="major">Careers</h2>
          <span className="image main"><img src={Pix} alt="" className={classes.img1} /></span>
          <h3>Positions</h3>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<SearchIcon />}
            href="https://www.accolade-llc.com/positions.shtml"
          >
            Browse Openings
          </Button>

            
          
            <p>Accolade Technologies, LLC was founded with the vision of providing exceptional service to both the DoD and Intelligence Community. We bring over six years of Government and Industry experience to our customers. Accolade Technologies has extensive experience with providing skilled personnel and solutions to the community. Our goal is to be recognized as an end-to-end solutions provider focused on strengthening this Country's ability to aggressively defend and protect against the enemy by providing support services and leading edge solutions. </p>
            
            <p>Accolade Technologies employees work closed with esteemed customers to develop solutions that allow them to carry out high-stakes national security missions. This position provides an opportunity to further advance cutting-edge technology that supports some of our nations core defense-intelligence services and systems.</p>
            <hr/>
            <button type="button" onClick={handleClose} className={classes.btnBG}>
        Close
      </button>
        </div>
      </Modal>
    </div>
  );
}