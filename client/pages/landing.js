import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components

import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import { container, title } from 'assets/jss/nextjs-material-kit.js';
import Background from '../assets/img/logos/space.jpg';

import HeaderLinks from 'components/Header/HeaderLinks.js';



// Sections for this page
import LandingGrid from '../pages-sections/LandingPage-Sections/LandingGrid';

const dashboardRoutes = [];

const useStyles = makeStyles(theme => ({
	header: {
		backgroundImage: `url(${Background})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		height: '100vh',
		textAlign: 'center'
	},
	backgroundColors:{
		backgroundColor: '#1b1f3a',
	},
	container: {
		paddingTop: '20%',
		color: '#ffffff',
		...container,
		[theme.breakpoints.down('xs')]: {
			paddingTop: '25%'
		  }
	},
	title: {
		...title,
		display: 'inline-block',
		position: 'relative',
		marginTop: '30px',
		minHeight: '32px',
		color: '#FFFFFF',
		textDecoration: 'none',
		[theme.breakpoints.down('sm')]: {
			fontSize: '36px'
		  }
	},
	subtitle: {
		fontSize: '1.313rem',
		maxWidth: '500px',
		margin: '10px auto 0',
		color: '#ffffff'
	},
	main: {
		background: '#1b1f3a',
		position: 'relative',
		zIndex: '3'
	},
	mainRaised: {
		margin: '-60px 30px 0px',
		borderRadius: '6px',
		boxShadow:
			'0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
	}
}));

export default function LandingPage(props) {
	const classes = useStyles();
	const { ...rest } = props;
	return (
		<div>
			
			<Header
				color='transparent'
				routes={dashboardRoutes}
				brand='Sifted Truth'
				rightLinks={<HeaderLinks />}
				fixed
				changeColorOnScroll={{
          height: 400,
          color: "dark"
        }}
        {...rest}
			/>
			<div className={classes.header}>
			
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12} sm={12} md={12}>
							<h1 className={classes.title}>Accolade Technologies, LLC</h1>
							<h4>
							Providing Services and End-to End Solutions in order to support the DOD and Intelligence Communities
							</h4>
							<br />
						</GridItem>
					</GridContainer>
					<LandingGrid />
				</div>
			</div>
			<div className={classes.backgroundColors}>
			<Footer />
			</div>
		</div>
	);
}
