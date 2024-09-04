import { useState } from "react";
import logo from "../../assets/images/logo.svg";
import './Navbar.css';
import { useEffect } from "react";
export default function Navbar(){
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggle(){
        setIsMenuOpen((oldState)=>{
            return !oldState;
        });
    }

    useEffect(()=>{
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth);
        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    },[]);
    return(
        <nav>
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            {screenWidth >= 800 && <div className="links">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Contact</a></li>
                <li><button>Join For Free</button></li>
            </ul>
            </div> }
            
            {screenWidth <800 && (
                <div className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
                    <i onClick={toggle}
                    className={`fa-solid fa-${isMenuOpen ? 'xmark' : 'bars'}`}></i>
                    {isMenuOpen && (<div className="mobile-links">
                            <ul>
                                <li><a onClick={toggle} href="#">Home</a></li>
                                <li><a onClick={toggle} href="#features-container">About</a></li>
                                <li><a onClick={toggle} href="#register">Blog</a></li>
                                <li><a onClick={toggle} href="#courses">Courses</a></li>
                                <li><a onClick={toggle} href="#footer">Contact</a></li>
                                <li><button>Join For Free</button></li>
                            </ul>
                        </div>)}
                </div>
                
                )
            }
        </nav>
    );
}