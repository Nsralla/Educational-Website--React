import './Feature.css' 
export default function Feature(){
    return(
        <section id="features-container">
            <h1>Awesome Features</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi.</p>

            <div id="features">
            <div className="feature">
                <i className="fa-solid fa-graduation-cap"></i>
                <h4>Lorem, ipsum dolor.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium corporis dignissimos voluptas, eos eveniet repudiandae voluptatibus!</p>
            </div>
            <div className="feature">
                <i className="fas fa-award"></i>
                <h4>Lorem, ipsum dolor.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium corporis dignissimos voluptas, eos eveniet repudiandae voluptatibus!</p>
            </div>
            <div className="feature">
                <i className="fas fa-award"></i>
                <h4>Lorem, ipsum dolor.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium corporis dignissimos voluptas, eos eveniet repudiandae voluptatibus!</p>
            </div>
            </div>

            
        </section>
    );
}