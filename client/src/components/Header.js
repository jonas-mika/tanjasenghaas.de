import Navbar from './Navbar'
  
const Header = () => {

	return (
		<div className="Header main-container">
			<div className="logo">
				<div className="header">
					<h1>Tanja Senghaas Designs</h1>
				</div>
				<div className="subheader">
					<h3>Creative Direction | Magazinentwicklung</h3>
				</div>
			</div>
			<Navbar />
		</div>
	)
}

export default Header
