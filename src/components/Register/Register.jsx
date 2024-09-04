import './Register.css';
export default function Register(){
    return (
        <div id="register">
            <div className="left">
                <div className='titles'>
                    <h5>Get 199 Online Courses For Free</h5>
                    <h1>Register To Get It</h1>
                </div>
                <div className='timer'>
                    <div>18 <br/>Days</div>
                    <div>23  <br/>Hours</div>
                    <div>06<br/> Mins</div>
                    <div>58<br/> Secs</div>
                </div>
            </div>

            <div className="right">
                <div className="container">
                    <h2>Create Free Account NOW!</h2>
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Your Email"/>
                    <input type="tel" placeholder="Phone Number"/>
                    <button>Visit Courses</button>
                </div>
                
            </div>
        </div>
    );
}