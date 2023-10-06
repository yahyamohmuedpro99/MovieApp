import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './notfound.css';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

export default function NotFound() {
  return (
    <>
      <div className="text-center">
        <div style={{fontSize:'10rem'}} className=''> {/* Use the appropriate Bootstrap class like text-lg */}
          <i className="">4<AiOutlineQuestionCircle />4</i>
          
        </div>
        <div style={{fontSize:'large'}}>Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?
          <p>Let's go <Link to='/' className='text-decoration-none'> Home </Link> and try from there.</p>
        </div>
      </div>
    </>
  );
}
