import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from 'components/CustomButtons/Button.js';
import LoginComponent from './Login';

import styles from 'assets/jss/nextjs-material-kit/pages/loginPage.js';

const useStylesMan = makeStyles(styles);

function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`
	};
}

const useStyles = makeStyles(theme => ({
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	}
}));

export default function LoginModal() {
	const classes = useStyles();
	const classet = useStylesMan();
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
			<Button
				type='button'
				onClick={handleOpen}
				simple
				size='lg'
				className={classet.modalBtn}
			>
				Open Modal
			</Button>
			<Modal open={open} onClose={handleClose}>
				<div>
					<LoginComponent />
				</div>
			</Modal>
		</div>
	);
}
