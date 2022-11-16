import React from 'react'
import './services.css'

export const Services = () => {
  return (
    /* Services Section */
	<section className="services section-padding">
		<div className="container">
			<div className="section-header">
				<h1 className="section-header__title h5 text-uppercase text-center position-relative" data-text="Services">Services</h1>
			</div>
			<div className="row">
				<div className="col-lg-4 col-md-6">
					<div className="services__block transition text-center mb-4 mb-lg-0">
						<i className="services__icon fas fa-fill-drip transition"></i>
						<h2 className="services__title h6 position-relative text-uppercase transition">Web design</h2>
						<p className="services__txt transition">Well we're movin' on up to the east side. To a deluxe apartment in the sky.</p>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="services__block transition text-center mb-4 mb-lg-0">
						<i className="services__icon far fa-gem transition"></i>
						<h2 className="services__title h6 position-relative text-uppercase transition">Mobile App</h2>
						<p className="services__txt transition">Tracking immunizations has never been easier or more secure...</p>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 mx-auto">
					<div className="services__block transition text-center mb-4 mb-lg-0">
						<i className="services__icon fas fa-magic transition"></i>
						<h2 className="services__title h6 position-relative text-uppercase transition">Barnding</h2>
						<p className="services__txt transition">Well we're movin' on up to the east side. To a deluxe apartment in the sky.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Services