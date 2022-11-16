import React from 'react'
import './hire.css'

const Hire = () => {
    return (
        /* Hire Me Section */
        <section className="hire-me section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="hire-me__title h4 mb-4">Make It Awesome!</h1>
                        <p className="hire-me__txt">There's nothing we wont try. Never heard the word impossible. This time there's no stopping us. The year is 1987 and NASA launches the last of Americas deep space probes.</p>
                    </div>
                    <div className="col-md-4 d-flex align-items-center justify-content-md-end">
                        <a className="btn-hire rounded-pill border transition" href="#!">Hire Me Now!</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hire