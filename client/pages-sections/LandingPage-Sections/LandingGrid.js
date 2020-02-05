import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Equalizer from "@material-ui/icons/Equalizer";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Paper from '@material-ui/core/Paper';

import AboutModal from '../LandingPage-Sections/modals/AboutModal.js';
import CareersModal from '../LandingPage-Sections/modals/CareersModal.js';
import ContactModal from '../LandingPage-Sections/modals/ContactModal.js'
import SolutionsModal from '../LandingPage-Sections/modals/SolutionsModal.js'


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(160),
        height: theme.spacing(16),
      },
      paddingTop: '50px',
      [theme.breakpoints.down('xs')]: {
        paddingTop: '0px',
        
      }
    },
    bgPaper: {
        backgroundColor: 'rgba(52, 120, 183, .20)',
        color: '#ffffff'
    },

    gridBG: {
        marginBottom: '20px',
        [theme.breakpoints.down('xs')]: {
            padding: '10px'
          }
    }
   
  }));

export default function LandingGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridContainer className={classes.bottom}>
        <GridItem xs={6} sm={3} className={classes.gridBG}>
        <Paper elevation={3} className={classes.bgPaper}>
        <AboutModal />
        </Paper>
        </GridItem>
      
      
        <GridItem xs={6} sm={3} className={classes.gridBG}>
        <Paper elevation={3} className={classes.bgPaper}>
        <CareersModal />
        </Paper>
        </GridItem>
      
      
        <GridItem xs={6} sm={3} className={classes.gridBG}>
        <Paper elevation={3} className={classes.bgPaper}>
        <SolutionsModal />
        </Paper>
        </GridItem>
      
      
        <GridItem xs={6} sm={3} className={classes.gridBG}>
        <Paper elevation={3} className={classes.bgPaper}>
        <ContactModal />
        </Paper>
        </GridItem>
      </GridContainer>
    </div>
  );
}