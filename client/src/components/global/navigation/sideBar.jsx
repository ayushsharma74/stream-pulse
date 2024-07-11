import { AlignJustify } from "lucide-react"
import { useState } from "react"
import { BiLike } from "react-icons/bi";
import { CiYoutube } from "react-icons/ci";
import { GoHistory, GoHomeFill, GoTrophy, GoVideo } from "react-icons/go";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
import { LiaDownloadSolid } from "react-icons/lia";
import { LuGamepad2, LuListVideo } from "react-icons/lu";
import { MdOutlineSubscriptions, MdOutlineWatchLater } from "react-icons/md";
import { PiFilmSlateLight, PiListDashesLight, PiMusicNoteLight, PiUserRectangleLight } from "react-icons/pi";
import { RiArrowRightSLine, RiFeedbackLine, RiFlagLine, RiMeteorFill, RiProfileLine, RiShoppingBag4Line, RiSignalTowerLine } from "react-icons/ri";
import { SiYoutubekids, SiYoutubemusic, SiYoutubeshorts, SiYoutubestudio } from "react-icons/si";
import { HiMiniSignal, HiUser } from "react-icons/hi2";
import { AiOutlineBulb } from "react-icons/ai";
import { GiHanger } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TfiHelpAlt } from "react-icons/tfi";
export default function SideBar() {
    const [isBarButtonTriggered, setIsBarButtonTriggered] = useState(false);

    return (
        <div className="">
            <div className="cursor-pointer" onClick={() => setIsBarButtonTriggered(!isBarButtonTriggered)}>
                <AlignJustify className="hover:bg-[#e5e5e5] block h-10 rounded-full w-10 p-2" />
            </div>
            {!isBarButtonTriggered ?
                <ul className="absolute flex-col  py-2 bg-white w-24 h-fit top-16 left-0">
                    <a href="/">
                        <li className="flex flex-col gap-2 text-[0.65rem] items-center py-2 hover:bg-[#f0f0f0] w-16 rounded-md" title="Home">
                            <GoHomeFill className="text-xl" /> Home
                        </li>
                    </a>
                    <a href="/shorts">
                        <li className="flex flex-col text-[0.65rem] gap-2 items-center py-2 hover:bg-[#f0f0f0] w-16 rounded-md" title="Shorts">
                            <SiYoutubeshorts className="text-xl" /> Shorts
                        </li>
                    </a>
                    <a href="/feed/subscriptions">
                        <li className="flex flex-col text-[0.65rem] gap-2 items-center py-2 hover:bg-[#f0f0f0] w-16 rounded-md" title="Subcriptions">
                            <MdOutlineSubscriptions className="text-xl" /> Subscriptions
                        </li>
                    </a>
                    <a href="/feed/you">
                        <li className="flex flex-col text-[0.65rem] gap-2 items-center py-2 hover:bg-[#f0f0f0] w-16 rounded-md" title="You">
                            <CiYoutube className="text-xl" /> You
                        </li>
                    </a>
                    <a href="/feed/downloads">
                        <li className="flex flex-col text-[0.65rem] gap-2 items-center py-2 hover:bg-[#f0f0f0] w-16 rounded-md" title="Downloads">
                            <LiaDownloadSolid className="text-xl" /> Downloads
                        </li>
                    </a>
                </ul>
                :
                <div className="absolute bg-white left-0 flex flex-col py-2 px-4 w-56 gap-3 max-h-[92.35vh] overflow-hidden hover:overflow-y-scroll">

                    <ul className="flex flex-col py-2 border-b-2">
                        <a href="/">
                            <li className="flex gap-4 text-sm active items-center p-2 hover:bg-[#0001] w-full rounded-md" title="Home">
                                <GoHomeFill className="text-2xl" /> Home
                            </li>
                        </a>
                        <a href="/shorts">
                            <li className="flex gap-4 text-sm  items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="Shorts">
                                <SiYoutubeshorts className="text-xl" /> Shorts
                            </li>
                        </a>
                        <a href="/subscription">
                            <li className="flex gap-4 text-sm  items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="Subcriptions">
                                <MdOutlineSubscriptions className="text-xl" /> Subscriptions
                            </li>
                        </a>
                    </ul>

                    <ul className="flex flex-col py-2 border-b-2">
                        <a href="/feed/you">
                            <li className="flex gap-2 text-[1rem] font-medium items-center p-2 capitalize hover:bg-[#0001] w-full rounded-md" title="You">
                                you <RiArrowRightSLine className="text-lg" />
                            </li>
                        </a>
                        <a href="/channel">
                            <li className="flex gap-4 text-sm  items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="Your Channel">
                                <PiUserRectangleLight className="text-xl" /> Your Channel
                            </li>
                        </a>
                        <a href="/feed/history">
                            <li className="flex gap-4 text-sm  items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="History">
                                <GoHistory className="text-xl" /> History
                            </li>
                        </a>
                        <a href="/feed/playlists">
                            <li className="flex gap-4 text-sm  items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="Playlists">
                                <LuListVideo className="text-xl" /> Playlists
                            </li>
                        </a>
                        <a href="/feed/videos">
                            <li className="flex gap-4 text-sm  items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="Your Videos">
                                <GoVideo className="text-xl" /> Your Videos
                            </li>
                        </a>
                        <a href="/feed/watch-later">
                            <li className="flex gap-4 text-sm  items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="Watch Later">
                                <MdOutlineWatchLater className="text-xl" /> Watch Later
                            </li>
                        </a>
                        <a href="/feed/liked-videos">
                            <li className="flex gap-4 text-sm  items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="Liked Videos">
                                <BiLike className="text-xl" /> Liked Videos
                            </li>
                        </a>

                        <a href="/feed/downloads">
                            <li className="flex gap-4 text-sm  items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="Downloads">
                                <LiaDownloadSolid className="text-xl" /> Downloads
                            </li>
                        </a>
                    </ul>

                    <ul className="flex flex-col py-2 border-b-2">
                        <li className="cursor-default flex gap-2 text-[1rem] font-medium items-center p-2 capitalize w-full">
                            Subscriptions
                        </li>
                        <a href="/@Webster-nerds">
                            <li className="flex gap-4 text-sm  items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="Webster">
                                <Image
                                    src={"/assets/logo/bg_logo.jpeg"}
                                    alt="Logo"
                                    className="w-6 h-6 object-cover rounded-full bg-white"
                                /> Webster
                            </li>
                        </a>
                        <a href="/@Webster-nerds">
                            <li className="flex gap-4 text-sm  items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="Webster">
                                <HiUser className="bg-[#e5e5e5] text-[#333] rounded-full p-2 text-3xl -ml-1" /> Webster
                            </li>
                        </a>
                        <a href="/feed/subscriptions">
                            <li className="flex gap-4 text-sm items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="All Subcriptions">
                                <PiListDashesLight className="text-xl" /> All Subscriptions
                            </li>
                        </a>

                    </ul>

                    <ul className="flex flex-col py-2 border-b-2">
                        <li className="cursor-default flex gap-2 text-[1rem] font-medium items-center p-2 capitalize w-full">
                            Explore
                        </li>
                        <a href="/feed/trending">
                            <li className="flex gap-4 text-sm items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="Trending">
                                <RiMeteorFill className="text-xl" /> Trending
                            </li>
                        </a>
                        <a href="/feed/shopping">
                            <li className="flex gap-4 text-sm items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="Shopping">
                                <RiShoppingBag4Line className="text-xl" /> Shopping
                            </li>
                        </a>
                        <a href="/feed/music">
                            <li className="flex gap-4 text-sm items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="Music">
                                <PiMusicNoteLight className="text-xl" /> Music
                            </li>
                        </a>
                        <a href="/feed/movies">
                            <li className="flex gap-4 text-sm items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="Movies">
                                <PiFilmSlateLight className="text-xl" /> Movies
                            </li>
                        </a>
                        <a href="/feed/live">
                            <li className="flex gap-4 text-sm items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="Live">
                                <HiMiniSignal className="text-xl" /> Live
                            </li>
                        </a>
                        <a href="/feed/gaming">
                            <li className="flex gap-4 text-sm items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="Gaming">
                                <LuGamepad2 className="text-xl" /> Gaming
                            </li>
                        </a>
                        <a href="/feed/news">
                            <li className="flex gap-4 text-sm items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="News">
                                <RiProfileLine className="text-xl" /> News
                            </li>
                        </a>
                        <a href="/feed/sports">
                            <li className="flex gap-4 text-sm items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="Sports">
                                <GoTrophy className="text-xl" /> Sports
                            </li>
                        </a>
                        <a href="/feed/cources">
                            <li className="flex gap-4 text-sm items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="Courses">
                                <AiOutlineBulb className="text-xl" /> Courses
                            </li>
                        </a>
                        <a href="/feed/fasion-beauty">
                            <li className="flex gap-4 text-sm items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="Fasion & Beauty">
                                <GiHanger className="text-xl" /> Fashion &amp; Beauty
                            </li>
                        </a>
                        <a href="/feed/podcasts">
                            <li className="flex gap-4 text-sm items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="Podcasts">
                                <RiSignalTowerLine className="text-xl" /> Podcasts
                            </li>
                        </a>
                    </ul>

                    <ul className="flex flex-col py-2 border-b-2">
                        <li className="cursor-default flex gap-2 text-[1rem] font-medium items-center p-2 w-full">
                            More from YouTube
                        </li>
                        <a href="/premium">
                            <li className="flex gap-4 text-sm items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="YouTube Premium">
                                <FaYoutube className="text-xl text-[#f00]" /> YouTube Premium
                            </li>
                        </a>
                        <a href="/studio">
                            <li className="flex gap-4 text-sm items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="YouTube Studio">
                                <SiYoutubestudio className="text-xl text-[#f00]" /> YouTube Studio
                            </li>
                        </a>
                        <a href="/music">
                            <li className="flex gap-4 text-sm items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="YouTube Music">
                                <SiYoutubemusic className="text-xl text-[#f00]" /> Youtube Music
                            </li>
                        </a>
                        <a href="/kids">
                            <li className="flex gap-4 text-sm items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="YouTube Kids">
                                <SiYoutubekids className="text-xl text-[#f00]" /> Youtube Kids
                            </li>
                        </a>
                    </ul>

                    <ul className="flex flex-col py-2 border-b-2">
                        <a href="/settings">
                            <li className="flex gap-4 text-sm items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="Settings">
                                <IoSettingsOutline className="text-xl" /> Settings
                            </li>
                        </a>
                        <a href="/report-history">
                            <li className="flex gap-4 text-sm items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="Report History">
                                <RiFlagLine className="text-xl" /> Report History
                            </li>
                        </a>
                        <a href="/help">
                            <li className="flex gap-4 text-sm items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="Help">
                                <TfiHelpAlt className="text-xl" /> Help
                            </li>
                        </a>
                        <a href="/send-feedback">
                            <li className="flex gap-4 text-sm items-center p-2 hover:bg-[#f0f0f0] w-full rounded-md" title="Send feedback">
                                <RiFeedbackLine className="text-xl" /> Send feedback
                            </li>
                        </a>
                    </ul>

                    <ul className="flex flex-col py-2 pb-4">
                        <li className="flex-wrap flex gap-2 gap-y-0 text-sm font-semibold items-center p-2 w-full rounded-md" title="Settings">
                            <a href="/about">About</a>
                            <a href="/press">Press</a>
                            <a href="/copyright">Copyright</a>
                            <a href="/contact-us">Contact us</a>
                            <a href="/creators">Creators</a>
                            <a href="/advretise">Advertise</a>
                            <a href="/developers">Developers</a>
                        </li>
                        <li className="flex-wrap flex gap-2 gap-y-0 text-sm font-semibold items-center p-2 w-full rounded-md" title="Settings">
                            <a href="/about">Terms</a>
                            <a href="/press">Privacy</a>
                            <a href="/copyright">Policy &amp; Safety</a>
                            <a href="/contact-us">How Youtube Works</a>
                            <a href="/creators">Test new features</a>
                        </li>
                        <li className="flex-wrap flex gap-2 gap-y-0 text-xs text-[#909090] cursor-default items-center p-2 w-full rounded-md" title="Settings">
                            &copy; 2024 Google LLC
                        </li>
                    </ul>
                </div>
            }

        </div>
    )
}

