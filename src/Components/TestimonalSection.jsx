import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaStar } from 'react-icons/fa';

const TestimonialSection = () => {
  return (
    <>
    {/* Impact Carousel */}
      <section id="highlights" className="py-5 bg-white section-padd sec">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">
            What our users are saying
          </h2>

          <div id="impactCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            <div className="carousel-inner">
              {[
                { img: "https://images.unsplash.com/photo-1665586510539-cc2a12a54347?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "10,000+ Students Reached", desc: "Providing quality education to underserved communities across Africa.", name: "David J." },
                { img: "https://images.unsplash.com/flagged/photo-1579133311477-9121405c78dd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "500+ Teachers Trained", desc: "Empowering educators with AI-driven tools and offline learning methods.", name: "Anthony J." },
                { img: "https://images.unsplash.com/photo-1668965450077-1d23194b5f86?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Improved Exam Results", desc: "Students using SmartEd have shown 30% better results in WAEC/JAMB.", name: "John A." },
                { img: "https://images.unsplash.com/photo-1666281269793-da06484657e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "100+ Coding Workshops", desc: "Hands-on workshops teaching programming and problem-solving skills.", name: "John J." },
                { img: "https://images.unsplash.com/photo-1666281179585-2775d4a8d81c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "ID Camps & Bootcamps", desc: "Organized intensive learning camps for students across the region.", name: "Chibu B." },
              ].map((slide, idx) => (
                <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
                  <div className="w-[80%] row align-items-center g-0 m-auto">
                    <div className="flex row items-center">
                      <div className="p-4 text-center text-md-start">
                        <h3 className="fw-bold text-success">{slide.title}</h3>
                        <p className="lead">{slide.desc}</p>
                      </div>
                      <div className='flex gap-3'>
                        <div className="flex items-center content-center w-16 h-16 rounded-[100%] shadow-sm overflow-hidden">
                          <img src={slide.img} className="w-full h-full" alt={slide.title} style={{ objectFit: "cover" }} />
                        </div>
                        <div className="">
                          <h5>{slide.name}</h5>
                          <FaStar className='text-yellow-400/80' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#impactCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#impactCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>

            <div className="carousel-indicators mt-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <button key={i} type="button" data-bs-target="#impactCarousel" data-bs-slide-to={i} className={i === 0 ? "active" : ""} aria-current={i === 0 ? "true" : undefined} aria-label={`Slide ${i + 1}`}></button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TestimonialSection