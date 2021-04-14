import {
    Link
} from "react-router-dom";

const Footer = () => {
    return ( 
        <section className="section footer bg-dark text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <h6>Company Information</h6>
                            <hr />
                            <p className="text-white mb1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Vestibulum mollis blandit eros. In eleifend lobortis egestas. 
                            Phasellus fermentum faucibus ligula, eu sagittis enim vestibulum ut. 
                            Quisque ut nibh risus. Vivamus nec leo dignissim, scelerisque erat 
                            ut, pretium neque. Cras vestibulum, urna sit amet finibus hendrerit, 
                            nibh lacus lacinia nisi,
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <h6>Quick Links</h6>
                            <hr />
                            <div><Link to="/" className="text-white mb1">Home</Link></div>
                            <div><Link to="/about" className="text-white mb1">About</Link></div>
                            <div><Link to="/contact" className="text-white mb1">Contact</Link></div>
                            <div><Link to="/" className="text-white mb1">Blog</Link></div>
                        </div>
                        <div className="col-md-4 text-center">
                            <h6>Contact Information</h6>
                            <hr />
                            <div><p className="text-white mb1">#54 this is a test address</p></div>
                            <div><p className="text-white mb1">+918XXXXXXX88</p></div>
                            <div><p className="text-white mb1">+918XXXXXXX88</p></div>
                            <div><p className="text-white mb1">axxxxe@gxxxxx.cxx</p></div>
                        </div>
                    </div>
                </div>
            </section>
     );
}
 
export default Footer;