import React from 'react';

const Home = () =>{
    return (
      <div>
        <div className="brand">
          <h3>J's Budz</h3>
        </div>

        <nav className="navbar navbar-expand bg-none">
          <div className="collapse navbar-collapse justify-content-md-center">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link text" href="#">Beautiful Budz</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text" href="#">Delicious Dabz</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text" href="#">Exquisite Ediblez</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text" href="#">Delightful Drinkz</a>
              </li>
            </ul>
          </div>
        </nav>
        <hr></hr>

        <div className="banner">
          <p className="display-4">Welcome to our revolutionary dispensary!</p>
          <p className="lead">Our new dispensary has reinveted what it means to be a medical patient and a recreational participant</p>
          <p className="lead">You will regret not visiting our locale if you're a marijuana smoker</p>
        </div>

          <div className="jumbotron jumbotron-fluid jumbo" id="jumbo">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner container">
              <div className="carousel-item active">
                <img className="w-100 img" src="http://www.ilovegrowingmarijuana.com/assets/img/comp/ilovegrowingmarijuana.com/avoid-airy-and-loose-marijuana-buds-36489-w800.jpg"
 alt="First slide"></img>
              </div>

              <div className="carousel-item">
                <img className="w-100 img" src="http://www.ilovegrowingmarijuana.com/assets/img/comp/ilovegrowingmarijuana.com/avoid-airy-and-loose-marijuana-buds-36489-w800.jpg"
 alt="Second slide"></img>
              </div>

              <div className="carousel-item">
                <img className="w-100 img" src="http://www.ilovegrowingmarijuana.com/assets/img/comp/ilovegrowingmarijuana.com/avoid-airy-and-loose-marijuana-buds-36489-w800.jpg"
 alt="Third slide"></img>
              </div>
            </div>

            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="fas fa-chevron-left fa-5x icon" aria-hidden="true"></span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="fas fa-chevron-right fa-5x icon" aria-hidden="true"></span>
            </a>
          </div>
        </div>

        <div className="brand">
          <h3>Trending News</h3>
        </div>

        <div className="row cards">
          <div className="card mb-3 col-5 cardd" id="imagen">
            <img className="card-img-top" src="https://photos.smugmug.com/America/Hawaii/i-kRVHdHn/2/be962149/M/HawaiiHanaleiOutlookSunset1918-M.jpg" alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="lead">Cannabis History</h5>
              <p className="card-text img_definition">J's Budz, the first dispensary to sell out completely on opening day!</p>
              <p className="card-text"><small className="text-muted">Last updated 4 hours ago</small></p>
              <button className="btn btn-primary btn-sm read">Read More <span className="fas fa-angle-double-right"></span></button>
            </div>
          </div>
          <div className="card mb-3 col-5 cardd" id="imagen">
            <img className="card-img-top" src="https://cavenj.org/wp-content/uploads/2018/07/beautiful-landscape-pictures-impressive-20-beautiful-landscape-wallpapers-of-beautiful-landscape-pictures.jpg" alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="lead">J's Budz closes?</h5>
              <p className="card-text img_definition">As J's Budz sells out completely, a mandatory close was enforced. CEO says re-stocking will happen over the weekend.</p>
              <p className="card-text"><small className="text-muted">Last updated 12 mins ago</small></p>
              <button className="btn btn-primary btn-sm read">Read More <span className="fas fa-angle-double-right"></span></button>
            </div>
          </div>
        </div>
        <hr></hr>

      <div className="fixed-bottom bg-light footer">
        <a className="lead">&#169; 2018 Copyright, J's Budz</a>
      </div>

      </div>
    )
}
export default Home;
