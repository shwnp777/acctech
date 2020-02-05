import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
// core components
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardFooter from 'components/Card/CardFooter.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import styles from 'assets/jss/nextjs-material-kit/pages/loginPage.js';

const useStyles = makeStyles(styles);

export default function LoginComponent(props) {
	const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
	setTimeout(function() {
		setCardAnimation('');
	}, 700);
	const classes = useStyles();
	const { ...rest } = props;
	return (
		<div className={classes.container}>
			<GridContainer justify='center'>
				<GridItem xs={12} sm={6} md={4}>
					<Card className={classes[cardAnimaton]}>
						<form className={classes.form}>
							<CardHeader className={classes.cardHeader}>
								<h4>Login</h4>
								<div className={classes.socialLine}>
									<Button
										justIcon
										href='#pablo'
										target='_blank'
										color='transparent'
										onClick={e => e.preventDefault()}
									>
										<i className={'fab fa-twitter'} />
									</Button>
									<Button
										justIcon
										href='#pablo'
										target='_blank'
										color='transparent'
										onClick={e => e.preventDefault()}
									>
										<i className={'fab fa-facebook'} />
									</Button>
									<Button
										justIcon
										href='#pablo'
										target='_blank'
										color='transparent'
										onClick={e => e.preventDefault()}
									>
										<i className={'fab fa-google-plus-g'} />
									</Button>
								</div>
							</CardHeader>
							<p className={classes.divider}>Or Be Classical</p>
							<CardBody>
								<CustomInput
									labelText='Email...'
									id='email'
									formControlProps={{
										fullWidth: true
									}}
									inputProps={{
										type: 'email',
										endAdornment: (
											<InputAdornment position='end'>
												<Email className={classes.inputIconsColor} />
											</InputAdornment>
										)
									}}
								/>
								<CustomInput
									labelText='Password'
									id='pass'
									formControlProps={{
										fullWidth: true
									}}
									inputProps={{
										type: 'password',
										endAdornment: (
											<InputAdornment position='end'>
												<Icon className={classes.inputIconsColor}>
													lock_outline
												</Icon>
											</InputAdornment>
										),
										autoComplete: 'off'
									}}
								/>
							</CardBody>
							<CardFooter className={classes.cardFooter}>
								<Button className={classes.btntext} simple size='lg'>
									Get started
								</Button>
							</CardFooter>
						</form>
						<div className='auth-question'>
							<p muted>Already have an account?</p>
						</div>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	);
}
