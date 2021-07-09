import { useState, useEffect } from "react"

export const Navbar = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	const [menuActive, setMenuActive] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, []);

	if (windowWidth > 1200) {
		return (
			<div className="Navbar">
				<div className="navbar-regular">
					<a href="/">Projekte</a>
					<a href="/">Philosophie</a>
					<a href="/">Kunden</a>
					<a href="/">Services</a>
					<a href="/">Kontakt</a>
				</div>
			</div>
		)
	} else {
		return (
			<div className="Navbar">
				<div className="burger-icon" onClick={() => setMenuActive(!menuActive)}>
					<div className="burger-line"></div>
					<div className="burger-line"></div>
					<div className="burger-line"></div>
				</div>
				{console.log(menuActive)}
				<div 
				className='menu-overlay' 
				style={menuActive ? {transform:'translate(0%)'} : {transform:'translate(100%)'}}
				onClick={() => setMenuActive(!menuActive)}>
					<div className="menu" >
						<a href="/">Projekte</a>
						<a href="/">Philosophie</a>
						<a href="/">Kunden</a>
						<a href="/">Services</a>
						<a href="/">Kontakt</a>
					</div>
				</div>
			</div>	
		)
	}

}

export default Navbar

