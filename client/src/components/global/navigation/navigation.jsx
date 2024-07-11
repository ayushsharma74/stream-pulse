import React from 'react'
import { LazyLoadImage as Image } from 'react-lazy-load-image-component';
import Profile from './profile';
import { useState } from 'react';
import VideoUpload from './videoUpload';
import SideBar from './sideBar';
import Notifications from './notifications';

export default function Navbar() {
  const [isGetInputSearch, setIsGetInputSearch] = useState(false);

  const wipeSearchText = e => {
    e.target.previousElementSibling.value = "";
    setIsGetInputSearch(false);
    e.target.previousElementSibling.focus();
  }

  return (
    <>
      <nav className={`fixed w-full h-fit top-0 left-0 bg-white size-transition px-4 py-3 flex justify-between items-center z-[999]`}>
        <div className="flex items-center gap-2">
          {/* <AlignJustify className='w-6 h-6' /> */}
          <SideBar />
          <a href={"/"}>
            <div className="flex justify-between items-center gap-1">
              <Image
                src={"/assets/logo/transparent/logo.png"}
                width={60}
                height={50}
                alt="Orogamy Logo"
              />

              <h1 className="text-xl tracking-wide tracking-word-wide" style={{fontFamily: "kanit", fontWeight: "400"}}>Stream Pulse</h1>
            </div>
          </a>

        </div>
        <div className="w-1/2 h-fit flex items-center">
          <div
            className="search relative w-full border-r border-b border-t border-[#ccc] text-[#111] py-2 placeholder:text-[#ccc]">
            <input type="text" name='search' placeholder='Search' onChange={e => e.target.value ? setIsGetInputSearch(true) : setIsGetInputSearch(false)} className='relative text-base w-full outline-none' />
            <i className={`icofont-close-line ${isGetInputSearch ? "" : "hidden"} h-8 w-8 flex justify-center items-center rounded-full cursor-pointer hover:bg-[#3332]`} onClick={wipeSearchText}></i>
          </div>
          <div className="search-icon flex w-fit items-center gap-5">
            <i className="icofont-search w-16 border border-[#ccc] border-l-0 cursor-pointer rounded-r-full bg-[#f8f8f8] hover:bg-[#f0f0f0] flex items-center justify-center text-center after:content-['Search'] after:absolute after:bg-[#616161e0] relative after:top-16 after:w-full after:text-white after:font-sans after:h-8 after:leading-8 after:text-sm after:rounded-md after:hidden hover:after:block motion-safe:after:animate-ping-half"></i>
            <i className="icofont-mic h-10 w-10 bg-[#f6f6f6] flex items-center justify-center rounded-full text-2xl text-[#0f0f0f] hover:bg-[#e0e0e0] cursor-pointer after:content-['Search_with_your_voice'] after:absolute after:bg-[#616161e0] relative after:top-16 after:w-fit after:px-2 after:text-white after:font-sans after:h-8 after:leading-8 after:text-sm after:rounded-md after:hidden hover:after:block motion-safe:after:animate-ping-half"></i>
          </div>
        </div>
        <div className="w-fit flex items-center justify-center gap-3">
          <VideoUpload />
          <Notifications />
          <Profile />
        </div>

      </nav>
    </>
  )
}
