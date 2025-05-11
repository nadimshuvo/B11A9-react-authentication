import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const slides = [
    {
      id: 1,
      title: "বিল পেমেন্ট এখন অনেক সহজ হয়ে গেছে। এই প্ল্যাটফর্ম আমার সময় ও টাকা দুটোই বাঁচায়।",
      name: "সাদিয়া রহমান — ঢাকা, বাংলাদেশ"
    },
    {
      id: 2,
      title: "আমি আগে কখনো এত দ্রুত ও নিরাপদভাবে বিল পরিশোধ করতে পারিনি। দারুণ এক্সপেরিয়েন্স!",
      name: "জুবায়ের হোসেন — চট্টগ্রাম, বাংলাদেশ"
    },
    {
      id: 3,
      title: "সব ইউটিলিটি বিল একসাথে ম্যানেজ করা এখন কোনো ঝামেলা নয়। ধন্যবাদ এই অ্যাপটিকে।",
      name: "নুসরাত জাহান — রাজশাহী, বাংলাদেশ"
    },
    {
      id: 4,
      title: "ইউজার ইন্টারফেসটা খুবই সহজবোধ্য। আমার মা-বাবাও এখন নিজেরাই পেমেন্ট করতে পারেন।",
      name: "রায়হান কবির — খুলনা, বাংলাদেশ"
    },
    {
      id: 5,
      title: "গ্যাস, পানি, বিদ্যুৎ—সব বিল এক জায়গা থেকে দিয়ে দিতে পারায় আমার প্রচুর সময় বাঁচে।",
      name: "তাসনুভা ইসলাম — সিলেট, বাংলাদেশ"
    },
  ];

const UserReview = () => {
    return (
    <div className="mt-20 max-w-[750px] mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="shadow-md h-full rounded-3xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <section className="py-50 bg-gray-100">
              <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-6">ইউজারদের অভিমত</h2>
                <blockquote className="italic text-lg text-gray-700">
                  {slide.title}
                </blockquote>
                <p className="mt-5 text-sm font-semibold">
                  {slide.name}
                </p>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UserReview;
