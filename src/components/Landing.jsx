
import { Link } from 'react-router-dom';
const Landing = () => {
    return (
      <>
        <div className="landing d-flex justify-content-center align-items-center">
          <div className="text-center text-light">
            <h1> #Creativity</h1>
            <p className='fs-6 text-white-50 mb-5'>we make professional unique websites</p>
            <Link
              className="btn   rounded-pill main-btn p-3 "
              to={"/getstarted"}
            >
              Get Started
            </Link>
          </div>
        </div>
      </>
    );
}

export default Landing
