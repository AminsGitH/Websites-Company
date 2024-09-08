import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer pt-5 pb-5 text-white-50 text-center text-md-start">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="info mb-5">
                <img className="mb-4" src="/public/vite.svg" alt="" />
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Neque, cum assumenda aspernatur repellat, deleniti placeat
                  amet magnam quae provident maiores, consequatur tenetur eius
                  quas animi. Id quidem fugiat labore quas?
                </p>
                <div className="copyright">
                  Created By <span>Amin Mohamed</span>
                  <div>
                    &copy; 2024 - <span>Bondi Inc.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="links p-3">
                <h5 className="text-light">Links</h5>
                <ul className="list-unstyled lh-lg ">
                  <li>Home</li>
                  <li>Our Services</li>
                  <li>Portfolio</li>
                  <li>Testimonals</li>
                  <li>Support</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-2">
              <div className="links p-3">
                <h5 className="text-light">About us</h5>
                <ul className="list-unstyled lh-lg ">
                  <li>Sign in</li>
                  <li>Register</li>
                  <li>About us</li>
                  <li>Blog</li>
                  <li>Contact us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="contact">
                <h5 className="text-light">Contact Us</h5>
                <p className="lh-lg mt-3 mb-5">
                  Get in touch via Mail or Phone
                </p>
                <Link className="btn rounded-pill main-btn w-100">
                  Example@gmail.com
                </Link>
                <ul className="d-flex mt-5 list-unstyled gap-5 p-4 ">
                  <Link>
                    <FontAwesomeIcon
                      className="d-block facebook"
                      icon="fa-brands fa-facebook"
                    />
                  </Link>
                  <Link>
                    <FontAwesomeIcon
                      className="d-block instagram"
                      icon="fa-brands fa-instagram"
                      //
                    />
                  </Link>
                  <Link>
                    <FontAwesomeIcon
                      className="d-block  twitter"
                      icon="fa-brands fa-twitter"
                    />
                  </Link>
                  <Link>
                    <FontAwesomeIcon
                      className="d-block  youtube"
                      icon="fa-brands fa-youtube "
                    />
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
