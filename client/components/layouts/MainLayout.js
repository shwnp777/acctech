import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
// core components
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import styles from 'assets/jss/nextjs-material-kit/pages/mainLayout.js';

const useStyles = makeStyles(styles);

export default function MainLayout({ children }) {
	return <div className={classes.mainBg}>{children}</div>;
}
