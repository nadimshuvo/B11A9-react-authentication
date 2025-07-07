import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeSlider = () => {
  const slides = [
    {
      id: 1,
      image: "https://i.ibb.co.com/Zzrgcw5q/DESKO.png",
      title: "Pay Your Bills Easily : DESCO",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/pBcSwtHQ/NESCO.png",
      title: "Secure & Fast Payment : NESCO",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/0Rj3F0nc/WASA.png",
      title: "All Utilities in One Place : WASA",
    },
  ];

  return (
    <div className="h-[calc(100vh-97px)] w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full shadow-md"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
              <div className="bg-primary bg-opacity-40 absolute bottom-0 w-full p-4 text-xl font-semibold text-white max-lg:p-10 max-lg:text-center">
                {slide.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default HomeSlider;
