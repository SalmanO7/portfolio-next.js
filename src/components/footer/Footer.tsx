import React from 'react'
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { CiFacebook } from "react-icons/ci";
import { RiMediumLine } from "react-icons/ri";


const Footer = () => {
    return (
        <footer className="footer bg-white border-t-2 mt-4">
            <div className="footer-container container pt-8 pb-12">
                <h1 className='footer-title text-[#333] hover:text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center pb-4'>&lt;Salman /&gt;</h1>

                <ul className='footer-list flex justify-center gap-5 mb-4'>
                    <li>
                        <a href="#about" className='footer-link hover:text-black  text-[#333]'>About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className='footer-link hover:text-black  text-[#333]'>Projects</a>
                    </li>
                    <li>
                        <a href="#skill" className='footer-link hover:text-black  text-[#333]'>Skills</a>
                    </li>
                </ul>
            </div>

            <div className="footer-social socialMedia flex justify-center gap-4">
                <a href="https://www.instagram.com/salmanop402?igsh=MW03Mnkwd3ZranNhZA==" className='footer-social-link  text-[#333] text-3xl rounded-full inline-block hover:text-black  text-center transition ease-out  ' target='blank'>
                    <CiInstagram />
                </a>
                <a href="https://www.linkedin.com/in/muhammad-salman-801a402a5" className='footer-social-link text-[#333] text-3xl rounded-full inline-block hover:text-black' target='blank'>
                    <CiLinkedin />
                </a>
                <a href="https://github.com/SalmanO7" className='footer-social-link  text-[#333] text-3xl rounded-full inline-block hover:text-black' target='blank'>
                    <VscGithubAlt />
                </a>
                <a href="https://www.facebook.com/Salman221020" className='footer-social-link  text-[#333] text-3xl rounded-full inline-block hover:text-black' target='blank'>
                    <CiFacebook />
                </a>
                <a href="https://medium.com/@m.salman07" className='footer-social-link  text-[#333] text-3xl rounded-full inline-block hover:text-black' target='blank'>
                    <RiMediumLine />
                </a>

            </div>
            <span className='footer-copy block mt-12 text-center text-[#333] text-lg pb-24'>&#169;Muhammad Salman. All rights reserved</span>
        </footer>
    )
}

export default Footer