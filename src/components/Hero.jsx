import { Filter, Search} from "lucide-react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
     <section className="relative flex justify-center items-center overflow-hidden h-screen bg-[url('/images/hero.jpg')] sm:rounded-4xl sm:mx-11 bg-size-120 bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 w-[50%] flex justify-center items-center flex-col gap-4">
          <img
            src="/images/logo.png"
            alt="logo"
            width={"200px"}
            height={"auto"}
          />
          <div className="relative w-full">
            <input
              type="text"
              className="w-full p-2 bg-white rounded-full pl-9 pr-14 focus:outline-none"
              placeholder="Search"
            />
            <Search className="absolute z-11 h-4 w-4 top-3 left-2" />
            <div className="absolute top-2 right-2 flex items-center hover:text-[#fd7e14]">
              <Filter fill="black" className="w-4 h-4 " />
              <span>Filter</span>
            </div>
          </div>
          <div className="text-white">
            <p>My Hero Academia, One Piece, The Banished</p>
            <p>Court, Spy X Family Season, A Wild Last Boss</p>
          </div>
          <Link
            to={"/watch"}
            className="bg-[#E45F3A] hover:bg-[#fd7e14] text-white text-xl py-2 px-8 rounded-lg text-center"
          >
            Watch Now
          </Link>
        </div>
      </section> 
    </>
  )
}

export default Hero
