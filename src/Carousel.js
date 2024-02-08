import "./Carousel.css";

function Carousel() {
  return (
    <div className="container-fluid">
      <div id="carouselExampleAutoplaying" className="carousel carousel-dark slide ps-3 pe-3" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/0c706f11307528da.jpg?q=20"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e8afba7feffa58f9.jpg?q=20"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/7fd0e4ab26429926.jpg?q=20"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="	https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/0d1366a919fff51b.jpg?q=20"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/b075282ca13be880.jpg?q=20"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
