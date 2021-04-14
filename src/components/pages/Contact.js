import React from 'react';

const Contactus = () => {
    return ( 
        <div>
            <section className="section border-bottom">
                <div className="container">
                    <h5 className="main-heading">Contact Us</h5>
                    <div className="underline"></div>
                     
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Contact Form</h6>
                                    <hr />
                                    <div className="form-group">
                                        <label className="mb-1">Full Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Full Name" />
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Phone number</label>
                                        <input type="text" className="form-control" placeholder="Enter Phone Number" />
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Email Address</label>
                                        <input type="text" className="form-control" placeholder="Enter Email Address" />
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Message</label>
                                        <textarea rows="3" className="form-control"></textarea>
                                    </div>
                                    <div className="form-group py-3">
                                        <button className="btn btn-primary shadow w-100 " type="button">Send Message</button>
                                    </div>
                                </div>
                                <div className="col-md-6 border-start">
                                    <h5 className="main-heading">Address Information</h5>
                                    <div className="underline"></div>
                                    <p>#54 this is a test address</p>
                                    <p>Phone: +91 987xxxxxxx</p>
                                    <p>Email: aXXXX@gXXX.XXm</p>
                                </div>
                            </div>

                        </div>
                    </div>
                     
                </div>
            </section>

        </div>
        
     );
}
 
export default Contactus;