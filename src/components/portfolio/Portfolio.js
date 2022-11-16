import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    /* Portfolio Section */
	<section className="portfolio section-padding section-bg">
		<div className="container">
			<div className="section-header">
				<h1 className="section-header__title h5 text-uppercase text-center position-relative" data-text="Portfolio">Portfolio</h1>
			</div>
			<div className="row">
				<div className="col-lg-4 col-sm-6">
					<div className="portfolio__block transition position-relative mb-4">
						<img src="./assets/images/portfolio-1.png" alt="portfolio-1" className="w-100" />
						<div className="portfolio__overlay transition d-flex flex-column align-items-center justify-content-center w-100 h-100 position-absolute overflow-hidden text-white">
							<h3 className="portfolio__subHeading h6">Branding</h3>
							<h2 className="portfolio__heading text-uppercase position-relative">Home Decoration</h2>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6">
					<div className="portfolio__block transition position-relative mb-4">
						<img src="./assets/images/portfolio-2.png" alt="portfolio-2" className="w-100" />
						<div className="portfolio__overlay transition d-flex flex-column align-items-center justify-content-center w-100 h-100 position-absolute overflow-hidden text-white">
							<h3 className="portfolio__subHeading h6">Branding</h3>
							<h2 className="portfolio__heading text-uppercase position-relative">Home Decoration</h2>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6">
					<div className="portfolio__block transition position-relative mb-4">
						<img src="./assets/images/portfolio-3.png" alt="portfolio-3" className="w-100" />
						<div className="portfolio__overlay transition d-flex flex-column align-items-center justify-content-center w-100 h-100 position-absolute overflow-hidden text-white">
							<h3 className="portfolio__subHeading h6">Branding</h3>
							<h2 className="portfolio__heading text-uppercase position-relative">Home Decoration</h2>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6">
					<div className="portfolio__block transition position-relative mb-4 mb-lg-0">
						<img src="./assets/images/portfolio-4.png" alt="portfolio-4" className="w-100" />
						<div className="portfolio__overlay transition d-flex flex-column align-items-center justify-content-center w-100 h-100 position-absolute overflow-hidden text-white">
							<h3 className="portfolio__subHeading h6">Branding</h3>
							<h2 className="portfolio__heading text-uppercase position-relative">Home Decoration</h2>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6">
					<div className="portfolio__block transition position-relative mb-4 mb-lg-0">
						<img src="./assets/images/portfolio-5.png" alt="portfolio-5" className="w-100" />
						<div className="portfolio__overlay transition d-flex flex-column align-items-center justify-content-center w-100 h-100 position-absolute overflow-hidden text-white">
							<h3 className="portfolio__subHeading h6">Branding</h3>
							<h2 className="portfolio__heading text-uppercase position-relative">Home Decoration</h2>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6">
					<div className="portfolio__block transition position-relative mb-4 mb-lg-0">
						<img src="./assets/images/portfolio-1.png" alt="portfolio-1" className="w-100" />
						<div className="portfolio__overlay transition d-flex flex-column align-items-center justify-content-center w-100 h-100 position-absolute overflow-hidden text-white">
							<h3 className="portfolio__subHeading h6">Branding</h3>
							<h2 className="portfolio__heading text-uppercase position-relative">Home Decoration</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Portfolio