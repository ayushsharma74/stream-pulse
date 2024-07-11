import { AlignJustify } from "lucide-react"
import { useState } from "react"
import { BiLike } from "react-icons/bi";
import { CiGlobe, CiLogin, CiYoutube } from "react-icons/ci";
import { GoArrowLeft, GoHistory, GoHomeFill, GoTrophy, GoVideo } from "react-icons/go";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
import { LiaDownloadSolid } from "react-icons/lia";
import { LuGamepad2, LuListVideo } from "react-icons/lu";
import { MdArrowForwardIos, MdOutlineSubscriptions, MdOutlineWatchLater } from "react-icons/md";
import { PiCurrencyCircleDollarLight, PiCurrencyDollarLight, PiFilmSlateLight, PiListDashesLight, PiMusicNoteLight, PiTranslateLight, PiUserPlus, PiUserRectangleLight } from "react-icons/pi";
import { RiArrowRightSLine, RiFeedbackLine, RiFlagLine, RiMeteorFill, RiProfileLine, RiShieldUserLine, RiShoppingBag4Line, RiSignalTowerLine } from "react-icons/ri";
import { SiYoutubekids, SiYoutubemusic, SiYoutubeshorts, SiYoutubestudio } from "react-icons/si";
import { HiMiniSignal, HiUser } from "react-icons/hi2";
import { AiOutlineBulb } from "react-icons/ai";
import { GiHanger } from "react-icons/gi";
import { FaGoogle, FaRegKeyboard, FaYoutube } from "react-icons/fa";
import { IoCheckmarkOutline, IoMoonOutline, IoSettingsOutline } from "react-icons/io5";
import { TfiHelpAlt } from "react-icons/tfi";
import { HiOutlineUserAdd } from "react-icons/hi";
import { TbShieldLock, TbShieldX } from "react-icons/tb";

export default function Profile() {
    const [isBarButtonTriggered, setIsBarButtonTriggered] = useState(false);
    const [innerButtonTriggered, setInnerButtonTriggered] = useState(null);

    const isInnerButtonTriggered = index => {
        setIsBarButtonTriggered(false);
        setInnerButtonTriggered(index);
        
    }
    const isBackButtonTriggered = () => {
        setInnerButtonTriggered(null);
        setIsBarButtonTriggered(true);
    }

    return (
        <div className="relative">
            <div className="cursor-pointer" onClick={() => setIsBarButtonTriggered(!isBarButtonTriggered)}>
                {/* <HiUser className="bg-[#e5e5e5] min-h-8 min-w-8 text-[#333] block h-8 rounded-full w-8 hover:bg-[#ddd] p-2" /> */}
                <Image
                    src={"/assets/logo/bg_logo.jpeg"}
                    alt="Logo"
                    className="w-8 h-8 min-h-8 min-w-8 rounded-full bg-white"
                />
            </div>
            {isBarButtonTriggered ?
                <div className="absolute bg-white right-[3rem] shadow-lg rounded-2xl top-0 flex flex-col py-2 w-72 gap-3 max-h-[97.45vh] overflow-hidden">

                    <ul className="flex flex-col py-2 border-b-2">
                        <li className="flex gap-4 text-sm p-2 w-full rounded-md" title="Home">
                            {/* <HiUser className="bg-[#e5e5e5] text-[#333] block h-10 rounded-full w-10 hover:bg-[#ddd] p-2" /> */}
                            <Image
                                src={"/assets/logo/bg_logo.jpeg"}
                                alt="Logo"
                                className="w-10 h-10 rounded-full bg-white"
                            />

                            <div className="flex flex-col gap-1 font-medium">
                                <h1 title="Webster">
                                    Webster
                                </h1>
                                <h2 title="@webster-nerds">
                                    @webster-nerds
                                </h2>
                                <a href="/channel" className="text-[#00f]" title="view your channel">View your channel</a>
                            </div>
                        </li>
                    </ul>
                    <div className="bg-white top-0 flex flex-col py-2 w-full gap-3 h-[97.45vh] overflow-hidden hover:overflow-y-scroll">
                        <ul className="flex flex-col py-2 border-b-2">
                            <a href="/feed/history">
                                <li className="flex gap-4 text-sm  items-center px-4 p-2 hover:bg-[#f0f0f0] w-full" title="History">
                                    <FaGoogle className="text-xl" /> Google Account
                                </li>
                            </a>
                            <li onClick={() => isInnerButtonTriggered(0)} className="flex gap-4 text-sm justify-between cursor-pointer items-center px-4 p-2 hover:bg-[#f0f0f0] w-full" title="Your Channel">
                                <div className="flex gap-4 text-sm items-center hover:bg-[#f0f0f0] w-full">
                                    <PiUserRectangleLight className="text-xl" /> Switch account
                                </div>
                                <MdArrowForwardIos className="text-lg" />
                            </li>
                            <a href="/feed/history">
                                    <li className="flex gap-4 text-sm  items-center px-4 p-2 hover:bg-[#f0f0f0] w-full" title="History">
                                    <CiLogin className="text-xl" /> Sign out
                                </li>
                            </a>
                        </ul>

                        <ul className="flex flex-col py-2 border-b-2">
                            <a href="/feed/history">
                                <li className="flex gap-4 text-sm  items-center px-4 p-2 hover:bg-[#f0f0f0] w-full" title="History">
                                    <SiYoutubestudio className="text-xl" /> Youtube Studio
                                </li>
                            </a>
                            <a href="/feed/history">
                                <li className="flex gap-4 text-sm  items-center px-4 p-2 hover:bg-[#f0f0f0] w-full" title="History">
                                    <PiCurrencyCircleDollarLight className="text-xl" /> Purchases and memberships
                                </li>
                            </a>
                        </ul>

                        <ul className="flex flex-col py-2 border-b-2">
                            <a href="/feed/history">
                                <li className="flex gap-4 text-sm  items-center px-4 p-2 hover:bg-[#f0f0f0] w-full" title="History">
                                    <RiShieldUserLine className="text-xl" /> Your data in YouTube
                                </li>
                            </a>
                            <li onClick={() => isInnerButtonTriggered(1)} className="flex gap-4 text-sm justify-between cursor-pointer items-center px-4 p-2 hover:bg-[#f0f0f0] w-full" title="Your Channel">
                                <div className="flex gap-4 text-sm items-center hover:bg-[#f0f0f0] w-full">
                                    <IoMoonOutline className="text-xl turn-around" /> Appearance: Light
                                </div>
                                <MdArrowForwardIos className="text-lg" />
                            </li>
                            <li onClick={() => isInnerButtonTriggered(2)} className="flex gap-4 text-sm justify-between cursor-pointer items-center px-4 p-2 hover:bg-[#f0f0f0] w-full" title="Your Channel">
                                <div className="flex gap-4 text-sm items-center hover:bg-[#f0f0f0] w-full">
                                    <PiTranslateLight className="text-xl" /> Language: English
                                </div>
                                <MdArrowForwardIos className="text-lg" />
                            </li>
                            <li onClick={() => isInnerButtonTriggered(3)} className="flex gap-4 text-sm justify-between cursor-pointer items-center px-4 p-2 hover:bg-[#f0f0f0] w-full" title="Your Channel">
                                <div className="flex gap-4 text-sm items-center hover:bg-[#f0f0f0] w-full">
                                    <TbShieldX className="text-xl" /> Restricted Mode: Off
                                </div>
                                <MdArrowForwardIos className="text-lg" />
                            </li>
                            <li onClick={() => isInnerButtonTriggered(4)} className="flex gap-4 text-sm justify-between cursor-pointer items-center px-4 p-2 hover:bg-[#f0f0f0] w-full" title="Your Channel">
                                <div className="flex gap-4 text-sm items-center hover:bg-[#f0f0f0] w-full">
                                    <CiGlobe className="text-xl" /> Location: India
                                </div>
                                <MdArrowForwardIos className="text-lg" />
                            </li>
                            <li className="flex gap-4 text-sm  items-center px-4 p-2 hover:bg-[#f0f0f0] w-full" title="History">
                                <FaRegKeyboard className="text-xl" /> Keyboard shortcuts
                            </li>
                        </ul>
                        <ul className="flex flex-col pb-2 -mt-1 border-b-2">
                            <a href="/feed/history">
                                <li className="flex gap-4 text-sm  items-center px-4 p-2 hover:bg-[#f0f0f0] w-full" title="History">
                                    <IoSettingsOutline className="text-xl" /> Settings
                                </li>
                            </a>
                        </ul>
                        <ul className="flex flex-col pb-2 -mt-1">
                            <a href="/help">
                                <li className="flex gap-4 text-sm items-center p-2 px-4 hover:bg-[#f0f0f0] w-full" title="Help">
                                    <TfiHelpAlt className="text-xl" /> Help
                                </li>
                            </a>
                            <a href="/send-feedback">
                                <li className="flex gap-4 text-sm items-center p-2 px-4 hover:bg-[#f0f0f0] w-full" title="Send feedback">
                                    <RiFeedbackLine className="text-xl" /> Send feedback
                                </li>
                            </a>
                        </ul>
                        
                    </div>
                </div>
                :
                ""
            }

            {innerButtonTriggered == 0 ?
                <div className="absolute bg-white right-[3rem] shadow-lg rounded-2xl top-0 flex flex-col py-2 w-72 gap-3 min-h-32 h-fit overflow-hidden">
                    <ul className="flex flex-col py-2 border-b-2">
                        <li className="flex gap-4 text-sm font-medium items-center px-4 p-2 w-full">
                            <GoArrowLeft className="min-h-8 min-w-8 text-[#333] block h-8 rounded-full w-8 text-3xl cursor-pointer hover:bg-[#ddd] p-2" onClick={isBackButtonTriggered} /> Google Account
                        </li>
                    </ul>

                    <ul className="text-xs px-4 border-b -mb-5 py-2">
                        <h1>Webster</h1>
                        <h1>webster.nerds@gmail.com</h1>

                    </ul>

                    <ul className="flex flex-col py-2 border-b-4">
                        <li className="flex gap-4 justify-between items-center cursor-pointer hover:bg-[#f0f0f0] text-sm px-4 py-1 w-full">
                            {/* <HiUser className="bg-[#e5e5e5] text-[#333] block h-10 rounded-full w-10 hover:bg-[#ddd] p-2" /> */}
                            <div className="flex gap-2 items-center cursor-pointer hover:bg-[#f0f0f0] text-sm w-full">
                                <Image
                                    src={"/assets/logo/bg_logo.jpeg"}
                                    alt="Logo"
                                    className="w-12 h-12 rounded-full bg-white border-2 border-[#00f]"
                                />

                                <div className="flex flex-col gap-1">
                                    <h1 className="font-medium">
                                        Webster
                                    </h1>
                                    <h2 className="text-xs">
                                        @webster-nerds
                                    </h2>
                                    <h2 className="text-xs">
                                        12 subscribers
                                    </h2>
                                </div>
                            </div>
                                <IoCheckmarkOutline className="text-3xl text-[#666]" />
                        </li>
                        <li className="flex gap-4 justify-between items-center cursor-pointer hover:bg-[#f0f0f0] text-sm px-4 py-1 w-full">
                            <div className="flex gap-2 items-center cursor-pointer hover:bg-[#f0f0f0] text-sm w-full">
                            <HiUser className="bg-[#e5e5e5] text-[#333] block h-12 border-2 border-[#00f] rounded-full w-12 hover:bg-[#ddd] p-2" />
                                {/* <Image
                                    src={"/assets/logo/bg_logo.jpeg"}
                                    alt="Logo"
                                    className="w-12 h-12 rounded-full bg-white border-2 border-[#00f]"
                                /> */}

                                <div className="flex flex-col gap-1">
                                    <h1 className="font-medium">
                                        Webster
                                    </h1>
                                    <h2 className="text-xs">
                                        @webster-nerds
                                    </h2>
                                    <h2 className="text-xs">
                                        12 subscribers
                                    </h2>
                                </div>
                            </div>
                        </li>
                        <a href="/channel-switch">
                            <li className="flex gap-4 cursor-pointer hover:bg-[#f0f0f0] text-sm p-2 px-4 w-full rounded-md">
                                View all channels
                            </li>
                        </a>
                    </ul>

                    <ul className="flex flex-col gap-4 border-b py-2">
                        <h5 className="text-xs font-medium px-4">Other accounts</h5>
                        <h2 className="text-xs px-4">gajendrasuman868@gmail.com</h2>
                        <li className="flex gap-4 justify-between items-center cursor-pointer hover:bg-[#f0f0f0] text-sm px-4 py-1 w-full">
                            <div className="flex gap-2 items-center py-2 cursor-pointer hover:bg-[#f0f0f0] text-sm w-full">
                                {/* <HiUser className="bg-[#e5e5e5] text-[#333] block h-12 border-2 border-[#00f] rounded-full w-12 hover:bg-[#ddd] p-2" /> */}
                                <Image
                                    src={"/assets/profile/p1.jpg"}
                                    alt="Logo"
                                    className="w-10 h-10 rounded-full bg-white border-2 border-[#00f]"
                                />

                                <div className="flex flex-col gap-1">
                                    <h1 className="font-medium">
                                        Gajender
                                    </h1>
                                    <h2 className="text-xs">
                                        6 subscribers
                                    </h2>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <ul className="flex flex-col py-2">
                        <a href="/add-account">
                            <li className="flex gap-4 items-center cursor-pointer hover:bg-[#f0f0f0] text-sm px-4 py-3 w-full">
                                <PiUserPlus className="text-xl flip" /> Add account
                            </li>
                        </a>
                        <a href="/add-account">
                            <li className="flex gap-4 items-center cursor-pointer hover:bg-[#f0f0f0] text-sm px-4 py-3 w-full">
                                <CiLogin className="text-xl" /> Sign out
                            </li>
                        </a>

                    </ul>
                </div>
                :
                ""
            }

        </div>
    )
}