import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const HomeSlider = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://i.ibb.co.com/Zzrgcw5q/DESKO.png",
      title: "Pay Your Bills Easily : DESCO",
    },
    {
      id: 2,
      image:
        "https://i.ibb.co.com/pBcSwtHQ/NESCO.png",
      title: "Secure & Fast Payment : NESCO",
    },
    {
      id: 3,
      image:
        "https://i.ibb.co.com/0Rj3F0nc/WASA.png",
      title: "All Utilities in One Place : WASA",
    },
  ];

  return (
    <div className="w-full h-[800px]">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="shadow-md h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 bg-primary bg-opacity-40 text-white w-full p-4 text-xl font-semibold">
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
