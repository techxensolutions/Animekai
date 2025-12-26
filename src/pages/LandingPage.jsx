import { Filter, MenuIcon, Search, Share2, X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaTelegram,
  FaTwitter,
  FaFacebook,
  FaDiscord,
} from "react-icons/fa";
import { useState } from "react";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const shares = [
    { name: FaTelegram, color: "bg-blue-500" },
    { name: FaTwitter, color: "bg-black" },
    { name: FaFacebook, color: "bg-blue-700" },
    { name: FaDiscord, color: "bg-red-600" },
  ];
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
                  <Link to={`/${item.replaceAll(" ","-")}`} class="hover:text-[#ee559ce5]">
                  {item}
                  </Link>
                  </li>;
              }
            )}
          </ul>
        </nav>
      </header>
      <section className="relative flex justify-center items-center overflow-hidden h-screen bg-[url('./images/hero.jpg')] sm:rounded-4xl sm:mx-11 bg-size-120 bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 w-[50%] flex justify-center items-center flex-col gap-4">
          <img
            src="./images/logo.png"
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
      <div className="my-6 text-gray-500 flex gap-4 justify-center flex-wrap">
        <span className="flex flex-col items-center">
          <span className="text-lg font-bold">520K</span>
          <span className="text-xs">Share</span>
        </span>
        {shares.map((item, ind) => {
          const Icon = item.name;
          return (
            <button
              key={ind}
              className={`py-2 px-5 ${item.color} rounded-xl flex text-white gap-3 items-center`}
            >
              <Icon />
              <span>Share</span>
            </button>
          );
        })}
        <button
          className={`py-2 px-5 bg-green-400 rounded-xl flex text-white items-center`}
        >
          <Share2 />
        </button>
      </div>
      <section className="w-full md:w-[90%] md:mx-11 space-y-3 px-4 md:px-0 leading-7 font-poppins text-[#ccc]">
        <h1 className="text-xl md:text-[1.8rem] leading-8 text-white font-bold">
          AnimeKai : THE BEST SITE TO WATCH ANIME ONLINE FOR FREE
        </h1>
        <p>
          Anime is not just about stories drawn with pen strokes; it's a gateway
          to worlds full of emotions and creativity. From intense battles to
          unforgettable romantic moments, anime has become an essential part of
          entertainment for millions of people. With its growing popularity, the
          number of free anime streaming platforms continues to rise.
        </p>
        <p>
          However, not every site can truly satisfy fans. Some stand out as
          guiding lights in the vast ocean. That's why AnimeKAI was created — a
          global home for anime enthusiasts, with the mission to become one of
          the top free anime streaming sites! 🌟
        </p>
        <h1 className="text-[#E45F3A] pt-3">1. What is AnimeKAI?</h1>
        <p>
          AnimeKAI is a free anime streaming site where you can watch anime in
          HD quality with both subbed and dubbed options, all without the hassle
          of registration or payment. And the best part? There are absolutely no
          ads! We're dedicated to making it the safest and most enjoyable place
          for anime lovers to watch anime for free.
        </p>
        <h1 className="text-[#E45F3A] pt-3">
          2. What make AnimeKAI the best site to watch anime free online?
        </h1>
        <p>
          Before creating AnimeKAI, we thoroughly explored numerous other free
          anime sites and learned from their strengths and weaknesses. We kept
          only the best features and eliminated all the drawbacks, combining
          them into our AnimeKAI platform. That's why we're so confident in
          claiming to be the best site for anime streaming. Experience it
          yourself and see the difference!
        </p>
        <ul className="list-disc pl-4 list-outside">
          <li>
            Safety: No ads, no redirects, and absolutely no viruses. Your safety
            and enjoyment are our top priorities.
          </li>
          <li>
            Content library: We offer an extensive collection of anime, spanning
            from 1980s classics to the latest releases. Each title includes
            English subtitles, with many also available in dubbed versions for
            your convenience.
          </li>
          <li>
            Quality/Resolution: All anime on AnimeKAI is available in the best
            possible resolution. With our quality setting feature, you can
            adjust the resolution to match your Internet speed. Stream at 360p
            when your connection is slow or enjoy stunning 720p or 1080p when
            your Internet is at its best.
          </li>
          <li>
            Streaming experience: Compared to other sites, AnimeKAi offers
            faster loading speeds and a completely buffer-free experience.
          </li>
          <li>
            Updates: Our library is updated daily, even hourly, to ensure the
            latest episodes and titles are available as soon as possible.
          </li>
          <li>
            User interface: Our user-friendly UI and UX design make navigation a
            breeze for everyone, regardless of age or Internet experience. Use
            the search box for specific titles or browse categories and new
            releases for recommendations.
          </li>
          <li>
            Device compatibility: AnimeKAI works seamlessly on both mobile and
            desktop devices. For the best streaming experience, we recommend
            using a desktop.
          </li>
        </ul>
        <h1 className="text-[#E45F3A] pt-3">
          How does AnimeKAI compare to 9Anime, Aniwave, HiAnime, and GogoAnime?
        </h1>
        <p>
          We are a new website, so our library can't match Aniwave yet, but we
          have a larger library than HiAnime and Gogo, and we are still adding
          new titles daily. With access to multiple private trackers, we are
          confident that we will surpass Aniwave's library and even KissAnime in
          the future. At the moment, we have 10k titles, Aniwave has 12k before
          they closed, HiAnime has 7k and Gogo has 9k.
        </p>
        <p>
          We have a more modern layout and better UI/UX than Gogo and 9Anime,
          making navigation on our site easy and convenient.
        </p>
        <p>
          Additionally, we offer many advanced features to enhance user
          experience such as bookmark saving, watch history, synchronization
          with Anilist, auto-next episode, autoplay, notifications...and many
          more features waiting for you to explore.
        </p>
        <p>
          If you're searching for a reliable and safe site for anime streaming,
          give AnimeKAI.to a try. If you enjoy your time with us, please spread
          the word and don't forget to bookmark our site! Your support means the
          world to us.
        </p>
        <p>Thank you!</p>
      </section>
    </>
  );
};

export default Home;
