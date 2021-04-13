

import React from "react";
import {Link} from "react-router-dom";
function Forms() {
  return (

      <main id="main">
   <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">

              <h1 className="logo me-auto"><a href="/">Mentor</a></h1>

              <nav id="navbar" className="navbar order-last order-lg-0">
                  <ul>


                      <nav id="navbar" className="navbar order-last order-lg-0">
                          <ul>
                              <li><a className="active" href="/">Home</a></li>

                             <li><Link to = {{pathname: `/about`, fromDashboard: false}} >About</Link></li>


                            <li><Link to = {{pathname: `/events`, fromDashboard: false}} >Courses</Link></li>
                            <li><Link to = {{pathname: `/treners`, fromDashboard: false}} >Trainers</Link></li>
                            <li><Link to = {{pathname: `/contacts`, fromDashboard: false}} >Contacts</Link></li>
                            <li><Link to = {{pathname: `/forms`, fromDashboard: false}} >Pricing</Link></li>
                          </ul>
                      </nav>


                  </ul>
                  <i className="bi bi-list mobile-nav-toggle"></i>
              </nav>


              <a href="courses.html" className="get-started-btn">Get Started</a>

          </div>
      </header>


          <div className="breadcrumbs" data-aos="fade-in">
              <div className="container">
                  <h2>Contact Us</h2>
                  <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia
                      voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum
                      praesentium. </p>
              </div>
          </div>

          <section id="contact" className="contact">
              <div data-aos="fade-up">
                  <iframe style={{border:'0', width: '100%' , height: '350px'}}
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                          frameBorder="0" allowFullScreen></iframe>
              </div>

              <div className="container" data-aos="fade-up">

                  <div className="row mt-5">

                      <div className="col-lg-4">
                          <div className="info">
                              <div className="address">
                                  <i className="bi bi-geo-alt"></i>
                                  <h4>Location:</h4>
                                  <p>A108 Adam Street, New York, NY 535022</p>
                              </div>

                              <div className="email">
                                  <i className="bi bi-envelope"></i>
                                  <h4>Email:</h4>
                                  <p>info@example.com</p>
                              </div>

                              <div className="phone">
                                  <i className="bi bi-phone"></i>
                                  <h4>Call:</h4>
                                  <p>+1 5589 55488 55s</p>
                              </div>

                          </div>

                      </div>

                      <div className="col-lg-8 mt-5 mt-lg-0">

                          <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                              <div className="row">
                                  <div className="col-md-6 form-group">
                                      <input type="text" name="name" className="form-control" id="name"
                                             placeholder="Your Name" required/>
                                  </div>
                                  <div className="col-md-6 form-group mt-3 mt-md-0">
                                      <input type="email" className="form-control" name="email" id="email"
                                             placeholder="Your Email" required/>
                                  </div>
                              </div>
                              <div className="form-group mt-3">
                                  <input type="text" className="form-control" name="subject" id="subject"
                                         placeholder="Subject" required/>
                              </div>
                              <div className="form-group mt-3">
                                  <textarea className="form-control" name="message" rows="5" placeholder="Message"
                                            required></textarea>
                              </div>
                              <div className="my-3">
                                  <div className="loading">Loading</div>
                                  <div className="error-message"></div>
                                  <div className="sent-message">Your message has been sent. Thank you!</div>
                              </div>
                              <div className="text-center">
                                  <button type="submit">Send Message</button>
                              </div>
                          </form>

                      </div>

                  </div>

              </div>
          </section>


      </main>

);
}

export default Forms;
