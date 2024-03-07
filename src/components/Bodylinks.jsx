import React from "react";
import PerformanceImg from "../assets/performance.png";
import carousal1 from "../assets/carousal-1.png";
import Analysis from "../assets/analyst.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Img2 from "../assets/img2.png";
import tokenomics from "../assets/tokenomics.png";
import profile1 from "../assets/profile1.png"
import profile2 from "../assets/profile2.png"
import profile3 from "../assets/profile3.png"
const Bodylinks = () => {
  return (
    <div className="w-[60%] h-20px mx-[7rem] my-[4rem]">
      <div>
        <ul className="flex flex-row gap-6 font-sans font-medium text-md">
          <li className="hover:text-blue-600">Overview</li>
          <li className="hover:text-blue-600">Fundamentals</li>
          <li className="hover:text-blue-600">News Insights</li>
          <li className="hover:text-blue-600">Sentiments</li>
          <li className="hover:text-blue-600">Team</li>
          <li className="hover:text-blue-600">Technicals</li>
          <li className="hover:text-blue-600">Tokenomics</li>
        </ul>
      </div>
      {/* Performance */}
      <div className="bg-white w-[45rem] h-[26rem] my-3 rounded-sm">
        <p className="text-xl font-sans mx-4 my-1">Performance</p>
        <img
          src={PerformanceImg}
          alt="performanceImg"
          className="w-[45rem] h-[23rem]"
        />
      </div>
      {/* sentiments */}
      <div className="w-[45rem] bg-white h-[20rem] my-3 rounded-sm">
        <p className="text-xl font-sans mx-4 my-1">Sentiments</p>
        <p className="text-sm font-sans mx-4  ">Key Events</p>
        <img
          src={Analysis}
          alt="analysis"
          className="h-[7rem] w-[40rem]  mx-3 mt-[8rem]"
        />
      </div>
      {/* about bitcoins */}
      <div className="w-[45rem] h-[47rem] bg-white h-[35rem] my-3 rounded-sm">
        <p className="text-xl font-sans font-medium mx-4 my-1">
          About Bitcoins
        </p>
        <h2 className="font-medium font-sans text-md mx-4 my-2">
          What is Bitcoin?
        </h2>
        <p className="text-md font-sans mx-4 my-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ea
          ipsa earum distinctio cumque, voluptatum voluptas odio reiciendis
          iusto animi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quo, exercitationem.
        </p>
        <hr className="py-1" />
        <h2 className="font-medium font-sans text-md mx-4 my-2">
          lorem ipsum dolem qowisljd
        </h2>
        <p className="text-md font-sans mx-4 my-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ea
          ipsa earum distinctio cumque, voluptatum voluptas odio reiciendis
          iusto animi.
        </p>
        <p className="text-md font-sans mx-4 my-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          repellat iusto quibusdam ex. Nulla, voluptas! Tempore necessitatibus
          nisi dolorum, fugit molestias dolorem eos expedita quos quis itaque
          quibusdam cum sunt nesciunt, dolores voluptatem adipisci corporis rem
          accusamus, magnam voluptatum commodi repellat non! Vel alias,
          inventore beatae maxime explicabo dicta quas.
        </p>
        <p className="text-md font-sans mx-4 my-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ea
          ipsa earum distinctio cumque, voluptatum voluptas odio reiciendis
          iusto animi.
        </p>
        <hr className="py-1" />
        <div className="my-2">
          <h2 className="mx-3 font-medium text-xl">Already Holding Action?</h2>
          <div className="grid grid-cols-2 my-2 mx-[1rem]">
            <div className="w-[20rem] h-[10rem] bg-red-600 rounded-xl flex">
              <img
                src={Img2}
                alt="img2"
                className="w-[10rem] h-[8rem] mx-2 my-auto"
              />
              <div className="text-center my-3">
                <p className="text-xl text-white font-medium text-center my-3">
                  Calculate your profits
                </p>
                <button className="w-[8rem] h-[2rem] text-center flex flex-row gap-2 bg-white rounded-xl justify-center font-medium mx-auto">
                  <span className="flex gap-2">Check Now</span>
                  <FaArrowRightLong className="my-1" />
                </button>
              </div>
            </div>
            <div className="w-[20rem] h-[10rem] bg-green-600 rounded-xl flex">
              <img
                src={Img2}
                alt="img2"
                className="w-[10rem] h-[8rem] mx-2 my-auto"
              />
              <div className="text-center my-3 ">
                <p className="text-xl text-white font-medium text-center my-3">
                  Calculate your profits
                </p>
                <button className="w-[8rem] h-[2rem] text-center flex flex-row gap-2 bg-white rounded-xl justify-center font-medium mx-auto">
                  <span className="flex gap-2">Check Now</span>
                  <FaArrowRightLong className="my-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-1" />
        <p className="text-md font-sans font-normal mx-4 my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam
          deserunt ipsum rerum harum in ratione amet minus est esse. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quo, fuga.
        </p>
      </div>
      {/* tokenomics */}
      <div className="w-[45rem] bg-white h-[32rem] my-auto rounded-sm">
        <p className="text-xl font-sans font-medium mx-4 my-1">Tokenomics</p>
        <h2 className="text-md font-medium mx-4">Initial Distributions</h2>
        <img src={tokenomics} alt="img4" />
        <p className="text-md font-normal my-2 mx-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint cum
          amet dicta porro, molestias omnis qui quam aliquam itaque? Doloremque,
          incidunt. Et cumque exercitationem asperiores veritatis quaerat ipsam
          amet repudiandae ea reiciendis nesciunt aperiam, doloribus, ducimus
          error hic? Praesentium deserunt sapiente nesciunt! Obcaecati,
          veritatis nesciunt quibusdam autem tempora voluptatibus quaerat
        </p>
      </div>
      {/* team */}
      <div className="w-[45rem] bg-white h-[36rem] my-3 rounded-sm">
        <p className="text-xl font-sans font-medium mx-4 my-4">Team</p>
        <p className="text-md font-normal mx-3 my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          similique quaerat sit dolores soluta! Quisquam laudantium corrupti
          ullam quia cumque.
        </p>
        <div className="flex flex-col my-2">
          <div className="flex bg-blue-200 mx-auto p-4 gap-2 my-2 mt-1 items-center rounded-lg w-[95%]">
            <img src={profile1} alt="profile1" className="w-[6rem] h-[6rem] rounded-lg" />
            <p className="text-sm font-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              praesentium maiores fugit ducimus harum saepe quo! Quis
              necessitatibus, maiores voluptatibus voluptatum rerum ducimus
              veritatis nobis corrupti facere? Impedit, perferendis sunt?
            </p>
          </div>
          <div className="flex bg-blue-200 mx-auto p-4 my-2 gap-2 items-center rounded-lg w-[95%]">
            <img src={profile2} alt="profile2" className="w-[6rem] h-[6rem] rounded-lg" />
            <p className="text-sm font-normal ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              praesentium maiores fugit ducimus harum saepe quo! Quis
              necessitatibus, maiores voluptatibus voluptatum rerum ducimus
              veritatis nobis corrupti facere? Impedit, perferendis sunt?
            </p>
          </div>
          <div className="flex bg-blue-200 mx-auto p-4 gap-2  my-2 items-center rounded-lg w-[95%]">
            <img src={profile3} alt="profile3" className="w-[6rem] h-[6rem] rounded-lg" />
            <p className="text-sm font-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              praesentium maiores fugit ducimus harum saepe quo! Quis
              necessitatibus, maiores voluptatibus voluptatum rerum ducimus
              veritatis nobis corrupti facere? Impedit, perferendis sunt?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bodylinks;
