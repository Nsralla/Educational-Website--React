import './Community.css';
import pro from '../../assets/images/pro1.webp';
import pro2 from '../../assets/images/pro2.webp';
import pro3 from '../../assets/images/pro3.webp';
import pro4 from '../../assets/images/pro4.webp';
export default function Community(){
    return(
        <div id="community">
            <h1>Community Experts</h1>
            <span>Replenish man have thing Lorem ipsum dolor sit amet.</span>
            <div className="workers">
                <div className="worker">
                    <img src={pro} alt="" />
                    <h5>Ema Irnik</h5>
                    <span>Python & algorithm Expert</span>
                    <div className="social">
                        <a href=""><i className="fab fa-facebook-f"></i></a>
                        <a href=""><i className="fab fa-twitter"></i></a>
                        <a href=""><i className="fab fa-instagram"></i></a>
                    </div>
                </div>

                <div className="worker">
                    <img src={pro2} alt="" />
                    <h5>Jason</h5>
                    <span>Data Analysis Expert</span>
                    <div className="social">
                        <a href=""><i className="fab fa-facebook-f"></i></a>
                        <a href=""><i className="fab fa-twitter"></i></a>
                        <a href=""><i className="fab fa-instagram"></i></a>
                    </div>
                </div>

                <div className="worker">
                    <img src={pro3} alt="" />
                    <h5>Maalik</h5>
                    <span>Full stack developer</span>
                    <div className="social">
                        <a href=""><i className="fab fa-facebook-f"></i></a>
                        <a href=""><i className="fab fa-twitter"></i></a>
                        <a href=""><i className="fab fa-instagram"></i></a>
                    </div>
                </div>

                <div className="worker">
                    <img src={pro4} alt="" />
                    <h5>Jennifer</h5>
                    <span>Design Expert</span>
                    <div className="social">
                        <a href=""><i className="fab fa-facebook-f"></i></a>
                        <a href=""><i className="fab fa-twitter"></i></a>
                        <a href=""><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}