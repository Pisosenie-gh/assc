import {useEffect, useState} from "react";
import axios from "axios";
import React from "react";
function Events() {

  const [event, setData] = useState([]);

  useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/articles/`
        }).then(response => {
            setData(response.data)
        })
  });



  return (


      <main id="main" data-aos="fade-in">


          <div className="breadcrumbs">
              <div className="container">
                  <h2>Courses</h2>
                  <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia
                      voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum
                      praesentium. </p>
              </div>
          </div>


          <section id="courses" className="courses">
              <div className="container" data-aos="fade-up">

                  <div className="row" data-aos="zoom-in" data-aos-delay="100">


    {event.map(c => (
                                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">

                          <div className="course-item">
                              <img src="{c.image}" className="img-fluid" alt="..."/>
                                  <div className="course-content">
                                      <div className="d-flex justify-content-between align-items-center mb-3">
                                          <h4>Content</h4>
                                          <p className="price">$180</p>
                                      </div>

                                      <h3><a href="course-details.html">Copywriting</a></h3>
                                      <p>{c.name}</p>
                                      <div className="trainer d-flex justify-content-between align-items-center">
                                          <div className="trainer-profile d-flex align-items-center">
                                              <img src="assets/img/trainers/trainer-3.jpg" className="img-fluid" alt=""/>
                                                  <span>{c.text}</span>
                                          </div>
                                          <div className="trainer-rank d-flex align-items-center">
                                              <i className="bx bx-user"></i>&nbsp;20
                                              &nbsp;&nbsp;
                                              <i className="bx bx-heart"></i>&nbsp;85
                                          </div>
                                      </div>
                                  </div>
                          </div>

                      </div>
 ))}


                  </div>

              </div>
          </section>


      </main>


  );
}

export default Events;
