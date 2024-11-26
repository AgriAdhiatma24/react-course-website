import { Col, Container, Row } from "react-bootstrap";
import { allCourses } from "../data";
import FaqComponent from "../components/FaqComponent";

const CoursePage = () => {
  return (
    <div className="course-page">
      <div className="course min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">
                All Courses
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
          <Row>
            {allCourses.map((course) => {
              return (
                <Col
                  key={course.id}
                  className="shadow rounded"
                  data-aos="fade-up"
                  data-aos-duration="1000"
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
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default CoursePage;
