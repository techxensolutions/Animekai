import { useState } from 'react';
import LandingHeader from '../components/LandingHeader';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../store/UserSlice';

const Register = () => {
    const dispatch=useDispatch();
      const [formData, setFormData] = useState({
        username: '',
        email: '',
        password:''
      });
    
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(formData));
          setFormData({ username: '', email: '', password: ''})
      };
  return (
    <>
     <LandingHeader />
    <div className="min-h-screen filterspage text-white py-12 px-4">
      <div className="absolute inset-0 bg-linear-to-b from-orange-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-2xl mx-auto relative z-10">

        <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-lg p-8 mb-8">

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="animeTitle" className="block text-sm font-semibold mb-2">
                Username <span className="text-[#E45F3A]">*</span>
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                pattern='^[a-zA-Z0-9._]{3,20}$'
                placeholder="Techxen Solutions"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#E45F3A] focus:ring-1 focus:ring-[#E45F3A] transition"
                />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Your Email <span className="text-[#E45F3A]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#E45F3A] focus:ring-1 focus:ring-[#E45F3A] transition"
                />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#E45F3A] focus:ring-1 focus:ring-[#E45F3A] transition"
                />
            </div>


            <button
              type="submit"
              className="w-full bg-[#E45F3A] hover:bg-[#E45F3A]/80 text-white font-bold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105"
            >
              Register
            </button>
          </form>
          <div className='flex justify-center flex-wrap gap-2 mt-3'>
            <span>Have an account?</span><Link to={"/login"} className='text-gray-400 hover:text-gray-200 underline italic'>Login</Link>
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Register
