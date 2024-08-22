"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div id="testimonials" className="testimonial-container">
      <div className="text-section mb-10 flex flex-col justify-center items-center w-full">
        <h5 className="text-gray-500">-- TESTIMONIALS</h5>
      </div>
      <div className="testimonial container flex justify-center items-center pt-10 pb-10 bg-[#E3F0F3] rounded-lg ">
        <Splide aria-label="My Favorite images" className="rounded-sm w-3/5">
          <SplideSlide className={"flex justify-center items-center w-full"}>
            <div className="w-full bg-white rounded-lg flex-col">
              <div className="flex justify-between gap-10 items-center w-11/12">
                <div className="h-44 w-44 bg-[#00ABCD]  rounded-r-full flex">
                  <Image
                    src="/images/testimonial1.png"
                    alt="img 1"
                    className="p-5"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="w-30 flex justify-center items-center">
                  <h3 className="text-2xl font-bold font-mono text-[#22577A]">
                    Sarah, Retail Manager
                  </h3>
                </div>
                <div className=" bg-[#00A9CB] p-5 rounded-full h-fit">
                  <Image
                    src="/images/quote.png"
                    alt="Quote img"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <div className="w-30 ">
                  <ul className="flex">
                    <li>
                      <Image
                        src="/images/full-star.png"
                        width={40}
                        height={40}
                        alt=""
                      />
                    </li>
                    <li>
                      <Image
                        src="/images/full-star.png"
                        width={40}
                        height={40}
                        alt=""
                      />
                    </li>
                    <li>
                      <Image
                        src="/images/full-star.png"
                        width={40}
                        height={40}
                        alt=""
                      />
                    </li>
                    <li>
                      <Image
                        src="/images/full-star.png"
                        width={40}
                        height={40}
                        alt=""
                      />
                    </li>
                    <li>
                      <Image
                        src="/images/full-star.png"
                        width={40}
                        height={40}
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
                <div className="w-30">5.0</div>
              </div>
              <div className=" p-5 text-[#807E7E] flex justify-center items-center">
                <p className="w-5/6 text-center">
                  Using this personal financial system has been a game-changer
                  for me. Before, my finances were a mess, with bills piling up
                  and no clear idea of where my money was going.
                </p>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide className={"flex justify-center items-center w-full"}>
            <div className="w-full bg-white rounded-lg flex-col">
              <div className="flex justify-between gap-10 items-center w-11/12">
                <div className="h-44 w-44 bg-[#00ABCD]  rounded-r-full flex">
                  <Image
                    src="/images/testimonial2.png"
                    alt="img 1"
                    className="p-5"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="w-30 flex justify-center items-center">
                  <h3 className="text-2xl font-bold font-mono text-[#22577A]">
                    Michael, Small Business Owner
                  </h3>
                </div>
                <div className=" bg-[#00A9CB] p-5 rounded-full h-fit">
                  <Image
                    src="/images/quote.png"
                    alt="Quote img"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <div className="w-30 ">
                  <ul className="flex">
                    <li>
                      <Image
                        src="/images/full-star.png"
                        width={40}
                        height={40}
                        alt=""
                      />
                    </li>
                    <li>
                      <Image
                        src="/images/full-star.png"
                        width={40}
                        height={40}
                        alt=""
                      />
                    </li>
                    <li>
                      <Image
                        src="/images/full-star.png"
                        width={40}
                        height={40}
                        alt=""
                      />
                    </li>
                    <li>
                      <Image
                        src="/images/full-star.png"
                        width={40}
                        height={40}
                        alt=""
                      />
                    </li>
                    <li>
                      <Image
                        src="/images/full-star.png"
                        width={40}
                        height={40}
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
                <div className="w-30">5.0</div>
              </div>
              <div className=" p-5 text-[#807E7E] flex justify-center items-center">
                <p className="w-5/6 text-center">
                  As a small business owner, I was struggling to keep track of
                  all my business and personal finances. This personal financial
                  system has been a lifesaver
                </p>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide className={"flex justify-center items-center w-full"}>
            <div className="w-full bg-white rounded-lg flex-col">
              <div className="flex justify-between gap-10 items-center w-11/12">
                <div className="h-44 w-44 bg-[#00ABCD]  rounded-r-full flex">
                  <Image
                    src="/images/testimonial3.png"
                    alt="img 1"
                    className="p-5"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="w-30 flex justify-center items-center">
                  <h3 className="text-2xl font-bold font-mono text-[#22577A]">
                    Jenna, Marketing Coordinator
                  </h3>
                </div>
                <div className=" bg-[#00A9CB] p-5 rounded-full h-fit">
                  <Image
                    src="/images/quote.png"
                    alt="Quote img"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <div className="w-30 ">
                  <ul className="flex">
                    <li>
                      <Image
                        src="/images/full-star.png"
                        width={40}
                        height={40}
                        alt=""
                      />
                    </li>
                    <li>
                      <Image
                        src="/images/full-star.png"
                        width={40}
                        height={40}
                        alt=""
                      />
                    </li>
                    <li>
                      <Image
                        src="/images/full-star.png"
                        width={40}
                        height={40}
                        alt=""
                      />
                    </li>
                    <li>
                      <Image
                        src="/images/full-star.png"
                        width={40}
                        height={40}
                        alt=""
                      />
                    </li>
                    <li>
                      <Image
                        src="/images/full-star.png"
                        width={40}
                        height={40}
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
                <div className="w-30">5.0</div>
              </div>
              <div className=" p-5 text-[#807E7E] flex justify-center items-center">
                <p className="w-5/6 text-center">
                  This personal financial system has been a game-changer for my
                  family's financial well-being. The intuitive interface and
                  user-friendly features make it easy for both my spouse and I
                  to stay on top of our household finances.{" "}
                </p>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Testimonial;
