import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero2.png";
import { dataSwiper, newestCourse } from "../data";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import FaqComponent from "../components/FaqComponent";

const HomePage = () => {
  let navigate = useNavigate();
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-4 animate__animated animate__fadeInUp">
                Find <br />
                Your <span>Hidden Talent</span> With Us!
              </h1>
              <p className="mb-4 animate__animated animate__fadeInUp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo non
                molestias quidem voluptatem eum architecto!
              </p>
              <button
                className="btn btn-danger btn-lg rounded-5 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp"
                onClick={() => navigate("/course")}
              >
                Check our Course
              </button>
              <button className="btn btn-outline-danger btn-lg rounded-5 mb-xs-0 mb-2 animate__animated animate__fadeInUp">
                Best Deal Course!
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img
                src={HeroImage}
                alt="hero-img"
                className="animate__animated animate__fadeInUp"
              />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="course w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Newest Course</h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
          <Row>
            {newestCourse.map((course) => {
              return (
                <Col
                  key={course.id}
                  className="shadow rounded"
                  data-aos="fade-up"
                  data-aos-duation="1000"
                  data-aos-delay={course.delay}
                >
                  <img
                    src={course.image}
                    alt="course-image"
                    className="w-100 mb-5 rounded-top"
                  />
                  <div className="star mb-2 px-3">
                    <i className={course.star1}></i>
                    <i className={course.star2}></i>
                    <i className={course.star3}></i>
                    <i className={course.star4}></i>
                    <i className={course.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3">{course.title}</h5>
                  <div className="desc d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary fw-bold">{course.price}</p>
                    <button className="btn btn-danger rounded-4">
                      {course.buy}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col
              className="text-center pt-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <button
                className="btn btn-success rounded-4 btn-lg"
                onClick={() => navigate("/course")}
              >
                All Courses<i className="fa-solid fa-chevron-right ms-2"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimonial py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5">Testimonials</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow-sm">
                    <p className="desc">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="image" />
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>

      {/* FAQ Section */}
      <FaqComponent />
    </div>
  );
};

export default HomePage;
