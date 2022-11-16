import React from 'react'
import './navbar.css'

const Navbar = () => {
	/* Fixed Menu js */
	window.addEventListener('scroll', function(){
		let header = document.querySelector(".header");
		let scroll = this.scrollY;
		if(scroll > 100){
			header.classList.add('header--bg');
		}else{
			header.classList.remove('header--bg');
		}
	});

	return (
		<header className="header position-fixed w-100 transition">
			<nav className="navbar navbar-expand-md">
				<div className="container">
					<a className="navbar-brand" href="./">
						<img src="./assets/images/logo.png" alt="logo" />
					</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<i className="fas fa-bars"></i>
					</button>
				
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item ml-0">
						<a className="nav-link active" href="#banner">Home</a>
						</li>
						<li className="nav-item">
						<a className="nav-link" href="#portfolio">Work</a>
						</li>
						<li className="nav-item">
						<a className="nav-link" href="#hireMe">Blog</a>
						</li>
						<li className="nav-item">
						<a className="nav-link btn-hire rounded-pill border transition" href="#hireMe">Hire Me!</a>
						</li>
					</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Navbar