import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaStar, FaRegStar } from 'react-icons/fa';

const TestimonialSection = () => {
  return (
    <>
    {/* Impact Carousel */}
      <section id="highlights" className="py-5 bg-white section-padd sec">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">
            What our users are saying
          </h2>

          <div id="impactCarousel" className="carousel slide w-[85%] h-60 m-auto blurEffect" data-bs-ride="carousel" data-bs-interval="5000">
            <div className="carousel-inner h-full flex items-center">
              {[
                { img: "https://images.unsplash.com/photo-1665586510539-cc2a12a54347?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "David J. testimony", desc: "TaskFlow transformed my daily routine with smarter task organization, scheduled reminders, and clear priorities. I've been able to double my output while feeling far less stressed.", name: "David J.", rating: 5 },
                { img: "https://images.unsplash.com/flagged/photo-1579133311477-9121405c78dd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Anthony K. Testimony", desc: "After adopting TaskFlow across our team we eliminated handoffs and missed deadlines, Clearer ownership, real-time updates and integrations which helped our velocity and collaboration to improve dramatically.", name: "Anthony K.", rating: 5 },
                { img: "https://images.unsplash.com/photo-1668965450077-1d23194y5f86?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "John A. Testimony", desc: "Using TaskFlow for assignment tracking and study plans helped students stay organized and focused. We observed roughly 30% improvement in exam performance and more consistent preparation habits after the use of TaskFlow.", name: "John A.", rating: 4 },
                { img: "https://images.unsplash.com/photo-1666281269793-da06484657e8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "John J. Testimony", desc: "TaskFlow helped us coordinate hundreds of hands-on workshops by assisting in managing instructors, materials and schedules so participants gained practical programming and problem-solving experience.", name: "John J.", rating: 4 },
                { img: "https://images.unsplash.com/photo-1666281179585-2775d4a8d81c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Chibu B. Testimony", desc: "Our intensive bootcamps used TaskFlow to streamline logistics and curriculum delivery with a consistent schedules, resource tracking and attendance management made scaling training programs easier.", name: "Chibu B.", rating: 5 },
              ].map((slide, idx) => (
                <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
                  <div className="w-[70%] m-auto">
                    <div className="flex row items-center gap-3">
                      <div className="p-2 text-md-start">
                        <article className="text-lg italic font-extralight text-justify">"{slide.desc}"</article>
                      </div>
                      <div className='flex gap-3'>
                        <div className="flex items-center content-center w-16 h-16 rounded-[100%] shadow-sm overflow-hidden">
                          <img src={slide.img} className="w-full h-full" alt={slide.title} style={{ objectFit: "cover" }} />
                        </div>
                        <div className="">
                          <h5 className="font-semibold">{slide.name}</h5>
                          <div className="flex items-center mt-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              i < (slide.rating || 0) ? (
                                <FaStar key={i} className="text-yellow-400/90 w-4 h-4" />
                              ) : (
                                <FaRegStar key={i} className="text-yellow-300/60 w-4 h-4" />
                              )
                            ))}
                          </div>
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