import React from 'react';
import Slider from '../inc/Slider';
import Vmc from './inc/Vmc';
import {
    Link
} from "react-router-dom";
import Service1 from '../images/2.jpg';

const Home = () => {
    return ( 
        <div>
            <div>
                <Slider />
            </div>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Our Company</h3>
                            <div className="underline mx-auto"></div>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Vestibulum mollis blandit eros. In eleifend lobortis egestas. 
                            Phasellus fermentum faucibus ligula, eu sagittis enim vestibulum ut. 
                            Quisque ut nibh risus. Vivamus nec leo dignissim, scelerisque erat 
                            ut, pretium neque. Cras vestibulum, urna sit amet finibus hendrerit, 
                            nibh lacus lacinia nisi, eget laoreet libero urna eu metus. 
                            Vivamus ex nunc, sodales vitae lectus vitae, auctor vestibulum metus.
                             Proin vulputate iaculis elit vel interdum. Duis dictum massa urna, 
                             non rutrum tellus commodo et.
                            </p>
                            <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* Vision mission and core values */}
            <Vmc />

            {/* services */}
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5 text-center">
                            <h3 className="main-heading">Our Services</h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Service 1</h6>
                                    <div className="underline mx-auto"></div>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Vestibulum mollis blandit eros. In eleifend lobortis egestas. 
                                    Phasellus fermentum faucibus ligula, eu sagittis enim vestibulum ut. 
                                    Quisque ut nibh risus. Vivamus nec leo dignissim, scelerisque erat 
                                    ut, pretium neque. Cras vestibulum, urna sit amet finibus hendrerit, 
                                    nibh lacus lacinia nisi,
                                    </p>
                                    <Link to="/services" className="btn btn-link">read more</Link>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Service 2</h6>
                                    <div className="underline mx-auto"></div>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Vestibulum mollis blandit eros. In eleifend lobortis egestas. 
                                    Phasellus fermentum faucibus ligula, eu sagittis enim vestibulum ut. 
                                    Quisque ut nibh risus. Vivamus nec leo dignissim, scelerisque erat 
                                    ut, pretium neque. Cras vestibulum, urna sit amet finibus hendrerit, 
                                    nibh lacus lacinia nisi,
                                    </p>
                                    <Link to="/services" className="btn btn-link">read more</Link>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Service 3</h6>
                                    <div className="underline mx-auto"></div>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Vestibulum mollis blandit eros. In eleifend lobortis egestas. 
                                    Phasellus fermentum faucibus ligula, eu sagittis enim vestibulum ut. 
                                    Quisque ut nibh risus. Vivamus nec leo dignissim, scelerisque erat 
                                    ut, pretium neque. Cras vestibulum, urna sit amet finibus hendrerit, 
                                    nibh lacus lacinia nisi,
                                    </p>
                                    <Link to="/services" className="btn btn-link">read more</Link>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Home;