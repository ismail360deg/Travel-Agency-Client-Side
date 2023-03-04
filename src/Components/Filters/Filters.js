import React from 'react';

const Filters = () => {
    return (
        <div>
             <section className="container mt-4">
        <div className="row">
          <div className="col-4">
            <h5 className="filter">Filters</h5>
            <div>
              <select
                class="form-select"
                aria-label="Default select example"
              ></select>
              <input type="range" class="form-range" id="customRange1" />
              <div className="d-flex justify-content-between">
                <p>$50</p>
                <p>$1200</p>
              </div>
              <hr />
            </div>

            <h5 className="filter">Rating</h5>
            <select
              class="form-select"
              aria-label="Default select example"
            ></select>
            <div className="d-flex justify-content-between">
              <p>0+</p>
              <p>1+</p>
              <p>2+</p>
              <p>3+</p>
              <p>4+</p>
              <p>5+</p>
            </div>
            <hr />

            <h5 className="filter">Freebies</h5>
            <select
              class="form-select"
              aria-label="Default select example"
            ></select>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
              />
              <label class="form-check-label" for="flexCheckIndeterminate">
                Free breakfast
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
              />
              <label class="form-check-label" for="flexCheckIndeterminate">
                Free breakfast
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
              />
              <label class="form-check-label" for="flexCheckIndeterminate">
                Free breakfast
              </label>
            </div>
            <hr />

            <h5 className="filter">Amenities</h5>
            <select
              class="form-select"
              aria-label="Default select example"
            ></select>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
              />
              <label class="form-check-label" for="flexCheckIndeterminate">
                Free breakfast
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
              />
              <label class="form-check-label" for="flexCheckIndeterminate">
                Free breakfast
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
              />
              <label class="form-check-label" for="flexCheckIndeterminate">
                Free breakfast
              </label>
            </div>
          </div>

          <div className="col-8">
            <div className="hotels d-flex justify-content-between">
              <div>
                <h6>Hotels</h6>
                <p>257 places</p>
              </div>
              <div>
                <h6>Hotels</h6>
                <p>257 places</p>
              </div>
              <div>
                <h6>Hotels</h6>
                <p>257 places</p>
              </div>
            </div>

            <div className="d-flex justify-content-between mt-4">
              <p>Showing 4 of 257 places</p>
              <p>Sort by Recommended</p>
            </div>

            <div class="card mb-3 mt-4">
              <div class="row g-0">
                {/*<AllFlight
                // key={hotelName._id}
                // hotelName={hotelName}
                // setCategory={setCategory}
                // ></AllFlight>
                {/* //   } */}

                {/* <div class="col-4">
                      <img src={photo} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-8">
                      <div class="card-body hotel-list">
                      
                       <div>
                       <div className='starting d-flex align-items-center justify-content-end'>
                        <h5 class="card-title title">{title}</h5>
                        <h6>starting from <br />${price}/night <br />excl.tax</h6>
                        </div>
                       </div>
                      
                        <p class="card-text text">{city}</p>
                        <div className='d-flex justify-content-between mt-4'>
                        <p>{avgRating} 5star Hotel </p>
                        <h6>{cafe}+ Aminities</h6>
                        </div>
                        <h5>Very Good 371 reviews</h5> 
                        <hr />
                       <div className='d-flex justify-content-between'>
                       <p>love icon {country}</p>
                        <button className=''>View please</button>
                       </div>
                      </div>
                    </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Filters;