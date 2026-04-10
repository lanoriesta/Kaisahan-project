import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import mediaItems from "../mediaData";
import RightArrowIcon from "../assets/right-arrow.png";
import LeftArrowIcon from "../assets/left-arrow.png";

const MainKeyVisual = () => {
  return (
    <div className="w-full mx-auto pt-30 lg:pt-50">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        preloadImages={false}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        effect="slide"
        speed={600}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-lg shadow-md h-100 lg:h-120"
      >
        {mediaItems.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className={`h-full w-full bg-cover bg-center transition-all duration-700`}
            >
              <div className="bg-green/50 rounded-lg backdrop-blur-none h-full flex flex-col justify-start pb-10 gap-3">
                <div className=" w-full">
                  <img
                    src={item.imgUrl}
                    alt=""
                    className="mkv h-50 w-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-3 px-10 -mt-20 z-5">
                  <h1 className=" font-semibold text-2xl md:text-5xl text-yellow text-shadow-lg/20">
                    {item.title}
                  </h1>
                  <p className="text-white text-shadow-lg text-clip line-clamp-2">
                    {item.desc}
                  </p>
                  <button className=" tracking-wide cursor-pointer bg-green w-35 text-white h-11.25 drop-shadow-lg rounded-sm">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* LEFT ARROW */}
        <div className="custom-prev absolute left-2 top-1/2 z-10 cursor-pointer">
          <img
            src={LeftArrowIcon}
            alt="Previous"
            className="w-5 h-5 hover:scale-125 transition-transform duration-300"
          />
        </div>

        {/* RIGHT ARROW */}
        <div className="custom-next absolute right-2 top-1/2 z-10 cursor-pointer">
          <img
            src={RightArrowIcon}
            alt="Next"
            className="w-5 h-5 hover:scale-125 transition-transform duration-300"
          />
        </div>
      </Swiper>
    </div>
  );
};

export default MainKeyVisual;
