import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AOS from "aos";
import "./index.css"
import "aos/dist/aos.css";
import "swiper/css/autoplay";
import "animate.css";
import { Autoplay } from "swiper/modules";
import mixitup from "mixitup";

function Home() {
    const containerRef = useRef(null);
    const mixerRef = useRef(null)
    useEffect(() => {

        mixerRef.current = mixitup(containerRef.current, {
            selectors: {
                target: ".mix",
            },
            animation: {
                duration: 350,
            },
        });

        return () => {

            if (mixerRef.current) mixerRef.current.destroy();
        };
    }, []);
    const handleFilterClick = (filter) => {

        if (mixerRef.current) {
            mixerRef.current.filter(filter);
        }

    };

    useEffect(() => {
        AOS.init({
            duration: 1000,

        });


        const handleSlideChange = () => {
            AOS.refresh();
        };

        return () => {
            window.removeEventListener("slideChange", handleSlideChange);
        };
    }, []);

    return (
        <>


            <div className="w-full overflow-hidden ">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    className="w-full h-full sm:mb-10 xs:mb-5"
                    onSlideChange={() => AOS.refresh()}
                >
                    <SwiperSlide>
                        <div
                            className="w-full h-[80vh]  xs:h-auto bg-[url('/16.jpg')] xl:bg-center bg-right bg-cover bg-no-repeat 
                          md:bg-right-top sm:bg-right  bg-scroll grid justify-center items-center"
                        >
                            <div
                                className="lg:px-56 md:px-28 sm:px-10 px-5 h-full sm:h-auto flex flex-col justify-center 
                         py-10 sm:py-6"
                            >

                                <div
                                    className="text-2xl md:text-5xl text-center sm:text-left 
                        animate__animated animate__fadeInUp hidden sm:block"
                                    data-aos="zoom-out-up"
                                    style={{ "--animate-duration": "1s", animationDelay: "100ms" }}
                                >
                                    We Care About <br className="hidden sm:block" />
                                    Your Hair
                                </div>


                                <div
                                    className="text-xl sm:hidden text-center animate__animated animate__fadeInUp"
                                    data-aos="zoom-out-up"
                                    style={{ "--animate-duration": "1s", animationDelay: "100ms" }}
                                >
                                    We Care About Your Hair
                                </div>

                                <p
                                    className="lg:w-2/5 md:w-4/5 sm:w-3/4 w-full text-lg sm:text-xl xs:text-base 
                        animate__animated animate__fadeInUp mt-6 xs:mt-4"
                                    style={{ "--animate-duration": "1s", animationDelay: "500ms" }}
                                >
                                    “Discover your own style. Don't try to repeat what has already been written -
                                    have the courage to do your own thing and don't be afraid to do something different.”
                                </p>

                                <div
                                    className="flex justify-center sm:justify-start animate__animated animate__fadeInUp mt-8 xs:mt-6"
                                    style={{ "--animate-duration": "1s", animationDelay: "1000ms" }}
                                >
                                    <button
                                        className="border border-black hover:bg-[#bca858] hover:text-white 
                              hover:border-[#bca858] duration-500 ease-in px-8 py-2 rounded-xl"
                                    >
                                        About Us
                                    </button>
                                </div>
                            </div>
                        </div >
                    </SwiperSlide >


                </Swiper >
            </div >



            <div className="container mx-auto px-5 max-w-7xl py-10 border-b-2">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 place-items-center">

                    {/* Left Content Section (Same for md, sm, and Default) */}
                    <div className="min-h-[350px] w-full relative flex flex-col justify-center text-center p-5" data-aos="fade-right">
                        <h1 className="text-5xl font-bold">Hair Salon</h1>
                        <span className="text-lg text-gray-700">The House of Hair Salon & Spa</span>
                        <span className="absolute text-8xl text-[#bc9b48] opacity-10 top-13 md:left-[2rem] sm:left-[12rem] left-20 font-extralight tracking-wider text-left">
                            ABOUT US
                        </span>
                    </div>

                    {/* Image Section (Same for md, sm, and Default) */}
                    <div className="h-[350px] flex justify-center" data-aos="zoom-in">
                        <img src="/15.jpg" alt="" className="object-cover h-full w-full shadow-xl rounded-lg" />
                    </div>

                    {/* Right Content Section (Same for md, sm, and Default) */}
                    <div className="h-[350px] p-5" data-aos="fade-left">
                        <h1 className="text-2xl font-semibold mb-1">Beautiful Hair Comes From A Legendary.</h1>
                        <p className="text-gray-600 mt-2">
                            “Working in a salon, you look at trends all day long. You’re looking at color all the time,
                            what new products are coming out. You’re a part of the fashion industry, especially if
                            you’re working in a higher-end salon.”
                        </p>
                        <button className='border mt-3 bg-[#bca858] text-white hover:bg-black hover:border-[#bca858] 
                duration-500 ease-in px-8 py-2 rounded-xl'>
                            Read More
                        </button>
                    </div>

                </div>
            </div>

            {/* service */}
            <div className="container mt-24 mx-auto">
                <div className="flex flex-col justify-center text-center place-items-center">
                    <h1 className="text-5xl mb-4" data-aos="fade-right">Our Services</h1>
                    <p className="text-[#6e6e6e]" data-aos="fade-left">
                        The House of Hair Salon & Spa, incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="container">

                    <div className="grid mt-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 
            place-items-center gap-5 w-full">

                        {/* 1st Card - No Delay */}
                        <div className="card h-[200px] w-[230px] border flex flex-col items-center justify-center text-center 
                group hover:shadow-[0px_0px_30px_10px_rgba(0,0,0,0.3)] transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-duration="800">
                            <img src="/s1.png" className="h-[60px] w-[60px] mb-2" alt="" />
                            <div className="card-title text-2xl group-hover:text-[#bca858]">Coloring</div>
                            <div className="card-body">
                                <p className="text-[#6e6e6e]">Ut enim ad minim veniam, quis trud exercitation...</p>
                            </div>
                        </div>

                        {/* 2nd Card - 200ms Delay */}
                        <div className="card h-[200px] w-[230px] border flex flex-col items-center justify-center text-center 
                group hover:shadow-[0px_0px_30px_10px_rgba(0,0,0,0.3)] transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-delay="200"
                            data-aos-duration="800">
                            <img src="/s3.png" className="h-[60px] w-[45px] mb-2" alt="" />
                            <div className="card-title text-2xl transition-colors duration-300 group-hover:text-[#bca858]">
                                Haircut
                            </div>
                            <div className="card-body">
                                <p className="text-[#6e6e6e]">Consectetur adipisicing elit, sed doe eiusmod.</p>
                            </div>
                        </div>

                        {/* 3rd Card - 400ms Delay */}
                        <div className="card h-[200px] w-[230px] border flex flex-col items-center justify-center text-center 
                group hover:shadow-[0px_0px_30px_10px_rgba(0,0,0,0.3)] transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-delay="400"
                            data-aos-duration="800">
                            <img src="/s4.png" className="h-[60px] w-[45px] mb-2" alt="" />
                            <div className="card-title text-2xl transition-colors duration-300 group-hover:text-[#bca858]">
                                Haircut
                            </div>
                            <div className="card-body">
                                <p className="text-[#6e6e6e]">Consectetur adipisicing elit, sed doe eiusmod.</p>
                            </div>
                        </div>

                        {/* 4th Card - 600ms Delay */}
                        <div className="card h-[200px] w-[230px] border flex flex-col items-center justify-center text-center 
                group hover:shadow-[0px_0px_30px_10px_rgba(0,0,0,0.3)] transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-delay="600"
                            data-aos-duration="800">
                            <img src="/s3.png" className="h-[60px] w-[45px] mb-2" alt="" />
                            <div className="card-title text-2xl transition-colors duration-300 group-hover:text-[#bca858]">
                                Haircut
                            </div>
                            <div className="card-body">
                                <p className="text-[#6e6e6e]">Consectetur adipisicing elit, sed doe eiusmod.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            <div className="h-auto bg-[#f6f9f9] mt-10 py-24 sm:py-20 w-auto flex justify-center items-center overflow-hidden">
                <div className="container">
                    <div className="grid xl:grid-cols-2    grid-cols-1 gap-28 ">
                        <div className="relative flex xl:justify-end lg:justify-center md:justify-center justify-center ">


                            <img src="/4.jpg" alt=""
                                className="h-[50vh] rounded-[10px] xl:w-[63%] object-cover relative z-10 xl:mr-8 lg:mr-8 md:mr-8 sm:mr-0 
                                opacity-0 translate-x-[-50px] "
                                data-aos="fade-right"
                                data-aos-delay="200"
                                data-aos-duration="800"
                            >
                            </img>

                            <div className="absolute bg-[#ebebeb] h-[53vh] 2xl:h-[50vh] xl:h-[50vh] lg:h-[50vh] md:h-[50vh] sm:h-[50vh] 2xl:w-[60%] xl:w-[60%] lg:w-[44%] md:w-[58%] sm:w-[70%] w-[96%]
                             rounded-lg my-7 ms-20 -z-1 opacity-0 translate-y-[50px] "
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom"
                                data-aos-delay="200"
                                data-aos-duration="800"
                            >
                            </div>

                        </div>



                        <div className=" flex flex-col justify-center ">
                            <h1 className="text-5xl"
                                data-aos="fade-left"
                                data-aos-anchor-placement="left"
                                data-aos-delay="200"
                                data-aos-duration="800"
                            >Why Choose Us</h1>
                            <p className="text-gray-500 pt-4"
                                data-aos="fade-left"
                                data-aos-anchor-placement="left"
                                data-aos-delay="400"
                                data-aos-duration="800"
                            >Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div className="mt-4"
                                data-aos="fade-left"
                                data-aos-anchor-placement="left"
                                data-aos-delay="600"
                                data-aos-duration="800"
                            ><i className="fa-solid fa-circle-check text-2xl pr-2 text-orange-500 animate-pulse"></i> <span className="text-gray-700"> A Wide Spectrum Of Skills And Experience.</span>
                            </div>
                            <div className="mt-4"
                                data-aos="fade-left"
                                data-aos-anchor-placement="left"
                                data-aos-delay="800"
                                data-aos-duration="800"
                            ><i className="fa-solid fa-circle-check text-2xl pr-2 text-orange-500 animate-pulse"></i> <span className="text-gray-700"> We Strive For LIVE Answer On Our Calls.</span>
                            </div>

                            <div className="mt-4" data-aos="fade-left"
                                data-aos-anchor-placement="left"
                                data-aos-delay="1000"
                                data-aos-duration="800"><i className="fa-solid fa-circle-check text-2xl pr-2 text-orange-500 animate-pulse"></i> <span className="text-gray-700">Fast Response To Requests & Critical Response Time Guaranteed.</span>
                            </div>
                            <div className="mt-4" data-aos="fade-left"
                                data-aos-anchor-placement="left"
                                data-aos-delay="1200"
                                data-aos-duration="800"><i className="fa-solid fa-circle-check text-2xl pr-2 text-orange-500 animate-pulse"></i> <span className="text-gray-700"> We Help Solve Your Business Problems.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* our work */}
            <div className="h-auto ">
                <div className="flex flex-col justify-center text-center place-items-center">
                    <h1 className="text-5xl mb-4" data-aos="fade-right">Our Work</h1>
                    <p className="text-[#6e6e6e]" data-aos="fade-left">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div>
                        <div className="container mx-auto px-4 py-8">

                            <div className="portfolio-menu text-center mb-6 space-x-4">
                                <button
                                    data-aos="fade-left"
                                    data-aos-anchor-placement="left"
                                    data-aos-delay="200"
                                    data-aos-duration="800"
                                    onClick={() => handleFilterClick("all")}
                                    className="filter-btn active px-4 py-2 focus:border-b-2  text-orange-500  focus:text-orange-500 border-b-orange-500  transition"
                                    data-filter="all"
                                >
                                    All
                                </button>
                                <button
                                    data-aos="fade-left"
                                    data-aos-anchor-placement="left"
                                    data-aos-delay="400"
                                    data-aos-duration="800"
                                    onClick={() => handleFilterClick(".haircuts")}
                                    className="filter-btn px-4 py-2 focus:border-b-2 focus:text-orange-500 border-b-orange-500  transition"
                                    data-filter=".haircuts"
                                >
                                    Haircuts
                                </button>
                                <button
                                    data-aos="fade-left"
                                    data-aos-anchor-placement="left"
                                    data-aos-delay="600"
                                    data-aos-duration="800"
                                    onClick={() => handleFilterClick(".dye")}
                                    className="filter-btn px-4 py-2 focus:border-b-2 focus:text-orange-500 border-b-orange-500  transition"
                                    data-filter=".dye"
                                >
                                    Dye
                                </button>
                                <button
                                    data-aos="fade-left"
                                    data-aos-anchor-placement="left"
                                    data-aos-delay="800"
                                    data-aos-duration="800"
                                    onClick={() => handleFilterClick(".shave")}
                                    className="filter-btn px-4 py-2 focus:border-b-2 focus:text-orange-500 border-b-orange-500  transition"
                                    data-filter=".shave"
                                >
                                    Shave
                                </button>
                                <button
                                    data-aos="fade-left"
                                    data-aos-anchor-placement="left"
                                    data-aos-delay="1000"
                                    data-aos-duration="800"
                                    onClick={() => handleFilterClick(".hairstyle")}
                                    className="filter-btn px-4 py-2 focus:border-b-2 focus:text-orange-500 border-b-orange-500  transition"
                                    data-filter=".hairstyle"
                                >
                                    Hairstyle
                                </button>
                            </div>

                            <div className="container mx-auto px-4 py-8 overflow-hidden">
                                <div
                                    ref={containerRef}
                                    className="portfolio-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 items-center"
                                >
                                    <div className="flex flex-col space-y-4">
                                        <div className="mix haircuts flex justify-end relative group overflow-hidden"
                                            data-aos="fade-right"
                                            data-aos-anchor-placement="center-bottom"
                                            data-aos-delay="200"
                                            data-aos-duration="800"
                                        >
                                            <img
                                                src="/5.jpg"
                                                alt="Portfolio 1"
                                                className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] h-80 rounded-lg shadow-lg transition-transform duration-300 group-hover:blur-[2px]"
                                            />
                                            <div className="lg:w-[70%] w-full  h-[100%] absolute  bg-[#0000008e] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center flex-col">
                                                <span className="text-2xl text-orange-300">Hairstyle</span>
                                                <p className="text-white">Consectetur adipisicing elit sed doe</p>
                                                <i className="fa-solid fa-magnifying-glass text-white mt-3"></i>
                                            </div>
                                        </div>

                                        <div className="mix shave flex justify-end relative group" data-aos="fade-right"
                                            data-aos-anchor-placement="center-bottom"
                                            data-aos-delay="200"
                                            data-aos-duration="800">
                                            <img
                                                src="/7.jpg"
                                                alt="Portfolio 3"
                                                className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] h-80 rounded-lg shadow-lg transition-transform duration-300 group-hover:blur-[2px]"
                                            />
                                            <div className="lg:w-[70%]  w-full h-[100%] absolute  bg-[#0000008e] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center flex-col">
                                                <span className="text-2xl text-orange-300">Hairstyle</span>
                                                <p className="text-white">Consectetur adipisicing elit sed doe</p>
                                                <i className="fa-solid fa-magnifying-glass text-white mt-3"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mix dye flex justify-center col-span-2 md:col-span-1 relative group"
                                        data-aos="zoom-in"
                                        data-aos-anchor-placement="center-bottom"
                                        data-aos-delay="200"
                                        data-aos-duration="800"
                                    >
                                        <img
                                            src="/8.jpg"
                                            alt="Portfolio 5"
                                            className="w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:blur-[2px]"
                                        />
                                        <div className="absolute lg:w-[100%]  w-full h-[100%] bg-[#0000008e] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center flex-col">
                                            <span className="text-2xl text-orange-300">Hairstyle</span>
                                            <p className="text-white">Consectetur adipisicing elit sed doe</p>
                                            <i className="fa-solid fa-magnifying-glass text-white mt-3"></i>
                                        </div>
                                    </div>

                                    <div className="flex flex-col space-y-4">
                                        <div className="mix hairstyle flex justify-start relative group"
                                            data-aos="fade-left"
                                            data-aos-anchor-placement="center-bottom"
                                            data-aos-delay="200"
                                            data-aos-duration="800">
                                            <img
                                                src="/9.jpg"
                                                alt="Portfolio 1"
                                                className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] h-80 rounded-lg shadow-lg transition-transform duration-300 group-hover:blur-[2px]"
                                            />
                                            <div className="lg:w-[70%]  w-full h-[100%] absolute bg-[#0000008e] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center flex-col">
                                                <span className="text-2xl text-orange-300">Hairstyle</span>
                                                <p className="text-white">Consectetur adipisicing elit sed doe</p>
                                                <i className="fa-solid fa-magnifying-glass text-white mt-3"></i>
                                            </div>
                                        </div>

                                        <div className="mix hairstyle flex justify-start relative group" data-aos="fade-left"
                                            data-aos-anchor-placement="center-bottom"
                                            data-aos-delay="200"
                                            data-aos-duration="800">
                                            <img
                                                src="/6.jpg"
                                                alt="Portfolio 1"
                                                className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] h-80 rounded-lg shadow-lg transition-transform duration-300 group-hover:blur-[2px]"
                                            />
                                            <div className="lg:w-[70%]  w-full h-[100%] absolute  bg-[#0000008e] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center flex-col">
                                                <span className="text-2xl text-orange-300">Hairstyle</span>
                                                <p className="text-white">Consectetur adipisicing elit sed doe</p>
                                                <i className="fa-solid fa-magnifying-glass text-white mt-3"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <button className='border mt-3 bg-[#bca858] text-white hover:bg-black
                                    hover:border-[#bca858] duration-500 ease-in px-9 py-2 rounded-xl' data-aos="zoom-in"
                                data-aos-anchor-placement="center-bottom"
                                data-aos-delay="200"
                                data-aos-duration="800">
                                VIEW ALL WORK
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            {/* our expert */}
            <div className="2xl:h-screen xl:h-screen lg:h-auto md:h-auto sm:h-auto h-auto bg-[#f6f9f9] ">
                <div className="left-image xl:h-[80vh] grid xl:grid-cols-2 justify-center items-center" >
                    <div className=" w-full flex justify-end h-full" style={{ background: `url("./14.png") 60%`, backgroundPositionY: "top ", backgroundRepeat: "no-repeat" }} >
                    </div>
                    <div className="text-start overflow-hidden">
                        <h1 className="text-4xl mb-5 md:mt-2 md:text-5xl sm:mt-2 sm:text-5xl " data-aos="fade-left"
                            data-aos-anchor-placement="left"
                            data-aos-delay="200"
                            data-aos-duration="800">Our Experts</h1>
                        <p className="text-gray-500 2xl:pr-32 xl:pr-32 sm:pr-0 pr-0" data-aos="fade-left"
                            data-aos-anchor-placement="left"
                            data-aos-delay="400"
                            data-aos-duration="800">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
                        <div className="flex gap-6 mt-3 "
                            data-aos="fade-left"
                            data-aos-anchor-placement="left"
                            data-aos-delay="600"
                            data-aos-duration="800">
                            <img src="/certificate-1.png" alt="" />
                            <img src="/certificate-3.png" alt="" />
                            <img src="/certificate-2.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="cart grid justify-center gap-10 flex-wrap xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 
xl:m-22 lg:m-[100px_150px] md:m-12 sm:m-12 m-24 xl:-mt-24 xl:justify-center overflow-hidden ">


                    <div className="cart xl:w-[18rem] sm:w-[20rem] border group relative rounded-2xl 
  shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] 
  hover:scale-[1.03] transform transition-all duration-500 ease-in-out"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-delay="200"
                        data-aos-duration="800">

                        <img src="/10.jpg" alt="" className="grayscale group-hover:grayscale-0 transition duration-700 ease-in-out rounded-t-2xl" />

                        <div className="body xl:p-5 p-6 sm:p-10">
                            <h1 className="text-2xl">Mila Hartley</h1>
                            <p className="text-gray-500">Hairdresser</p>
                        </div>

                        <div className="absolute top-0 w-[18rem] opacity-0 group-hover:opacity-100 h-full 
    group-hover:bg-[rgba(255,255,255,0.8)] flex justify-center items-center gap-4 transition-all duration-500 ease-in-out rounded-2xl">
                            {/* Social Icons */}
                            <i className="fa-brands fa-facebook-f bg-[rgba(24,119,242,0.2)] hover:bg-[rgba(24,119,242,1)] 
      text-gray-800 hover:text-white p-4 rounded-full w-12 h-12 flex items-center justify-center transition duration-700"></i>

                            <i className="fa-brands fa-instagram bg-[rgba(225,48,108,0.2)] hover:bg-[rgba(225,48,108,1)] 
      text-gray-800 hover:text-white p-4 rounded-full w-12 h-12 flex items-center justify-center transition duration-700"></i>

                            <i className="fa-brands fa-youtube bg-[rgba(255,0,0,0.2)] hover:bg-[rgba(255,0,0,1)] 
      text-gray-800 hover:text-white p-4 rounded-full w-12 h-12 flex items-center justify-center transition duration-700"></i>

                            <i className="fa-brands fa-telegram bg-[rgba(0,136,204,0.2)] hover:bg-[rgba(0,136,204,1)] 
      text-gray-800 hover:text-white p-4 rounded-full w-12 h-12 flex items-center justify-center transition duration-700"></i>
                        </div>
                    </div>

                    {/* Repeat Card with slight changes */}
                    {/* === CARD 2 === */}
                    <div className="cart xl:w-[18rem] sm:w-[20rem] border group relative rounded-2xl 
  shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] 
  hover:scale-[1.03] transform transition-all duration-500 ease-in-out"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-delay="400"
                        data-aos-duration="800">

                        <img src="/11.jpg" alt="" className="grayscale group-hover:grayscale-0 transition duration-700 ease-in-out rounded-t-2xl" />

                        <div className="body xl:p-5 p-6 sm:p-10">
                            <h1 className="text-2xl">Teigan Duran</h1>
                            <p className="text-gray-500">Stylist</p>
                        </div>

                        <div className="absolute top-0 w-[18rem] opacity-0 group-hover:opacity-100 h-full 
    group-hover:bg-[rgba(255,255,255,0.8)] flex justify-center items-center gap-4 transition-all duration-500 ease-in-out rounded-2xl">
                            {/* Social Icons same as above */}
                            <i className="fa-brands fa-facebook-f bg-[rgba(24,119,242,0.2)] hover:bg-[rgba(24,119,242,1)] 
      text-gray-800 hover:text-white p-4 rounded-full w-12 h-12 flex items-center justify-center transition duration-700"></i>

                            <i className="fa-brands fa-instagram bg-[rgba(225,48,108,0.2)] hover:bg-[rgba(225,48,108,1)] 
      text-gray-800 hover:text-white p-4 rounded-full w-12 h-12 flex items-center justify-center transition duration-700"></i>

                            <i className="fa-brands fa-youtube bg-[rgba(255,0,0,0.2)] hover:bg-[rgba(255,0,0,1)] 
      text-gray-800 hover:text-white p-4 rounded-full w-12 h-12 flex items-center justify-center transition duration-700"></i>

                            <i className="fa-brands fa-telegram bg-[rgba(0,136,204,0.2)] hover:bg-[rgba(0,136,204,1)] 
      text-gray-800 hover:text-white p-4 rounded-full w-12 h-12 flex items-center justify-center transition duration-700"></i>
                        </div>
                    </div>

                    {/* === CARD 3 === */}
                    <div className="cart xl:w-[18rem] sm:w-[20rem] border group relative rounded-2xl 
  shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] 
  hover:scale-[1.03] transform transition-all duration-500 ease-in-out"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-delay="600"
                        data-aos-duration="800">

                        <img src="/13.jpg" alt="" className="grayscale group-hover:grayscale-0 transition duration-700 ease-in-out rounded-t-2xl" />

                        <div className="body xl:p-5 p-6 sm:p-10">
                            <h1 className="text-2xl font-normal group-hover:font-extrabold group-hover:text-orange-400 transition-all duration-500">
                                Stylist
                            </h1>
                            <p className="text-gray-500">Hairdresser</p>
                        </div>

                        <div className="absolute top-0 w-[18rem] opacity-0 group-hover:opacity-100 h-full 
    group-hover:bg-[rgba(255,255,255,0.8)] flex justify-center items-center gap-4 transition-all duration-500 ease-in-out rounded-2xl">
                            {/* Social Icons same as above */}
                            <i className="fa-brands fa-facebook-f bg-[rgba(24,119,242,0.2)] hover:bg-[rgba(24,119,242,1)] text-gray-800 hover:text-white p-4 rounded-full w-12 h-12 flex items-center justify-center transition duration-700"></i>
                            <i className="fa-brands fa-instagram bg-[rgba(225,48,108,0.2)] hover:bg-[rgba(225,48,108,1)] text-gray-800 hover:text-white p-4 rounded-full w-12 h-12 flex items-center justify-center transition duration-700"></i>
                            <i className="fa-brands fa-youtube bg-[rgba(255,0,0,0.2)] hover:bg-[rgba(255,0,0,1)] text-gray-800 hover:text-white p-4 rounded-full w-12 h-12 flex items-center justify-center transition duration-700"></i>
                            <i className="fa-brands fa-telegram bg-[rgba(0,136,204,0.2)] hover:bg-[rgba(0,136,204,1)] text-gray-800 hover:text-white p-4 rounded-full w-12 h-12 flex items-center justify-center transition duration-700"></i>
                        </div>
                    </div>

                    {/* === CARD 4 === */}
                    <div className="cart xl:w-[18rem] sm:w-[20rem] border group relative rounded-2xl 
  shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] 
  hover:scale-[1.03] transform transition-all duration-500 ease-in-out"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-delay="800"
                        data-aos-duration="800">

                        <img src="/12.jpg" alt="" className="grayscale group-hover:grayscale-0 transition duration-700 ease-in-out rounded-t-2xl" />

                        <div className="body xl:p-5 p-6 sm:p-10">
                            <h1 className="text-2xl">Tanya Ramsay</h1>
                            <p className="text-gray-500">Hairdresser</p>
                        </div>

                        <div className="absolute top-0 w-[18rem] opacity-0 group-hover:opacity-100 h-full 
    group-hover:bg-[rgba(255,255,255,0.8)] flex justify-center items-center gap-4 transition-all duration-500 ease-in-out rounded-2xl">
                            {/* Social Icons same as above */}
                            <i className="fa-brands fa-facebook-f bg-[rgba(24,119,242,0.2)] hover:bg-[rgba(24,119,242,1)] text-gray-800 hover:text-white p-4 rounded-full w-12 h-12 flex items-center justify-center transition duration-700"></i>
                            <i className="fa-brands fa-instagram bg-[rgba(225,48,108,0.2)] hover:bg-[rgba(225,48,108,1)] text-gray-800 hover:text-white p-4 rounded-full w-12 h-12 flex items-center justify-center transition duration-700"></i>
                            <i className="fa-brands fa-youtube bg-[rgba(255,0,0,0.2)] hover:bg-[rgba(255,0,0,1)] text-gray-800 hover:text-white p-4 rounded-full w-12 h-12 flex items-center justify-center transition duration-700"></i>
                            <i className="fa-brands fa-telegram bg-[rgba(0,136,204,0.2)] hover:bg-[rgba(0,136,204,1)] text-gray-800 hover:text-white p-4 rounded-full w-12 h-12 flex items-center justify-center transition duration-700"></i>
                        </div>
                    </div>
                </div>

            </div>



            <div className=" 2xl:mt-52 xl:mt-52 lg:mt-[1rem] md:mt-[1rem] sm:mt-[1rem] h-auto container m-auto">
                <div className="flex flex-col justify-center text-center place-items-center mb-10">
                    <h1 className="text-5xl mb-4" data-aos="fade-right">Latest News</h1>
                    <p className="text-[#6e6e6e]" data-aos="fade-left">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                </div>
                <div className="container flex justify-center items-center m-auto">


                    <div className="grid xl:grid-cols-3  lg:grid-cols-2 grid-cols-1 justify-center items-center overflow-hidden gap-5">
                        <div className="card w-[24rem] mx-auto group"
                            data-aos="fade-right"
                            data-aos-delay="200"
                            data-aos-duration="800"
                        >
                            <img src="/1.jpg" alt="" className="h-60 w-full object-cover" />
                            <h1 className="mt-6 text-lg group-hover:text-orange-400 transition duration-1000">Nina Dobrev Got a Major Haircut and Doesn't Look Like Nina Dobrev.</h1>
                            <div className="text-gray-400 mt-4">
                                <i className="fa-solid fa-clock mr-2"></i>  September 27, 2018  10 | <i class="fa-regular fa-comments"></i> <span>10</span>
                            </div>
                            <p className="mt-6">Most people recognize the CFDA Awards for its slew of perfect gowns and skin-tight.</p>
                        </div>

                        <div className="card w-[24rem] mx-auto group"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                            data-aos-duration="800"
                        >
                            <img src="/2.jpg" alt="" className="h-60 w-full object-cover" />
                            <h1 className="mt-6 text-lg group-hover:text-orange-400 transition duration-1000">Nina Dobrev Got a Major Haircut and Doesn't Look Like Nina Dobrev.</h1>
                            <div className="text-gray-400 mt-4">
                                <i className="fa-solid fa-clock mr-2"></i>  September 27, 2018  10 | <i class="fa-regular fa-comments"></i> <span>10</span>
                            </div>
                            <p className="mt-6">Most people recognize the CFDA Awards for its slew of perfect gowns and skin-tight.</p>
                        </div>

                        <div className="card w-[24rem] mx-auto group"
                            data-aos="fade-left"
                            data-aos-delay="200"
                            data-aos-duration="800"
                        >
                            <img src="/3.jpg" alt="" className="h-60 w-full object-cover" />
                            <h1 className="mt-6 text-lg group-hover:text-orange-400 transition duration-1000">Nina Dobrev Got a Major Haircut and Doesn't Look Like Nina Dobrev.</h1>
                            <div className="text-gray-400 mt-4">
                                <i className="fa-solid fa-clock mr-2"></i>  September 27, 2018  10 | <i class="fa-regular fa-comments"></i> <span>10</span>
                            </div>
                            <p className="mt-6">Most people recognize the CFDA Awards for its slew of perfect gowns and skin-tight.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stilo Your */}
            <div className="2xl:h-[60vh] xl:h-[70vh] lg:h-[60vh] grid xl:grid-cols-2 mt-5 bg-[#f6f9f9] w-full overflow-hidden">
                <div className="left flex justify-center flex-col items-center mb-3">
                    <div className="text-5xl mb-6" data-aos="fade-left"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-delay="200"
                        data-aos-duration="800">
                        Make Stilo Your <br />
                        Number One Choice
                    </div>
                    <p className="text-gray-500 w-[27rem] mb-7"
                        data-aos="fade-left"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-delay="400"
                        data-aos-duration="800"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la.
                    </p>
                    <div data-aos="fade-left"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-delay="600"
                        data-aos-duration="800">
                        <button className="border mt-3 bg-[#bca858] text-white hover:bg-black
                hover:border-[#bca858] duration-500 ease-in px-9 py-2 rounded-full mr-3"
                        >
                            BOOK AN APPOINTMENT
                        </button>
                        <button className="border border-black mt-3 hover:bg-[#bca858] transition-all duration-1000
                hover:border-[#bca858] hover:text-white ease-in px-9 py-2 rounded-full"
                        >
                            CONTACT US
                        </button>
                    </div>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="800"
                    data-aos-duration="800"
                    className="right h-full min-h-[50vh] flex justify-center items-center sm:mt-2"
                    style={{
                        backgroundImage: `url("./cta.png")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}>
                </div>
            </div>

            {/* footer */}
            <div className="container m-auto mt-8 overflow-hidden">
                <div className="grid xl:grid-cols-3  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 xl:h-[50vh] gap-4 justify-center items-center ms-auto">
                    {/* right */}
                    <div className="w-[80%] ms-auto text-[#6e6e6e]"
                        data-aos="fade-right"
                        data-aos-delay="200"
                        data-aos-duration="800">
                        <img src="/logo.png" className="mb-5" alt="" />
                        <p className="mb-5">We would love to serve you and let you enjoy your culinary experience. Excepteur sint occaecat cupidatat non proident.</p>
                        <p className="mb-5">Copyright ©2025 All rights reserved | This template is made with  by Siddharth</p>
                    </div>
                    {/* right */}
                    {/* center */}
                    <div className="w-[80%] ms-auto text-[#6e6e6e]"
                        data-aos="zoom-in"
                        data-aos-delay="400"
                        data-aos-duration="800">

                        <p className="mb-10 text-black text-2xl">Opening times</p>
                        <p className="mb-5"> Monday: Friday: 10.00 - 23.00 </p>

                        <p className="mb-4"> Saturday: 10.00 - 19.00</p>
                        <div className="flex justify-start gap-5" >
                            <i className="fa-brands fa-facebook-f bg-[rgba(24,119,242,0.2)] hover:bg-[rgba(24,119,242,1)] text-gray-800 hover:text-white p-4 rounded-full w-12 h-12 flex items-center justify-center transition duration-700 ease-in-out"></i>


                            <i className="fa-brands fa-instagram bg-[rgba(225,48,108,0.2)] hover:bg-[rgba(225,48,108,1)] text-gray-800 hover:text-white p-4 rounded-full w-12 h-12 flex items-center justify-center transition duration-700 ease-in-out"></i>

                            <i className="fa-brands fa-youtube bg-[rgba(255,0,0,0.2)] hover:bg-[rgba(255,0,0,1)] text-gray-800 hover:text-white p-4 rounded-full w-12 h-12 flex items-center justify-center transition duration-700 ease-in-out"></i>


                            <i className="fa-brands fa-telegram bg-[rgba(0,136,204,0.2)] hover:bg-[rgba(0,136,204,1)] text-gray-800 hover:text-white p-4 rounded-full w-12 h-12 flex items-center justify-center transition duration-700 ease-in-out"></i>
                        </div>
                    </div>
                    {/* center */}

                    {/* left */}
                    <div className="w-[80%] ms-auto text-[#6e6e6e]"
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="800">
                        <p className="text-black text-2xl mb-5">Contact Us</p>
                        <p className="mb-5">Tel: (+12) 345 678 910</p>
                        <p className="mb-5">E-mail: Hello.colorlib@gmail.com</p>
                        <p className="mb-5">Address: Iris Watson, P.O. Box 283 8562 Fusce Rd, NY</p>
                    </div>
                    {/* left */}
                </div>
            </div>
            {/* footer */}


        </>
    )
}

export default Home;
