import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    /* Footer Section */
	<footer className="footer">
		<div className="container">
			<div className="row">
				<div className="col-12 footer__top">
					<ul className="list-inline footer__nav text-center">
						<li className="list-inline-item nav__item mr-md-4"><a className="nav__link p-1 transition" href="#banner">Home</a></li>
						<li className="list-inline-item nav__item mr-md-4"><a className="nav__link p-1 transition" href="#services">About Me</a></li>
						<li className="list-inline-item nav__item mr-md-4"><a className="nav__link p-1 transition" href="#portfolio">Work</a></li>
						<li className="list-inline-item nav__item mr-md-5"><a className="nav__link p-1 transition" href="#hireMe">Blog</a></li>
						<li className="list-inline-item nav__item ml-lg-4">
							<form action='#!' className="form-inline position-relative mt-4 mt-lg-0">
								<input className="form-control shadow-none rounded-pill px-4" type="search" placeholder="Search..." aria-label="Search" />
								<button className="btn position-absolute shadow-none transition" type="submit"><i className="fas fa-search"></i></button>
							</form>
						</li>
					</ul>
					<ul className="list-inline footer__social text-center mt-5 mb-0">
						<li className="list-inline-item social__item mr-2 mr-md-4">
							<a className="social__icon social__icon--facebook transition d-flex align-items-center justify-content-center rounded-circle" href="#!"><i className="fab fa-facebook-f"></i></a>
						</li>
						<li className="list-inline-item social__item mr-2 mr-md-4">
							<a className="social__icon social__icon--twitter transition d-flex align-items-center justify-content-center rounded-circle" href="#!"><i className="fab fa-twitter"></i></a>
						</li>
						<li className="list-inline-item social__item mr-2 mr-md-4">
							<a className="social__icon social__icon--instagram transition d-flex align-items-center justify-content-center rounded-circle" href="#!"><i className="fab fa-instagram"></i></a>
						</li>
						<li className="list-inline-item social__item">
							<a className="social__icon social__icon--youtube transition d-flex align-items-center justify-content-center rounded-circle" href="#!"><i className="fab fa-youtube"></i></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div className="footer__bottom">
			<p className="mb-0 text-center">Copyright <i className="far fa-copyright"></i> 2020. Portfolio By XXXXXX</p>
		</div>
	</footer>
  )
}

export default Footer