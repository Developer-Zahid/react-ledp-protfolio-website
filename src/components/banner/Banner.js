import React from 'react'
import './banner.css'

const Banner = () => {
  return (
    /* Banner Section */
	<section className="banner" style={{backgroundImage: 'url(./assets/images/banner.png)'}}>
		<div className="container-fluid">
			<div className="row">
				<div className="banner__content col-lg-5 offset-lg-7 pl-xl-0">
					<h3 className="banner__subHeading mb-4">Hello, I'm Deeje</h3>
					<h1 className="h2 banner__heading mb-4">Expert in Graphic <br/> Design &Development</h1>
					<p className="my-5 banner__txt">Currently available for select projects, collaborations and consulting.Currently available for select projects, collaborations and consulting.</p>
					<a href="#!" className="btn banner__btn border rounded-pill transition text-uppercase shadow-none">See My work</a>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Banner