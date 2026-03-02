import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import "./Carrosel.css"

const Carrosel = () => {
  const [fotos, setFotos] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/api/fotos/")
      .then(res => res.json())
      .then(data => setFotos(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="carrossel-container">
        <h2>
            <i className="fa-solid fa-camera"></i> Nossos Momentos
        </h2>

        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
        >
        {fotos.map((foto) => (
            <SwiperSlide key={foto.id}>
            <div className="slide">
                <img src={`data:image/jpeg;base64,${foto.foto}`} />
            </div>
            </SwiperSlide>
        ))}
    </Swiper>
    </div>
  )
}

export default Carrosel