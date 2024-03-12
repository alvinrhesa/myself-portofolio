import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {
  return (
    
    <div data-spy="scroll" data-target=".site-nav-target" data-offset="200">

    <nav className="unslate_co--site-mobile-menu">
      <div className="close-wrap d-flex">
        <a href="#" className="d-flex ml-auto js-menu-toggle">
          <span className="close-label">Close</span>
          <div className="close-times">
            <span className="bar1"></span>
            <span className="bar2"></span>
          </div>
        </a>
      </div>
      <div className="site-mobile-inner"></div>
    </nav>


    <div className="unslate_co--site-wrap">

      <div className="unslate_co--site-inner">

        <div className="lines-wrap">
          <div className="lines-inner">
            <div className="lines"></div>
          </div>
        </div>
        
      
      <nav className="unslate_co--site-nav site-nav-target">

        <div className="container">
        
          <div className="row align-items-center justify-content-between text-left">
            <div className="col-md-5 text-right">
              <ul className="site-nav-ul js-clone-nav text-left d-none d-lg-inline-block">
                <li className="has-children">
                  <a href="#home-section" className="nav-link">Home</a>
                  <ul className="dropdown">
                    <li>
                      <a href="index.html">Hero Image BG</a>
                    </li>
                    <li>
                      <a href="index-video.html">Video BG</a>
                    </li>
                    <li>
                      <a href="index-hero-slider.html">Hero Slider</a>
                    </li>
                    <li>
                      <a href="index-sidebar-menu.html">Sidebar Menu</a>
                    </li>
                    <li>
                      <a href="index-right-menu.html">Right Menu</a>
                    </li>
                  </ul>
                </li>
                <li><a href="#portfolio-section" className="nav-link">Portfolio</a></li>
                <li><a href="#about-section" className="nav-link">About</a></li>
                <li><a href="#services-section" className="nav-link">Services</a></li>
              </ul>
            </div>
            <div className="site-logo pos-absolute">
              <a href="index.html" className="unslate_co--site-logo">My Portofolio<span>.</span></a>
            </div>
            <div className="col-md-5 text-right text-lg-left">
              <ul className="site-nav-ul js-clone-nav text-left d-none d-lg-inline-block">
                <li><a href="#skills-section" className="nav-link">Skills</a></li>
                <li><a href="#testimonial-section" className="nav-link">Testimonial</a></li>
                <li><a href="#journal-section" className="nav-link">Journal</a></li>
                <li><a href="#contact-section" className="nav-link">Contact</a></li>
              </ul>

              <ul className="site-nav-ul-none-onepage text-right d-inline-block d-lg-none">
                <li><a href="#" className="js-menu-toggle">Menu</a></li>
              </ul>

            </div>
          </div>
        </div>

      </nav>
      

      <div className="cover-v1 jarallax" style={{ backgroundImage: "url('images/newcover.jpg')" }} id="home-section">
        <div className="container">
          <div className="row align-items-center">
              
            <div className="col-md-7 mx-auto text-center">
              <h1 className="heading gsap-reveal-hero">Rhesa Alvin </h1>
              <h2 className="subheading gsap-reveal-hero">I am Rhesa Alvin, a web developer who has been working in this world for approximately 5 years</h2>
            </div>

          </div>
        </div>


        <a href="#portfolio-section" className="mouse-wrap smoothscroll">
          <span className="mouse">
            <span className="scroll"></span>
          </span>
          <span className="mouse-label">Scroll</span>
        </a>

      </div>
      


      <div className="unslate_co--section" id="portfolio-section">
        <div className="container">
          
          
          <div className="relative"><div className="loader-portfolio-wrap"><div className="loader-portfolio"></div></div> </div>
          <div id="portfolio-single-holder"></div>

          <div className="portfolio-wrapper">

            <div className="d-flex align-items-center mb-4 gsap-reveal gsap-reveal-filter">
              <h2 className="mr-auto heading-h2"><span className="gsap-reveal">Portfolio</span></h2>

              <a href="#" className="text-white js-filter d-inline-block d-lg-none">Filter</a>
              
              <div className="filter-wrap">
                <div className="filter ml-auto" id="filters">
                  <a href="#" className="active" data-filter="*">All</a>
                  <a href="#" data-filter=".web">Web</a>
                  <a href="#" data-filter=".branding">UI/UX</a>
                  <a href="#" data-filter=".illustration">Design</a>
                  
                </div>
              </div> 
            </div>


            
            <div id="posts" className="row gutter-isotope-item">
              <div className="item web col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                <a href="images/tdi.png" className="portfolio-item item-portrait isotope-item gsap-reveal-img " data-fancybox="gallery" data-caption="Modern Building">
                    <div className="overlay">
                      <span className="wrap-icon icon-photo"></span>
                      <div className="portfolio-item-content">
                        <h3>Transformasi Digital Website Dashboard</h3>
                        <p>Codeigniter, Website</p>
                      </div>
                    </div>
                    <img src="images/tdi.png" className="lazyload  img-fluid" alt="Images" />
                  </a>
              </div>
              <div className="item packaging web col-sm-6 col-md-6 col-lg-4 isotope-mb-2 ">
                <a href="images/klakklik.png" className="portfolio-item item-portrait isotope-item gsap-reveal-img " data-fancybox="gallery" data-caption="Modern Building">
                    <div className="overlay">
                      <span className="wrap-icon icon-photo2"></span>
                      <div className="portfolio-item-content">
                        <h3>Klakklik Inovasi Digital</h3>
                        <p>Laravel, Web Development</p>
                      </div>
                    </div>
                    <img src="images/klakklik.png" className="lazyload  img-fluid" alt="Images" />
                  </a>
              </div>

              <div className="item web col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                <a href="images/endevos.png" className="portfolio-item item-portrait isotope-item gsap-reveal-img " data-fancybox="gallery" data-caption="Modern Building">
                    <div className="overlay">
                      <span className="wrap-icon icon-photo2"></span>
                      <div className="portfolio-item-content">
                        <h3>Endevos</h3>
                        <p>Wordpress, Elementor</p>
                      </div>
                    </div>
                    <img src="images/endevos.png" className="lazyload  img-fluid" alt="Images" />
                  </a>
              </div>

              <div className="item web packaging col-sm-6 col-md-6 col-lg-4 isotope-mb-2">

                <a href="images/kitchen.png" className="portfolio-item isotope-item gsap-reveal-img" data-fancybox="gallery" data-caption="Watch">
                    <div className="overlay">
                      <span className="wrap-icon icon-photo2"></span>
                      <div className="portfolio-item-content">
                        <h3>Kitchen Design Concept</h3>
                        <p>Wordpress, Elementor</p>
                      </div>
                    </div>
                    <img src="images/kitchen.png" className="lazyload  img-fluid" alt="Images" />
                  </a>

              </div>

              <div className="item branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                <a href="images/ui/Blog Full.png" className="portfolio-item isotope-item gsap-reveal-img" data-fancybox="gallery" data-caption="Shoe Rebranding">
                    <div className="overlay">
                      <span className="wrap-icon icon-photo2"></span>
                      <div className="portfolio-item-content">
                        <h3>Blog Page Concept</h3>
                        <p>UI, Figma</p>
                      </div>
                    </div>
                    <img src="images/ui/Blog Full.png" className="lazyload  img-fluid" alt="Images" />
                  </a>
              </div>

              <div className="item branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                <a href="images/ui/Blog.png" className="portfolio-item isotope-item gsap-reveal-img" data-fancybox="gallery" data-caption="Shoe Rebranding">
                    <div className="overlay">
                      <span className="wrap-icon icon-photo2"></span>
                      <div className="portfolio-item-content">
                        <h3>Blog Page Concept</h3>
                        <p>UI, Figma</p>
                      </div>
                    </div>
                    <img src="images/ui/Blog.png" className="lazyload  img-fluid" alt="Images" />
                  </a>
              </div>

              <div className="item branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                <a href="images/ui/Karir.png" className="portfolio-item isotope-item gsap-reveal-img" data-fancybox="gallery" data-caption="Shoe Rebranding">
                    <div className="overlay">
                      <span className="wrap-icon icon-photo2"></span>
                      <div className="portfolio-item-content">
                        <h3>Blog Page Concept</h3>
                        <p>UI, Figma</p>
                      </div>
                    </div>
                    <img src="images/ui/Karir.png" className="lazyload  img-fluid" alt="Images" />
                  </a>
              </div>

              <div className="item branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                <a href="images/ui/Client.png" className="portfolio-item isotope-item gsap-reveal-img" data-fancybox="gallery" data-caption="Shoe Rebranding">
                    <div className="overlay">
                      <span className="wrap-icon icon-photo2"></span>
                      <div className="portfolio-item-content">
                        <h3>Blog Page Concept</h3>
                        <p>UI, Figma</p>
                      </div>
                    </div>
                    <img src="images/ui/Client.png" className="lazyload  img-fluid" alt="Images" />
                  </a>
              </div>

              <div className="item illustration col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                <a href="images/logo.jpeg" className="portfolio-item item-portrait isotope-item gsap-reveal-img " data-fancybox="gallery" data-caption="Modern Building">
                    <div className="overlay">
                      <span className="wrap-icon icon-photo2"></span>
                      <div className="portfolio-item-content">
                        <h3>Logo</h3>
                        <p>Illustrator, Photoshop, Design</p>
                      </div>
                    </div>
                    <img src="images/logo.jpeg" className="lazyload  img-fluid" alt="Images" />
                  </a>
              </div>

              <div className="item illustration packaging col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                <a href="images/menu.png" className="portfolio-item item-portrait isotope-item gsap-reveal-img " data-fancybox="gallery" data-caption="Modern Building">
                    <div className="overlay">
                      <span className="wrap-icon icon-photo2"></span>
                      <div className="portfolio-item-content">
                        <h3>Menu Concept</h3>
                        <p>Menu, Food, Cafe</p>
                      </div>
                    </div>
                    <img src="images/menu.png" className="lazyload  img-fluid" alt="Images" />
                  </a>
              </div>

              <div className="item illustration col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                <a href="images/tom.jpeg" className="portfolio-item item-portrait isotope-item gsap-reveal-img " data-fancybox="gallery" data-caption="Modern Building">
                    <div className="overlay">
                      <span className="wrap-icon icon-photo2"></span>
                      <div className="portfolio-item-content">
                        <h3>Design Poster</h3>
                        <p>Effect, Photoshop</p>
                      </div>
                    </div>
                    <img src="images/tom.jpeg" className="lazyload  img-fluid" alt="Images" />
                  </a>
              </div>

              <div className="item branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                <a href="images/ui/Plantslogin.png" className="portfolio-item isotope-item gsap-reveal-img" data-fancybox="gallery" data-caption="Shoe Rebranding">
                    <div className="overlay">
                      <span className="wrap-icon icon-photo2"></span>
                      <div className="portfolio-item-content">
                        <h3>Login Concept</h3>
                        <p>UI, Figma</p>
                      </div>
                    </div>
                    <img src="images/Plantslogin.png" className="lazyload  img-fluid" alt="Images" />
                  </a>
              </div>

              <div className="item branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                <a href="images/ui/socialmedia.png" className="portfolio-item isotope-item gsap-reveal-img" data-fancybox="gallery" data-caption="Shoe Rebranding">
                    <div className="overlay">
                      <span className="wrap-icon icon-photo2"></span>
                      <div className="portfolio-item-content">
                        <h3>Social Media Concept</h3>
                        <p>UI, Figma</p>
                      </div>
                    </div>
                    <img src="images/socialmedia2.png" className="lazyload  img-fluid" alt="Images" />
                  </a>
              </div>

              <div className="item branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                <a href="images/ui/socialmedia.png" className="portfolio-item isotope-item gsap-reveal-img" data-fancybox="gallery" data-caption="Shoe Rebranding">
                    <div className="overlay">
                      <span className="wrap-icon icon-photo2"></span>
                      <div className="portfolio-item-content">
                        <h3>Music Player</h3>
                        <p>UI, Figma</p>
                      </div>
                    </div>
                    <img src="images/socialmedia.png" className="lazyload  img-fluid" alt="Images" />
                  </a>
              </div>

              
              <div className="item web col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                <a href="images/balanced.png" className="portfolio-item item-portrait isotope-item gsap-reveal-img " data-fancybox="gallery" data-caption="Modern Building">
                    <div className="overlay">
                      <span className="wrap-icon icon-photo"></span>
                      <div className="portfolio-item-content">
                        <h3>Balanced Dental Studio</h3>
                        <p>Thrive, Wordpress</p>
                      </div>
                    </div>
                    <img src="images/balanced.png" className="lazyload  img-fluid" alt="Images" />
                  </a>
              </div>

              <div className="item web col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                <a href="images/core.png" className="portfolio-item item-portrait isotope-item gsap-reveal-img " data-fancybox="gallery" data-caption="Modern Building">
                    <div className="overlay">
                      <span className="wrap-icon icon-photo"></span>
                      <div className="portfolio-item-content">
                        <h3>Core Group US</h3>
                        <p>Squarespace</p>
                      </div>
                    </div>
                    <img src="images/core.png" className="lazyload  img-fluid" alt="Images" />
                  </a>
              </div>

              <div className="item web col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                <a href="images/E-sakel.png" className="portfolio-item item-portrait isotope-item gsap-reveal-img " data-fancybox="gallery" data-caption="Modern Building">
                    <div className="overlay">
                      <span className="wrap-icon icon-photo"></span>
                      <div className="portfolio-item-content">
                        <h3>E-Sakel</h3>
                        <p>Codeigniter, PHP</p>
                      </div>
                    </div>
                    <img src="images/E-sakel.png" className="lazyload  img-fluid" alt="Images" />
                  </a>
              </div>

              <div className="item web col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                <a href="images/strategic.png" className="portfolio-item item-portrait isotope-item gsap-reveal-img " data-fancybox="gallery" data-caption="Modern Building">
                    <div className="overlay">
                      <span className="wrap-icon icon-photo"></span>
                      <div className="portfolio-item-content">
                        <h3>Strategic</h3>
                        <p>Elementor, WordPress</p>
                      </div>
                    </div>
                    <img src="images/strategic.png" className="lazyload  img-fluid" alt="Images" />
                  </a>
              </div>

              <div className="item web col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                <a href="images/xfusion.png" className="portfolio-item item-portrait isotope-item gsap-reveal-img " data-fancybox="gallery" data-caption="Modern Building">
                    <div className="overlay">
                      <span className="wrap-icon icon-photo"></span>
                      <div className="portfolio-item-content">
                        <h3>E-Sakel</h3>
                        <p>WordPress, Elementor</p>
                      </div>
                    </div>
                    <img src="images/xfusion.png" className="lazyload  img-fluid" alt="Images" />
                  </a>
              </div>

            </div>
            
          </div>


        </div>
      </div>


      <div className="unslate_co--section">
        <div className="container">
          {/* <div className="owl-carousel logo-slider">
            <div className="logo-v1 gsap-reveal">
              <img src="images/wordpress.png" alt="Image" className="img-fluid" />
            </div>
            <div className="logo-v1 gsap-reveal">
              <img src="images/css.png" alt="Image" className="img-fluid"/>
            </div>
            <div className="logo-v1 gsap-reveal">
              <img src="images/logo-paypal.png" alt="Image" className="img-fluid"/>
            </div>
            <div className="logo-v1 gsap-reveal">
              <img src="images/logo-adobe.png" alt="Image" className="img-fluid"/>
            </div>
          </div> */}
        </div>
      </div>


      <div className="unslate_co--section" id="about-section">
        <div className="container">
          
          <div className="section-heading-wrap text-center mb-5">
            <h2 className="heading-h2 text-center divider"><span className="gsap-reveal">About Me</span></h2>
            <span className="gsap-reveal">
            <img src="images/divider.png" alt="divider" width="76"/>
            </span>
          </div>
          

          <div className="row mt-5 justify-content-center align-items-center">
            <div className="col-lg-auto mb-5 mb-lg-0 align-self-start">
              <figure className="dotted-bg gsap-reveal-img ">
                <img src="images/new2.jpg" alt="Image" className="img-fluid"/>
              </figure>
            </div>
            <div className="col-lg-6 pr-lg-5">
              <h3 className="mb-4 heading-h3"><span className="gsap-reveal">We can make it together</span></h3>
              <p className="lead gsap-reveal">In a distant land, hidden beyond the reaches of civilization, far from the known realms of Vokalia and Consonantia, dwell the silent words, untouched by sight.</p>
              <p className="mb-4 gsap-reveal">In the hidden valleys, where the echoes of forgotten tales linger and the shadows dance with the whispers of old, resides the realm of untold narratives, far from the known realms of Vokalia and Consonantia.</p>
              <div className="App"> 
                <p className="gsap-reveal"><a href="/2023_RhesaAV_CV.pdf" download="2023_RhesaAV_CV.pdf" className="btn btn-outline-pill btn-custom-light">Download my CV</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="unslate_co--section" id="services-section">
        <div className="container">

          <div className="section-heading-wrap text-center mb-5">
            <h2 className="heading-h2 text-center divider"><span className="gsap-reveal">My Services</span></h2>
            <span className="gsap-reveal"><img src="images/divider.png" alt="divider" width="76"/></span>
            
          </div>

          <div className="row gutter-v3">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="feature-v1 fade-up" >
                <div className="wrap-icon mb-3">
                  <img src="images/svg/001-options.svg" alt="Image" width="45"/>
                </div>
                
                <h3>Digital <br/> Strategy</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. </p>
              </div> 
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="feature-v1" >
                <div className="wrap-icon mb-3">
                  <img src="images/svg/002-chat.svg" alt="Icon" width="45"/>
                </div>
                <h3>Web <br/> Design</h3>
                <p>A Skilled in crafting visually appealing and user-friendly websites through effective design principles. </p>
              </div> 
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="feature-v1" >
                <div className="wrap-icon mb-3">
                  <img src="images/svg/003-contact-book.svg" alt="Image" className="img-fluid" width="45"/>
                </div>
                <h3>User <br/> Experience</h3>
                <p>Focused on understanding user needs and behaviors to create intuitive and enjoyable digital experiences. </p>
              </div> 
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <div className="feature-v1" >
                <div className="wrap-icon mb-3">
                  <img src="images/svg/004-percentage.svg" alt="Image" width="45"/>
                </div>
                <h3>Web <br/> Development</h3>
                <p>Proficient in full-stack web development, with expertise in both front-end and back-end technologies. </p>
              </div> 
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="feature-v1" >
                <div className="wrap-icon mb-3">
                  <img src="images/svg/006-goal.svg" alt="Image" width="45"/>
                </div>
                <h3>WordPress <br/> Solutions</h3>
                <p>Experienced in extending WordPress functionality through custom plugin development and integration with third-party APIs. </p>
              </div> 
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="feature-v1" >
                <div className="wrap-icon mb-3">
                  <img src="images/svg/005-line-chart.svg" alt="Image" width="45"/>
                </div>
                <h3>UI/UX <br /> Buildings</h3>
                <p>Strong understanding of design principles, typography, color theory, and layout to create cohesive and visually appealing designs. </p>
              </div> 
            </div>

          </div>
        </div>
      </div>

      <div className="unslate_co--section section-counter" id="skills-section">
        <div className="container">
          <div className="section-heading-wrap text-center mb-5">
            <h2 className="heading-h2 text-center divider"><span className="gsap-reveal">My Skills</span></h2>
            <span className="gsap-reveal"><img src="images/divider.png" alt="divider" width="76"/></span>
          </div>


          <div className="row pt-5">
            <div className="col-6 col-sm-6 mb-5 mb-lg-0 col-md-6 col-lg-3" >
              <div className="counter-v1 text-center">
                <span className="number-wrap">
                  <span className="number number-counter" data-number="90">0</span>
                  <span className="append-text">%</span>
                </span>
                <span className="counter-label">WordPress</span>
              </div>
            </div>
            <div className="col-6 col-sm-6 mb-5 mb-lg-0 col-md-6 col-lg-3" >
              <div className="counter-v1 text-center">
                <span className="number-wrap">
                  <span className="number number-counter" data-number="99">0</span>
                  <span className="append-text">%</span>
                </span>
                <span className="counter-label">HTML/CSS</span>
              </div>
            </div>
            <div className="col-6 col-sm-6 mb-5 mb-lg-0 col-md-6 col-lg-3" >
              <div className="counter-v1 text-center">
                <span className="number-wrap">
                  <span className="number number-counter" data-number="85">0</span>
                  <span className="append-text">%</span>
                </span>
                <span className="counter-label">UI/UX</span>
              </div>
            </div>
            <div className="col-6 col-sm-6 mb-5 mb-lg-0 col-md-6 col-lg-3" >
              <div className="counter-v1 text-center">
                <span className="number-wrap">
                  <span className="number number-counter" data-number="85">0</span>
                  <span className="append-text">%</span>
                </span>
                <span className="counter-label">Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      =

      {/* <div className="unslate_co--section" id="testimonial-section">
        <div className="container">
          <div className="section-heading-wrap text-center mb-5">
            <h2 className="heading-h2 text-center divider"><span className="gsap-reveal">My Happy Clients</span></h2>
            <span className="gsap-reveal"><img src="images/divider.png" alt="divider" width="76"/></span>
          </div>
        </div>

        <div className="owl-carousel testimonial-slider" data-aos="fade-up">
          <div>
            <div className="testimonial-v1">
              <div className="testimonial-inner-bg">
                <span className="quote">&ldquo;</span>
                <blockquote>
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                </blockquote>
              </div>
              
              <div className="testimonial-author-info">
                <img src="images/person_man_1.jpg" alt="Image"/>
                <h3>Eric Ingram</h3>
                <span className="d-block position">Product Designer @facebook</span>
              </div>

            </div>
          </div>
          <div>
            <div className="testimonial-v1">
              <div className="testimonial-inner-bg">
                <span className="quote">&ldquo;</span>
                <blockquote>
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                </blockquote>
              </div>
              
              <div className="testimonial-author-info">
                <img src="images/person_man_2.jpg" alt="Image"/>
                <h3>Ryan Mullins</h3>
                <span className="d-block position">Product Designer @Shopify</span>
              </div>

            </div>
          </div>
          <div>
            <div className="testimonial-v1">
              <div className="testimonial-inner-bg">
                <span className="quote">&ldquo;</span>
                <blockquote>
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                </blockquote>
              </div>
              
              <div className="testimonial-author-info">
                <img src="images/person_woman_1.jpg" alt="Image"/>
                <h3>Erica Miller</h3>
                <span className="d-block position">Product Designer @Twitter</span>
              </div>

            </div>
          </div>
        </div>

      </div> */}


      {/* <div className="unslate_co--section" id="journal-section">
        <div className="container">
          <div className="section-heading-wrap text-center mb-5">
            <h2 className="heading-h2 text-center divider"><span className="gsap-reveal">My Journal</span></h2>
            <span className="gsap-reveal"><img src="images/divider.png" alt="divider" width="76"/></span>
          </div>

          
          <div className="row gutter-v4 align-items-stretch">
            <div className="col-sm-6 col-md-6 col-lg-8 blog-post-entry" >

              <a href="blog-single.html" className="grid-item blog-item w-100 h-100">
                <div className="overlay">
                  <div className="portfolio-item-content">
                    <h3>A Mounteering Guide For Beginners</h3>
                    <p className="post-meta">By Joefrey <span className="small">&bullet;</span> 5 mins read</p>
                  </div>
                </div>
                <img src="images/post_1.jpg" className="lazyload" alt="Image" />
              </a>


            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 blog-post-entry" >
              <a href="blog-single.html" className="grid-item blog-item w-100 h-100">
                <div className="overlay">
                  <div className="portfolio-item-content">
                    <h3>A Mounteering Guide For Beginners</h3>
                    <p className="post-meta">By Joefrey <span className="small">&bullet;</span> 5 mins read</p>
                  </div>
                </div>
                <img src="images/post_2.jpg" className="lazyload" alt="Image" />
              </a>
            </div>


            <div className="col-sm-6 col-md-6 col-lg-4 blog-post-entry" >

              <a href="blog-single.html" className="grid-item blog-item w-100 h-100">
                <div className="overlay">
                  <div className="portfolio-item-content">
                    <h3>A Mounteering Guide For Beginners</h3>
                    <p className="post-meta">By Joefrey <span className="small">&bullet;</span> 5 mins read</p>
                  </div>
                </div>
                <img src="images/post_3.jpg" className="lazyload" alt="Image" />
              </a>


            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 blog-post-entry" >
              <a href="blog-single.html" className="grid-item blog-item w-100 h-100">
                <div className="overlay">
                  <div className="portfolio-item-content">
                    <h3>A Mounteering Guide For Beginners</h3>
                    <p className="post-meta">By Joefrey <span className="small">&bullet;</span> 5 mins read</p>
                  </div>
                </div>
                <img src="images/post_4.jpg" className="lazyload" alt="Image" />
              </a>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-4 blog-post-entry" >
              <a href="blog-single.html" className="grid-item blog-item w-100 h-100">
                <div className="overlay">
                  <div className="portfolio-item-content">
                    <h3>A Mounteering Guide For Beginners</h3>
                    <p className="post-meta">By Joefrey <span className="small">&bullet;</span> 5 mins read</p>
                  </div>
                </div>
                <img src="images/post_5.jpg" className="lazyload" alt="" />
              </a>
            </div>


          </div>

        </div>
      </div> */}
      


      <div className="unslate_co--section" id="contact-section">
        <div className="container">
          <div className="section-heading-wrap text-center mb-5">
            <h2 className="heading-h2 text-center divider"><span className="gsap-reveal">Get In Touch</span></h2>
            <span className="gsap-reveal"><img src="images/divider.png" alt="divider" width="76"/></span>
          </div>


          
            
      {/* tes */} 
  
            <div className="row justify-content-between">
              <div className="col-md-4 d-flex justify-content-around">
                <div className="contact-info-v1">
                  <div className="gsap-reveal d-block">
                    <span className="d-block contact-info-label">Email</span>
                    <a href="mailto:rhesaalvin11@gmail.com" class="contact-info-val">rhesaalvin11@gmail.com</a>
                  </div>
                </div>
                <div className="contact-info-v1">
                  <div className="gsap-reveal d-block">
                    <span className="d-block contact-info-label">Whatsapp</span>
                    <a href="https://api.whatsapp.com/send?phone=085954555116" class="contact-info-val">+62 859 54555 116</a>
                  </div>
                </div>
                <div className="contact-info-v1">
                  <div className="gsap-reveal d-block">
                    <span className="d-block contact-info-label">Address</span>
                    <address className="contact-info-val"> Jl Pesantren Kwagean <br/> Kepung, Kediri 40593</address>
                  </div>
                </div>
              </div>
            </div>



          
        </div>
      </div>
      </div> 

      <footer className="unslate_co--footer unslate_co--section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              
              <div className="footer-site-logo"><a href="#">Find Me<span>.</span></a></div>

              <ul className="footer-site-social">
                <li><a href="https://www.facebook.com/alvin-valeriansyah">Facebook</a></li>
                
                <li><a href="https://www.instagram.com/rhesaav">Instagram</a></li>
                <li><a href="https://dribbble.com/rhesaav">Dribbble</a></li>
                <li><a href="https://www.linkedin.com/in/rhesa-alvin-valeriansyah-0985a6155/">Linkedin</a></li>
              </ul>

              <p className="site-copyright">
                
                
                
                
              
              </p>

            </div>
          </div>
        </div>
      </footer>

      
    </div>

    
    
    <div id="unslate_co--overlayer"></div>
    <div className="site-loader-wrap">
      <div className="site-loader"></div>
    </div>

    

  </div>
  );
}

export default App;
