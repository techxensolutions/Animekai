import { MenuIcon, Share2, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Share from "../components/Share";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <header className="max-sm:relative flex justify-center items-center py-7 text-white">
        {isOpen ? <X onClick={()=>setIsOpen(false)} className="sm:hidden h-5 w-5 absolute top-2 right-2"/>
        :<MenuIcon onClick={()=>setIsOpen(true)} className="sm:hidden h-5 w-5 absolute top-2 right-2"/>}
        <nav className={`${isOpen ? "" : "max-sm:hidden"} mx-auto`}>
          <ul className="max-sm:flex-col max-sm:text-center flex gap-8">
            {["Home", "Movies", "TV Series", "New Releases", "Ongoing"].map(
              (item, ind) => {
                return <li key={ind}>
                  <Link to={`/${item.replaceAll(" ","-")}`} className="hover:text-[#ee559ce5]">
                  {item}
                  </Link>
                  </li>;
              }
            )}
          </ul>
        </nav>
      </header>
      <Hero/>
      <Share/>
      
      <Content/>
    </>
  );
};

export default Home;
