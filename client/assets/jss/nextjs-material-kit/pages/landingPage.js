import { container, title } from 'assets/jss/nextjs-material-kit.js';
import Background from '../../../img/logos/chip.jpg';

const landingPageStyle = {
	
	header: {
		backgroundImage: `url(${Background})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		padding: '15% 5% 10% 5%',
		height: '100vh',
		textAlign: 'center'
	},
	backgroundColors:{
		backgroundColor: '#1b1f3a',
	},
	container: {
		color: '#ffffff',
		...container
	},
	title: {
		...title,
		display: 'inline-block',
		position: 'relative',
		marginTop: '30px',
		minHeight: '32px',
		color: '#FFFFFF',
		textDecoration: 'none'
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
};

export default landingPageStyle;
