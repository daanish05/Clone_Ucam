import Link from "next/link";
import Image from "next/image";

export default function Home(){
    return(
<>
  <title>Ucam — CCTV Services Website Template</title>
  <link rel="icon" href="images/icon.webp" type="image/gif" sizes="16x16" />
  <meta content="text/html;charset=utf-8" httpEquiv="Content-Type" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <meta content="Ucam — CCTV Services Website Template" name="description" />
  <meta content="" name="keywords" />
  <meta content="" name="author" />
  {/* CSS Files
    ================================================== */}
  <link
    href="css/bootstrap.min.css"
    rel="stylesheet"
    type="text/css"
    id="bootstrap"
  />
  <link href="css/plugins.css" rel="stylesheet" type="text/css" />
  <link href="css/swiper.css" rel="stylesheet" type="text/css" />
  <link href="css/style.css" rel="stylesheet" type="text/css" />
  <link href="css/coloring.css" rel="stylesheet" type="text/css" />
  {/* color scheme */}
  <link
    id="colors"
    href="css/colors/scheme-01.css"
    rel="stylesheet"
    type="text/css"
  />
  <div id="wrapper">
    <a href="#" id="back-to-top" />
    {/* page preloader begin */}
    {/* <div id="de-loader" /> */}
    {/* page preloader close */}
    {/* header begin */}
    <header className="transparent">
      <div id="topbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-between xs-hide">
                <div className="d-flex">
                  <div className="topbar-widget">
                    <a href="#">
                      <img
                        src="images/svg-white/bell.svg"
                        className=""
                        alt=""
                      />
                      Get 50% discount for new CCTV installation
                    </a>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="topbar-widget me-5">
                    <a href="#">
                      <img
                        src="images/svg-white/phone.svg"
                        className=""
                        alt=""
                      />
                      Call us: (123) 202-9296
                    </a>
                  </div>
                  <div className="topbar-widget">
                    <a href="#">
                      <img
                        src="images/svg-white/envelope.svg"
                        className=""
                        alt=""
                      />
                      Message us: contact@ucam-cctv.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                {/* logo begin */}
                <div id="logo">
                  <a href="index.html">
                    <img className="logo-main" src="images/logo.webp" alt="" />
                    <img
                      className="logo-scroll"
                      src="images/logo.webp"
                      alt=""
                    />
                    <img
                      className="logo-mobile"
                      src="images/logo.webp"
                      alt=""
                    />
                  </a>
                </div>
                {/* logo close */}
              </div>
              <div className="de-flex-col header-col-mid">
                <ul id="mainmenu">
                  <li>
                    <a className="menu-item" href="index.html">
                      Home
                    </a>
                    <ul className="mega">
                      <li>
                        <div className="container">
                          <div className="sb-menu p-4">
                            <div className="row g-4">
                              <div className="col-lg-2 col-sm-6 text-center">
                                <div className="relative hover text-center overflow-hidden soft-shadow">
                                  <a className="p-0" href="homepage-6.html">
                                    <img
                                      src="images/demo/homepage-6.webp"
                                      className="w-100 relative hover-scale-1-1"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h6 className="mt-3">New: Homepage 6</h6>
                              </div>
                              <div className="col-lg-2 col-sm-6 text-center">
                                <div className="relative hover text-center overflow-hidden soft-shadow">
                                  <a className="p-0" href="homepage-5.html">
                                    <img
                                      src="images/demo/homepage-5.webp"
                                      className="w-100 relative hover-scale-1-1"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h6 className="mt-3">New: Homepage 5</h6>
                              </div>
                              <div className="col-lg-2 col-sm-6 text-center">
                                <div className="relative hover text-center overflow-hidden soft-shadow">
                                  <a className="p-0" href="index.html">
                                    <img
                                      src="images/demo/homepage-1.webp"
                                      className="w-100 relative hover-scale-1-1"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h6 className="mt-3">Homepage 1</h6>
                              </div>
                              <div className="col-lg-2 col-sm-6 text-center">
                                <div className="relative hover text-center overflow-hidden soft-shadow">
                                  <a className="p-0" href="homepage-2.html">
                                    <img
                                      src="images/demo/homepage-2.webp"
                                      className="w-100 relative hover-scale-1-1"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h6 className="mt-3">Homepage 2</h6>
                              </div>
                              <div className="col-lg-2 col-sm-6 text-center">
                                <div className="relative hover text-center overflow-hidden soft-shadow">
                                  <a className="p-0" href="homepage-3.html">
                                    <img
                                      src="images/demo/homepage-3.webp"
                                      className="w-100 relative hover-scale-1-1"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h6 className="mt-3">Homepage 3</h6>
                              </div>
                              <div className="col-lg-2 col-sm-6 text-center">
                                <div className="relative hover text-center overflow-hidden soft-shadow">
                                  <a className="p-0" href="homepage-4.html">
                                    <img
                                      src="images/demo/homepage-4.webp"
                                      className="w-100 relative hover-scale-1-1"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h6 className="mt-3">Homepage 4</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="menu-item" href="services.html">
                      Services
                    </a>
                    <ul>
                      <li>
                        <a className="menu-item" href="services.html">
                          All Services 1
                        </a>
                      </li>
                      <li>
                        <a className="menu-item" href="services-2.html">
                          All Services 2
                        </a>
                      </li>
                      <li>
                        <a className="menu-item" href="service-single.html">
                          Service Single
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="menu-item" href="brands.html">
                      Brands
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="projects.html">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="blog.html">
                      Blog
                    </a>
                    <ul>
                      <li>
                        <a className="menu-item" href="blog.html">
                          Blog Default
                        </a>
                      </li>
                      <li>
                        <a className="menu-item" href="blog-2.html">
                          Blog Style 2
                        </a>
                      </li>
                      <li>
                        <a className="menu-item" href="blog-single.html">
                          Blog Single
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="menu-item" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="de-flex-col">
                <div className="menu_side_area">
                  <a className="btn-main fx-slide" href="contact.html">
                    <span>Get a Free Quote</span>
                  </a>
                  <span id="menu-btn" />
                </div>
                <div id="btn-extra" className="img">
                  <img src="images/ui/dots.svg" className="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* header close */}
    {/* content begin */}
    <div className="no-bottom no-top" id="content">
      <div id="top" />
      <section className="text-light no-top no-bottom position-relative overflow-hidden z-1000">
        <div className="v-center">
          <div className="swiper">
            {/* Additional required wrapper */}
            <div className="swiper-wrapper">
              {/* Slides */}
              <div className="swiper-slide">
                <div
                  className="swiper-inner"
                  data-bgimage="url(images/background/3.webp)"
                >
                  <div className="sw-caption">
                    <div
                      className="container relative z-2"
                      data-0="opacity:1"
                      data-300="opacity:0"
                    >
                      <div className="row align-items-center g-4">
                        <div className="col-lg-6">
                          <div className="relative z-2">
                            <h3
                              className="subtitle s2 mb-3 wow fadeInUp"
                              data-wow-delay=".0s"
                            >
                              Swann
                            </h3>
                            <h1 className="mb-3 cam-style">
                              Crystal Clear View, Night Vision, Smart Motion
                              <span />
                              <span />
                              <span />
                              <span />
                            </h1>
                            <a
                              className="btn-main btn-line fx-slide mb10 mb-3"
                              href="contact.html"
                            >
                              <span>Learn More</span>
                            </a>
                            &nbsp;&nbsp;
                            <a
                              className="btn-main fx-slide mb10 mb-3"
                              href="contact.html"
                            >
                              <span>Buy Now</span>
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="relative">
                            <img
                              src="images/products/1.webp"
                              className="w-100 relative z-2"
                              alt=""
                            />
                            <div className="abs w-70 h-70 abs-centered" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slides */}
              {/* Slides */}
              <div className="swiper-slide">
                <div
                  className="swiper-inner"
                  data-bgimage="url(images/background/3.webp)"
                >
                  <div className="sw-caption">
                    <div
                      className="container relative z-2"
                      data-0="opacity:1"
                      data-300="opacity:0"
                    >
                      <div className="row align-items-center g-4">
                        <div className="col-lg-6">
                          <div className="relative z-2">
                            <h3
                              className="subtitle s2 mb-3 wow fadeInUp"
                              data-wow-delay=".0s"
                            >
                              Honeywell
                            </h3>
                            <h1 className="mb-3 cam-style">
                              Crystal Clear View, Night Vision, Smart Motion
                              <span />
                              <span />
                              <span />
                              <span />
                            </h1>
                            <a
                              className="btn-main btn-line fx-slide mb10 mb-3"
                              href="contact.html"
                            >
                              <span>Learn More</span>
                            </a>
                            &nbsp;&nbsp;
                            <a
                              className="btn-main fx-slide mb10 mb-3"
                              href="contact.html"
                            >
                              <span>Buy Now</span>
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="relative">
                            <img
                              src="images/products/2.webp"
                              className="w-100 relative z-2"
                              alt=""
                            />
                            <div className="abs w-70 h-70 abs-centered" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slides */}
              {/* Slides */}
              <div className="swiper-slide">
                <div
                  className="swiper-inner"
                  data-bgimage="url(images/background/3.webp)"
                >
                  <div className="sw-caption">
                    <div
                      className="container relative z-2"
                      data-0="opacity:1"
                      data-300="opacity:0"
                    >
                      <div className="row align-items-center g-4">
                        <div className="col-lg-6">
                          <div className="relative z-2">
                            <h3
                              className="subtitle s2 mb-3 wow fadeInUp"
                              data-wow-delay=".0s"
                            >
                              Hikvision
                            </h3>
                            <h1 className="mb-3 cam-style">
                              Crystal Clear View, Night Vision, Smart Motion
                              <span />
                              <span />
                              <span />
                              <span />
                            </h1>
                            <a
                              className="btn-main btn-line fx-slide mb10 mb-3"
                              href="contact.html"
                            >
                              <span>Learn More</span>
                            </a>
                            &nbsp;&nbsp;
                            <a
                              className="btn-main fx-slide mb10 mb-3"
                              href="contact.html"
                            >
                              <span>Buy Now</span>
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="relative">
                            <img
                              src="images/products/3.webp"
                              className="w-100 relative z-2"
                              alt=""
                            />
                            <div className="abs w-70 h-70 abs-centered" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slides */}
            </div>
            {/* If we need pagination */}
            <div className="swiper-pagination" />
            {/* If we need navigation buttons */}
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </div>
      </section>
      <section className="pt-40 pb-40 bg-light mt90 bg-dark">
        <div className="wow fadeInRight d-flex">
          <div className="de-marquee-list relative wow">
            <img src="images/logo-brands/1.webp" className="w-300px" alt="" />
            <img src="images/logo-brands/2.webp" className="w-300px" alt="" />
            <img src="images/logo-brands/3.webp" className="w-300px" alt="" />
            <img src="images/logo-brands/4.webp" className="w-300px" alt="" />
            <img src="images/logo-brands/5.webp" className="w-300px" alt="" />
            <img src="images/logo-brands/6.webp" className="w-300px" alt="" />
          </div>
        </div>
      </section>
      <section className="overflow-hidden">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-12">
              <div
                className="subtitle s2 mb-0 wow fadeInUp"
                data-wow-delay=".0s"
              >
                About Us
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="wow fadeInUp" data-wow-delay=".2s">
                Unmatched Surveillance, Unrivaled Protection
              </h2>
            </div>
            <div className="col-lg-6 wow fadeInUp">
              <p>
                Pariatur nulla et laboris ut nisi aute eu cillum aute nulla anim
                consectetur proident eu qui elit dolor ut sunt occaecat eiusmod
                aliquip magna incididunt consequat reprehenderit incididunt
                dolore ad culpa enim et exercitation ex do magna.
              </p>
            </div>
          </div>
          <div className="row bo g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInRight"
              data-wow-delay="0s"
            >
              <div className="relative bg-grey p-40 h-100">
                <img
                  src="images/svg-color/cctv.svg"
                  className="w-70px mb-3"
                  alt=""
                />
                <h4>Installation</h4>
                <p>
                  Setting up cameras in strategic locations to ensure optimal
                  coverage.
                </p>
                <div className="triangle-bottomright-white" />
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInRight"
              data-wow-delay=".2s"
            >
              <div className="relative bg-grey p-40 h-100">
                <img
                  src="images/svg-color/networking.svg"
                  className="w-70px mb-3"
                  alt=""
                />
                <h4>System Design</h4>
                <p>
                  Customized security system planning to meet specific
                  requirements.
                </p>
                <div className="triangle-bottomright-white" />
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInRight"
              data-wow-delay=".4s"
            >
              <div className="relative bg-grey p-40 h-100">
                <img
                  src="images/svg-color/setting.svg"
                  className="w-70px mb-3"
                  alt=""
                />
                <h4>Maintenance</h4>
                <p>
                  Regular servicing and fixing of camera systems to ensure
                  continuous functionality.
                </p>
                <div className="triangle-bottomright-white" />
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInRight"
              data-wow-delay=".6s"
            >
              <div className="relative bg-grey p-40 h-100">
                <img
                  src="images/svg-color/monitor.svg"
                  className="w-70px mb-3"
                  alt=""
                />
                <h4>Monitoring</h4>
                <p>
                  Real-time monitoring of security cameras by professionals or
                  automated systems.
                </p>
                <div className="triangle-bottomright-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark text-light">
        <div className="sw-overlay op-6" />
        <div className="container">
          <div className="row justify-content-center g-4 gx-5 relative z-index-1000">
            <div className="col-lg-8 text-center">
              <div className="subtitle wow fadeInUp mb-3">CCTV Specialist</div>
              <h2 className="mb20 wow fadeInUp" data-wow-delay=".2s">
                At Ucam, we specialize in providing top-tier CCTV surveillance
                solutions designed to keep your property safe and secure.
              </h2>
              <a className="btn-main btn-line fx-slide" href="contact.html">
                <span>Get a Free Quote</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-color pt60 pb60">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInRight"
              data-wow-delay=".2s"
            >
              <a
                href="contact.html"
                className="d-block relative bg-dark-2 text-light p-4 rounded-1"
              >
                <i className="id-color p-3 rounded-1 fs-56 icofont-phone-circle" />
                <div className="absolute abs-middle ms-90px">
                  <span>Emergency Service</span>
                  <h4>Call (123) 202-9296</h4>
                </div>
              </a>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInRight"
              data-wow-delay=".4s"
            >
              <a
                href="contact.html"
                className="d-block relative bg-dark-2 text-white p-4 rounded-1"
              >
                <i className="id-color p-3 rounded-1 fs-56 icofont-calculator" />
                <div className="absolute abs-middle ms-90px">
                  <span>Request For</span>
                  <h4>Free Estimation</h4>
                </div>
              </a>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInRight"
              data-wow-delay=".6s"
            >
              <a
                href="projects.html"
                className="d-block relative bg-dark-2 text-white p-4 rounded-1"
              >
                <i className="id-color p-3 rounded-1 fs-56 icofont-image" />
                <div className="absolute abs-middle ms-90px">
                  <span>Discover</span>
                  <h4>Latest Projects</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-lg-6 wow fadeInRight">
                  <div className="relative">
                    <img src="images/misc/1.webp" className="w-100" alt="" />
                    <div className="triangle-bottomright-white z-2" />
                    <div className="de-overlay-gradient-color h-50 top-50" />
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInRight" data-wow-delay=".3s">
                  <div className="relative">
                    <img src="images/misc/2.webp" className="w-100" alt="" />
                    <div className="triangle-bottomright-white z-2" />
                    <div className="de-overlay-gradient-color h-50 top-50" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ms-lg-4">
                <div
                  className="subtitle s2 mb-3 wow fadeInUp"
                  data-wow-delay=".0s"
                >
                  Why Choose Us
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Protecting What Matters, Day and Night
                </h2>
                <p className="wow fadeIn" data-wow-delay=".4s">
                  Ex esse ex cupidatat magna dolor ad deserunt velit consequat
                  dolore minim velit enim velit sed incididunt minim aliqua
                  veniam labore nulla nostrud dolor dolore.
                </p>
                <div className="row g-4">
                  <div className="col-lg-8 col-md-12 col-sm-6">
                    <ul
                      className="ul-style-2 fw-600 mb-4 wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <li>Expertise You Can Trust</li>
                      <li>Custom Solutions for Every Budget</li>
                      <li>24/7 Support and Maintenance</li>
                      <li>Comprehensive Security Solutions</li>
                    </ul>
                  </div>
                </div>
                <a
                  className="btn-main fx-slide mb10 mb-3 wow fadeIn"
                  href="contact.html"
                >
                  <span>Get a Free Quote</span>
                </a>
              </div>
            </div>
          </div>
          <div className="spacer-single" />
          <div className="row g-4">
            <div className="col-md-3 col-sm-6 mb-sm-30">
              <div
                className="de_count text-center fs-15 wow fadeInRight"
                data-wow-delay=".0s"
              >
                <h3 className="fs-48 mb-1">
                  <span className="timer" data-to={8240} data-speed={3000}>
                    0
                  </span>
                </h3>
                <div className="fs-15">Hours of Works</div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-sm-30">
              <div
                className="de_count text-center fs-15 wow fadeInRight"
                data-wow-delay=".2s"
              >
                <h3 className="fs-48 mb-1">
                  <span className="timer" data-to={315} data-speed={3000}>
                    0
                  </span>
                </h3>
                <div className="fs-15">Projects Done</div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-sm-30">
              <div
                className="de_count text-center fs-15 wow fadeInRight"
                data-wow-delay=".4s"
              >
                <h3 className="fs-48 mb-1">
                  <span className="timer" data-to={250} data-speed={3000}>
                    0
                  </span>
                </h3>
                <div className="fs-15">Satisfied Customers</div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-sm-30">
              <div
                className="de_count text-center fs-15 wow fadeInRight"
                data-wow-delay=".6s"
              >
                <h3 className="fs-48 mb-1">
                  <span className="timer" data-to={32} data-speed={3000}>
                    0
                  </span>
                </h3>
                <div className="fs-15">Awards Winning</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark text-light">
        <div className="container">
          <div className="row g-4 mb-4">
            <div className="col-lg-6 offset-lg-3 text-center">
              <div className="subtitle wow fadeInUp mb-3">Testimonials</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">
                Our Happy Customers
              </h2>
            </div>
          </div>
          <div className="row g-4">
            <div
              className="owl-carousel owl-theme wow fadeInUp"
              id="testimonial-carousel"
            >
              <div className="item">
                <div className="bg-dark-2 p-40 relative text-light text-center">
                  <div className="text-center">
                    <img
                      className="d-inline w-80px rounded-1"
                      alt=""
                      src="images/testimonial/1.webp"
                    />
                  </div>
                  <div className="mt-3 fw-600">
                    Michael S.<span>Customer</span>
                  </div>
                  <div className="de-rating-ext mb-3">
                    <span className="d-stars">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </span>
                  </div>
                  <p className="mb-0">
                    "The system is easy to use, the image quality is crystal
                    clear, and their customer service has been exceptional.
                    Highly recommend!"
                  </p>
                  <div className="triangle-bottomright-dark" />
                </div>
              </div>
              <div className="item">
                <div className="bg-dark-2 p-40 relative text-light text-center">
                  <div className="text-center">
                    <img
                      className="d-inline w-80px rounded-1"
                      alt=""
                      src="images/testimonial/2.webp"
                    />
                  </div>
                  <div className="mt-3 fw-600">
                    Robert L.<span>Customer</span>
                  </div>
                  <div className="de-rating-ext mb-3">
                    <span className="d-stars">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </span>
                  </div>
                  <p className="mb-0">
                    "The system is easy to use, the image quality is crystal
                    clear, and their customer service has been exceptional.
                    Highly recommend!"
                  </p>
                  <div className="triangle-bottomright-dark" />
                </div>
              </div>
              <div className="item">
                <div className="bg-dark-2 p-40 relative text-light text-center">
                  <div className="text-center">
                    <img
                      className="d-inline w-80px rounded-1"
                      alt=""
                      src="images/testimonial/3.webp"
                    />
                  </div>
                  <div className="mt-3 fw-600">
                    Jake M.<span>Customer</span>
                  </div>
                  <div className="de-rating-ext mb-3">
                    <span className="d-stars">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </span>
                  </div>
                  <p className="mb-0">
                    "The system is easy to use, the image quality is crystal
                    clear, and their customer service has been exceptional.
                    Highly recommend!"
                  </p>
                  <div className="triangle-bottomright-dark" />
                </div>
              </div>
              <div className="item">
                <div className="bg-dark-2 p-40 relative text-light text-center">
                  <div className="text-center">
                    <img
                      className="d-inline w-80px rounded-1"
                      alt=""
                      src="images/testimonial/4.webp"
                    />
                  </div>
                  <div className="mt-3 fw-600">
                    Alex P.<span>Customer</span>
                  </div>
                  <div className="de-rating-ext mb-3">
                    <span className="d-stars">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </span>
                  </div>
                  <p className="mb-0">
                    "The system is easy to use, the image quality is crystal
                    clear, and their customer service has been exceptional.
                    Highly recommend!"
                  </p>
                  <div className="triangle-bottomright-dark" />
                </div>
              </div>
              <div className="item">
                <div className="bg-dark-2 p-40 relative text-light text-center">
                  <div className="text-center">
                    <img
                      className="d-inline w-80px rounded-1"
                      alt=""
                      src="images/testimonial/5.webp"
                    />
                  </div>
                  <div className="mt-3 fw-600">
                    Carlos R.<span>Customer</span>
                  </div>
                  <div className="de-rating-ext mb-3">
                    <span className="d-stars">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </span>
                  </div>
                  <p className="mb-0">
                    "The system is easy to use, the image quality is crystal
                    clear, and their customer service has been exceptional.
                    Highly recommend!"
                  </p>
                  <div className="triangle-bottomright-dark" />
                </div>
              </div>
              <div className="item">
                <div className="bg-dark-2 p-40 relative text-light text-center">
                  <div className="text-center">
                    <img
                      className="d-inline w-80px rounded-1"
                      alt=""
                      src="images/testimonial/6.webp"
                    />
                  </div>
                  <div className="mt-3 fw-600">
                    Edward B.<span>Customer</span>
                  </div>
                  <div className="de-rating-ext mb-3">
                    <span className="d-stars">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </span>
                  </div>
                  <p className="mb-0">
                    "The system is easy to use, the image quality is crystal
                    clear, and their customer service has been exceptional.
                    Highly recommend!"
                  </p>
                  <div className="triangle-bottomright-dark" />
                </div>
              </div>
              <div className="item">
                <div className="bg-dark-2 p-40 relative text-light text-center">
                  <div className="text-center">
                    <img
                      className="d-inline w-80px rounded-1"
                      alt=""
                      src="images/testimonial/7.webp"
                    />
                  </div>
                  <div className="mt-3 fw-600">
                    Daniel H.<span>Customer</span>
                  </div>
                  <div className="de-rating-ext mb-3">
                    <span className="d-stars">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </span>
                  </div>
                  <p className="mb-0">
                    "The system is easy to use, the image quality is crystal
                    clear, and their customer service has been exceptional.
                    Highly recommend!"
                  </p>
                  <div className="triangle-bottomright-dark" />
                </div>
              </div>
              <div className="item">
                <div className="bg-dark-2 p-40 relative text-light text-center">
                  <div className="text-center">
                    <img
                      className="d-inline w-80px rounded-1"
                      alt=""
                      src="images/testimonial/8.webp"
                    />
                  </div>
                  <div className="mt-3 fw-600">
                    Bryan G.<span>Customer</span>
                  </div>
                  <div className="de-rating-ext mb-3">
                    <span className="d-stars">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </span>
                  </div>
                  <p className="mb-0">
                    "The system is easy to use, the image quality is crystal
                    clear, and their customer service has been exceptional.
                    Highly recommend!"
                  </p>
                  <div className="triangle-bottomright-dark" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 text-center">
              <div className="subtitle wow fadeInUp mb-3">Do you have</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">
                Any Questions
              </h2>
            </div>
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-lg-12">
              <div className="accordion s2 wow fadeInUp">
                <div className="accordion-section">
                  <div
                    className="accordion-section-title"
                    data-tab="#accordion-a1"
                  >
                    What is the installation process for CCTV?
                  </div>
                  <div className="accordion-section-content" id="accordion-a1">
                    The installation process generally includes:
                    <ol>
                      <li>Site assessment to determine camera placement.</li>
                      <li>
                        Running necessary cabling for power and data (for wired
                        systems).
                      </li>
                      <li>Mounting cameras and positioning them properly.</li>
                      <li>
                        Setting up recording devices (DVR/NVR) and configuring
                        software for monitoring and storage.
                      </li>
                    </ol>
                  </div>
                  <div
                    className="accordion-section-title"
                    data-tab="#accordion-a2"
                  >
                    How many cameras do I need?
                  </div>
                  <div className="accordion-section-content" id="accordion-a2">
                    The number of cameras depends on the size of the area to be
                    covered and the level of security required. For a small
                    home, 2–4 cameras may suffice, while large commercial
                    properties may require dozens.
                  </div>
                  <div
                    className="accordion-section-title"
                    data-tab="#accordion-a3"
                  >
                    Can I use CCTV cameras at night?
                  </div>
                  <div className="accordion-section-content" id="accordion-a3">
                    Yes, many CCTV cameras come equipped with infrared (IR) LEDs
                    for night vision, allowing them to capture footage even in
                    complete darkness.
                  </div>
                  <div
                    className="accordion-section-title"
                    data-tab="#accordion-a4"
                  >
                    What is motion detection in CCTV cameras?
                  </div>
                  <div className="accordion-section-content" id="accordion-a4">
                    Motion detection triggers the camera to start recording or
                    send an alert when movement is detected. This feature helps
                    save storage space and makes it easier to review important
                    events.
                  </div>
                  <div
                    className="accordion-section-title"
                    data-tab="#accordion-a5"
                  >
                    Is there maintenance required for CCTV systems?
                  </div>
                  <div className="accordion-section-content" id="accordion-a5">
                    Yes, periodic maintenance includes cleaning camera lenses,
                    ensuring connections are secure, checking for firmware
                    updates, and ensuring the recording devices are functioning
                    properly. Regular maintenance helps ensure reliable
                    performance.
                  </div>
                  <div
                    className="accordion-section-title"
                    data-tab="#accordion-a6"
                  >
                    Are CCTV cameras weatherproof?
                  </div>
                  <div className="accordion-section-content" id="accordion-a6">
                    Many CCTV cameras are designed to be weatherproof and can be
                    installed outdoors. Look for cameras with an IP66 or IP67
                    rating, which means they are resistant to dust and water.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark text-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 offset-lg-3 text-center">
              <div className="subtitle wow fadeInUp mb-3">Stay Update</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">
                Our Blog
              </h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3">
              <div className="overflow-hidden">
                <div className="hover relative rounded-1 overflow-hidden">
                  <div className="abs z-2 bg-color text-white p-3 pb-2 m-4 text-center fw-600">
                    <h4 className="fs-36 mb-0 lh-1">20</h4>
                    <span>Jun</span>
                  </div>
                  <img
                    src="images/news/1.webp"
                    className="w-100 hover-scale-1-1"
                    alt=""
                  />
                  <a
                    href="blog-single.html"
                    className="d-block abs w-100 h-100 top-0 start-0"
                  />
                </div>
                <div className="p-40 bg-dark-2 relative">
                  <h4>
                    <a className="text-white" href="blog-single.html">
                      Smart Security Cameras: Shaping the Future of Surveillance
                    </a>
                  </h4>
                  <div className="triangle-bottomright-dark" />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="overflow-hidden">
                <div className="hover relative rounded-1 overflow-hidden">
                  <div className="abs z-2 bg-color text-white p-3 pb-2 m-4 text-center fw-600">
                    <h4 className="fs-36 mb-0 lh-1">19</h4>
                    <span>Jun</span>
                  </div>
                  <img
                    src="images/news/2.webp"
                    className="w-100 hover-scale-1-1"
                    alt=""
                  />
                  <a
                    href="blog-single.html"
                    className="d-block abs w-100 h-100 top-0 start-0"
                  />
                </div>
                <div className="p-40 bg-dark-2 relative">
                  <h4>
                    <a className="text-white" href="blog-single.html">
                      How Security Camera Footage is Solving Major Crimes
                    </a>
                  </h4>
                  <div className="triangle-bottomright-dark" />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="overflow-hidden">
                <div className="hover relative rounded-1 overflow-hidden">
                  <div className="abs z-2 bg-color text-white p-3 pb-2 m-4 text-center fw-600">
                    <h4 className="fs-36 mb-0 lh-1">18</h4>
                    <span>Jun</span>
                  </div>
                  <img
                    src="images/news/3.webp"
                    className="w-100 hover-scale-1-1"
                    alt=""
                  />
                  <a
                    href="blog-single.html"
                    className="d-block abs w-100 h-100 top-0 start-0"
                  />
                </div>
                <div className="p-40 bg-dark-2 relative">
                  <h4>
                    <a className="text-white" href="blog-single.html">
                      The Growing Role of Security Cameras in Public Safety
                    </a>
                  </h4>
                  <div className="triangle-bottomright-dark" />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="overflow-hidden">
                <div className="hover relative rounded-1 overflow-hidden">
                  <div className="abs z-2 bg-color text-white p-3 pb-2 m-4 text-center fw-600">
                    <h4 className="fs-36 mb-0 lh-1">17</h4>
                    <span>Jun</span>
                  </div>
                  <img
                    src="images/news/4.webp"
                    className="w-100 hover-scale-1-1"
                    alt=""
                  />
                  <a
                    href="blog-single.html"
                    className="d-block abs w-100 h-100 top-0 start-0"
                  />
                </div>
                <div className="p-40 bg-dark-2 relative">
                  <h4>
                    <a className="text-white" href="blog-single.html">
                      Privacy Concerns Rise with Increased Security Cameras Use
                    </a>
                  </h4>
                  <div className="triangle-bottomright-dark" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    {/* content close */}
    {/* footer begin */}
    <footer>
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-4 col-sm-6">
            <img src="images/logo.webp" className="w-150px" alt="" />
            <div className="spacer-20" />
            <p>
              Keep your home or business safe with CCTV systems designed to
              provide 24/7 surveillance and peace of mind. Our expert team
              offers tailored security solutions, from installation to remote
              monitoring, ensuring your property is always protected.{" "}
            </p>
            <div className="social-icons mb-sm-30">
              <a href="#">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fa-brands fa-x-twitter" />
              </a>
              <a href="#">
                <i className="fa-brands fa-discord" />
              </a>
              <a href="#">
                <i className="fa-brands fa-tiktok" />
              </a>
              <a href="#">
                <i className="fa-brands fa-youtube" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 order-lg-1 order-sm-2">
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <div className="widget">
                  <h5>Company</h5>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="services">Our Services</a>
                    </li>
                    <li>
                      <a href="projects.html">Projects</a>
                    </li>
                    <li>
                      <a href="contact.html">Get a Free Quote</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="widget">
                  <h5>Our Services</h5>
                  <ul>
                    <li>
                      <a href="services.html">System Consultation</a>
                    </li>
                    <li>
                      <a href="services.html">Installation Services</a>
                    </li>
                    <li>
                      <a href="services.html">System Configuration</a>
                    </li>
                    <li>
                      <a href="services.html">Monitoring Services</a>
                    </li>
                    <li>
                      <a href="services.html">Maintenance</a>
                    </li>
                    <li>
                      <a href="services.html">Storage and Backup</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 order-lg-2 order-sm-1">
            <div className="widget">
              <div className="fw-bold text-white">
                <i className="icofont-clock-time me-2 id-color" />
                We're Open
              </div>
              Monday - Saturday 08.00 - 18.00
              <div className="spacer-20" />
              <div className="fw-bold text-white">
                <i className="icofont-location-pin me-2 id-color" />
                Workshop Location
              </div>
              100 S Main St, New York, NY
              <div className="spacer-20" />
              <div className="fw-bold text-white">
                <i className="icofont-envelope me-2 id-color" />
                Send a Message
              </div>
              contact@ucam-cctv.com
            </div>
          </div>
        </div>
      </div>
      <div className="subfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex">
                <div className="de-flex-col">
                  Copyright 2025 - Ucam by Designesia
                </div>
                <ul className="menu-simple">
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* footer close */}
  </div>
  {/* overlay content begin */}
  <div id="extra-wrap" className="text-light">
    <div id="btn-close">
      <span />
      <span />
    </div>
    <div id="extra-content">
      <img src="images/logo.webp" className="w-150px" alt="" />
      <div className="spacer-30-line" />
      <h5 className="mb-3">Our Services</h5>
      <ul className="ul-style-2">
        <li>
          <a href="services.html">System Consultation</a>
        </li>
        <li>
          <a href="services.html">Installation Services</a>
        </li>
        <li>
          <a href="services.html">System Configuration</a>
        </li>
        <li>
          <a href="services.html">Monitoring Services</a>
        </li>
        <li>
          <a href="services.html">Maintenance</a>
        </li>
        <li>
          <a href="services.html">Storage and Backup</a>
        </li>
      </ul>
      <div className="spacer-30-line" />
      <h5>Contact Us</h5>
      <div>
        <i className="icofont-clock-time me-2" />
        Monday - Saturday 08.00 - 18.00
      </div>
      <div>
        <i className="icofont-location-pin me-2" />
        100 S Main St, New York,{" "}
      </div>
      <div>
        <i className="icofont-envelope me-2" />
        contact@ucam-cctv.com
      </div>
      <div className="spacer-30-line" />
      <h5>About Us</h5>
      <p>
        Keep your home or business safe with CCTV systems designed to provide
        24/7 surveillance and peace of mind. Our expert team offers tailored
        security solutions, from installation to remote monitoring, ensuring
        your property is always protected.
      </p>
      <div className="social-icons">
        <a href="#">
          <i className="fa-brands fa-facebook-f" />
        </a>
        <a href="#">
          <i className="fa-brands fa-x-twitter" />
        </a>
        <a href="#">
          <i className="fa-brands fa-instagram" />
        </a>
        <a href="#">
          <i className="fa-brands fa-youtube" />
        </a>
        <a href="#">
          <i className="fa-brands fa-whatsapp" />
        </a>
      </div>
    </div>
  </div>
  {/* overlay content end */}
  {/* Javascript Files
    ================================================== */}
</>

    );
}