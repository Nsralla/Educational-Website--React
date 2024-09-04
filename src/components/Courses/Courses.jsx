import './Courses.css';
import c1 from '../../assets/images/c1.jpg';
import c2 from '../../assets/images/c2.jpg';
import c3 from '../../assets/images/c3.jpg';
import c4 from '../../assets/images/c4.jpg';
import c5 from '../../assets/images/c5.jpg';
import c6 from '../../assets/images/c6.jpg';

export default function Courses(){
    return(
    <section id='courses'>
        <h1>Our Popular Courses</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className='courses-divs'>
            <div className="course">
                <img src={c1} alt="" />
                <p>updated 21/8/21</p>
                <h5>JavaScript Beginners Course</h5>
                <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span> (238)</span>
                    <div className='discount'>$49.99</div>
                </div>
            </div>
            <div className="course">
                <img src={c2} alt="" />
                <p>updated 21/8/21</p>
                <h5>HTML & CSS Beginners Course</h5>
                <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span> (238)</span>
                    <div className='discount'>$49.99</div>
                </div>
            </div>
            <div className="course">
                <img src={c3} alt="" />
                <p>updated 21/8/21</p>
                <h5>Python Beginners Course</h5>
                <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span> (238)</span>
                    <div className='discount'>$49.99</div>
                </div>
            </div>

            <div className="course">
                <img src={c4} alt="" />
                <p>updated 21/8/21</p>
                <h5>Python Beginners Course</h5>
                <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span> (238)</span>
                    <div className='discount'>$49.99</div>
                </div>
            </div>

            <div className="course">
                <img src={c5} alt="" />
                <p>updated 21/8/21</p>
                <h5>Python Beginners Course</h5>
                <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span> (238)</span>
                    <div className='discount'>$49.99</div>
                </div>
            </div>


            <div className="course">
                <img src={c6} alt="" />
                <p>updated 21/8/21</p>
                <h5>Python Beginners Course</h5>
                <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span> (238)</span>
                    <div className='discount'>$49.99</div>
                </div>
            </div>
        </div>
        
    </section>
    );
}