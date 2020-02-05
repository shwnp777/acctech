import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import ExtensionIcon from '@material-ui/icons/Extension';


import Pix from '../../../assets/img/logos/pic02.jpg';

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

export default function SolutionsModal() {
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
        <ExtensionIcon />
        <hr/>
        Solutions
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
        
      >
        <div style={modalStyle} className={classes.paper} >
        <h2 className="major">Solutions</h2>
          <span className="image main"><img src={Pix} alt="" className={classes.img1} /></span>
          




          <h3>Customer Solutions</h3> 
<p>At Accolade we are professional problems solvers. The first step in solving a problem is knowing the problem. Listening to customers like you. Seeing your requirements from your perspective. Demonstrating that we've assisted other customers with similar 'unique' challenges before. It all starts with listening and ends with meeting your needs. No challenge is too large or too small because when it is your system it is always a big deal. Our pledge is that we will be there with you through the entire process from initial talks to successful completion.</p>

<p>Our technical engineers have designed, implemented, migrated and supported single stand-alone servers with a few users or multiple domain enterprise systems that consist of hundreds of systems and 10's of thousands of users. Our many years of experience in these customer spaces make us uniquely qualified to be able to sit down and understand your needs based on more than just following industry best practices. We have the experience to know how those best practices can be best utilized in your distinctive environment.</p>


<h3>Capabilities</h3>
<h4>Cybersecurity Technology</h4>
<p>Our customers have unique needs and therefore require innovative solutions to ensure confidentiality, integrity and credibility. We at Accolade Technologies specialize in supporting the intelligence and defense communities by offering sophisticated technical and analytical expertise, mission understanding and past performance needed to bring success to any project. Our proactive and streamlined approach to cyber technology enables the delivery of mission critical solutions at mission speed. Accolade's core capabilities in Cyber Technology include:
</p>

<ul >
<li >Network Security &amp; Analysis System (IS) Development</li>
<li >Information Assurance (IA)</li>
<li >Network Design &amp; Architecture</li>
<li >IT Security Specialist</li>
<li >Cyber monitoring, and Cyber Incident Response and Documentation</li>
<li >Cloud Technology</li>
</ul>

<h4>Signal And Target Analysis</h4>

<p>The Accolade team offers a broad range of complex Signal and Target Intelligence capabilities including signal and Target, detection, processing, recognition, tracking, and analysis. Our Engineers set the standard for innovative solutions to the most demanding challenges in today's environment. We support the needs for both real-time, operationally critical processing and analysis as well as off line, in-depth analysis demanding domain knowledge. Our solutions are implemented in C, C++, Java and are deployed on many processors from Linux to Compaq/HP UNIX servers. The scope of Accolade's Signals and Target services encompasses:</p>

<ul >
<li >Signals Collection &amp; Processing, Detect, Track, Identify, and Evaluate</li>
<li >TECHELINT &amp; COMINT Analysis &amp; Processing</li>
<li >TECHSIGINT</li>
<li >Unmanned Aerial Systems</li>
</ul>


<h4>SETA</h4>

<p>Accolade's SETA professionals are well versed in government acquisition, systems engineering, and contracting with the full range of skills necessary to address any Department of Defense (DoD) project, program and portfolio activities across all program level designations (e.g., Major Systems Acquisition, Tiered Program designated, QRC). We assist our customers in articulating requirements, performing design activities, in support of DOD 5000 and Policy 8 1,2.</p>

<ul class="page-title">
<li class="page-title">Decades of experience in strategic planning, project / program / portfolio management, managing defense contracts, and successfully supporting the full acquisition lifecycle of activities</li>
<li class="page-title">ODNI, IC, DoD and civil service experience</li>
<li class="page-title">In-Depth experience in developed and implementing Capabilities Based process frameworks to link strategy, capability gaps, resource investment, and acquisition efforts</li>
<li class="page-title"></li>
</ul>

<h4>
Business Consulting</h4> 

<p>Accolade Technologies has a broad portfolio in Program Management, Acquisition Management, Technology and Logistics Management, Systems Engineering, Network Design and Management, Software Consulting Services and Implementation Consulting. We serve both the Government and Commercial marketplaces; specializing in the Federal Government and the Intelligence Community consulting. As part of our business consulting services, we support training development, and developed training concepts and training programs utilizing critical thinking techniques. Accolade's Business Consulting solutions are offered in these core capabilities:</p>

<ul>
    <li>
    Program Management
    </li>
    <li>
    Training
    </li>
</ul>



<h4>Information Technology</h4>
<p>Accolade Technologies understands technology innovation and delivers leading edge Information Technology (IT) support to include design, testing, and implementation of state-of-the art secure operating systems, for wide area and local area network products/services. We also conduct risk assessments and provides recommendations for systems security design and product procurement. Accolade Technologies is expert in security issues including architectures, firewalls, electronic data traffic, and network access review, consolidation and implementation. We conduct vulnerability analysis of various security technologies and IT security research, as the job requests and as the product life cycle predicts. Accolade understands technology innovation and its application in the unique missions of our intelligence and defense customers and specializes in these core capabilities:</p>

<ul >
<li >IT Infrastructure Services</li>
<li >System/Software Engineering</li>
<li >Software /Hardware Integration &amp; Testing</li>
<li >System Deployments &amp; QRC</li>
<li >Configuration Management (CM)</li>
<li >System Administration</li>
</ul>






















         
            <hr/>
            <button type="button" onClick={handleClose} className={classes.btnBG}>
        Close
            </button>
        </div>
      </Modal>
    </div>
  );
}