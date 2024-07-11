import { IoMdNotifications, IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineNotificationsOff } from "react-icons/md";
import { useState, useEffect } from "react";
import { HiUser } from "react-icons/hi2";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
import { PiEyeSlash  } from "react-icons/pi";
import { document } from "postcss";

export default function Notifications() {
    const [isNotificationButtonTriggered, setIsNotificationButtonTriggered] = useState(false);
    const [isOptionButtonTriggered, setIsOptionButtonTriggered] = useState(null);

    const isInnerButtonTriggered = index => {
        isOptionButtonTriggered(index);

    }
    const isBackButtonTriggered = () => {
        if(isOptionButtonTriggered != null) setIsOptionButtonTriggered(null);
    }

    useEffect(() => {
        
    }, [])

    return (
        <div className="relative" onClick={isBackButtonTriggered}>
            <div className="cursor-pointer after:content-['Notifications'] after:absolute after:bg-[#616161e0] relative after:top-16 after:w-fit after:px-2 after:text-white after:font-sans after:h-8 after:leading-8 after:text-sm after:rounded-md after:hidden hover:after:block motion-safe:after:animate-ping-half" onClick={() => setIsNotificationButtonTriggered(!isNotificationButtonTriggered)}>
                {isNotificationButtonTriggered ?
                    <IoMdNotifications className="hover:bg-[#e5e5e5] block h-10 rounded-full w-10 p-2" />
                    :
                    <IoMdNotificationsOutline className="hover:bg-[#e5e5e5] block h-10 rounded-full w-10 p-2" />
                }

            </div>
            {isNotificationButtonTriggered ?
                <div className="absolute right-1 bg-white max-w-max min-w-56 w-fit h-[39.775rem] shadow-xl rounded-lg">                    <div className="flex justify-between px-2 items-center cursor-default border-b-2 border-[#e5e5e5] py-1">
                        Notifications
                    <a href="settings"><IoSettingsOutline className="hover:bg-[#e5e5e5] block h-10 cursor-pointer rounded-full w-10 p-2" /></a>
                    </div>
                    <div className="Notifications overflow-y-scroll overflow-x-hidden py-2 h-full">

                        {/* With Profile Picture and Unread */}

                        <div className="w-max flex gap-4 py-2 hover:bg-[#f0f0f0] cursor-pointer  min-w-full">
                            <div className="user w-max flex gap-2 items-center">
                                <div className="unreadDot h-1 w-1 bg-[#065FD4] rounded-full"></div>
                                <div className="user-profile">
                                    {/* <HiUser className="bg-[#e5e5e5] text-[#333] block h-10 rounded-full w-10 p-2" /> */}
                                    <Image 
                                        src={"/assets/logo/bg_logo.jpeg"}
                                        alt="Logo"
                                        className="w-10 h-10 rounded-full bg-white"
                                    />
                                </div>
                            </div>
                            <div className="message flex flex-col gap-2">
                                <p className="text-sm w-[15.375rem]">
                                    &#127775;  JetSet with Code replied: "thnks for feedback for my video i can improve in my next video"
                                </p>
                                <h6 className="text-[#606060] text-xs">2 weeks ago</h6>

                            </div>
                            <div className="image">
                                <Image
                                    src="/assets/logo/bg_logo.jpeg"
                                    alt="thumbnail"
                                    className="w-[5.375rem] h-14 rounded-md object-cover"
                                />
                            </div>
                            <div className="option relative">
                                <HiOutlineDotsVertical className="hover:bg-[#f0f0f0] block h-9 rounded-full w-10 p-2" onClick={() => setIsOptionButtonTriggered(0)} />
                                {isOptionButtonTriggered == 0 ?
                                    <ul className="absolute flex-col py-2 z-10 bg-white shadow-lg rounded-md w-max h-fit right-2">
                                        <li className="flex gap-3 items-center px-4 py-2 hover:bg-[#e5e5e5] w-full">
                                            <PiEyeSlash className="text-xl" /> Hide this notification
                                        </li>
                                        <li className="flex gap-3 items-center px-4 py-2 hover:bg-[#e5e5e5] w-full">
                                            <MdOutlineNotificationsOff className="text-2xl" /> Mute JetSet with Code {/* Channel Name Here */}
                                        </li>
                                        <li className="flex gap-3 items-center px-4 py-2 hover:bg-[#e5e5e5] w-full">
                                            <MdOutlineNotificationsOff className="text-2xl" /> Turn off reply updates
                                        </li>
                                    </ul>
                                    :
                                    ""
                                }
                            </div>
                        </div>
                        
                        {/* Without Profile Picture */}
                        <div className="w-max flex gap-4 py-2 hover:bg-[#f0f0f0] cursor-pointer  min-w-full">
                            <div className="user w-max flex gap-2 items-center">
                                <div className="unreadDot h-1 w-1 bg-[#065FD4] rounded-full"></div>
                                <div className="user-profile">
                                    <HiUser className="bg-[#e5e5e5] text-[#333] block h-10 rounded-full w-10 p-2" />
                                    {/* <Image
                                        src={"/assets/logo/bg_logo.jpeg"}
                                        alt="Logo"
                                        className="w-10 h-10 rounded-full bg-white"
                                    /> */}
                                </div>
                            </div>
                            <div className="message flex flex-col gap-2">
                                <p className="text-sm w-[15.375rem]">
                                    &#127775;  JetSet with Code replied: "thnks for feedback for my video i can improve in my next video"
                                </p>
                                <h6 className="text-[#606060] text-xs">2 weeks ago</h6>

                            </div>
                            <div className="image">
                                <Image
                                    src="/assets/logo/bg_icon.png"
                                    alt="thumbnail"
                                    className="w-[5.375rem] h-14 rounded-md object-cover"
                                />
                            </div>
                            <div className="option relative">
                                <HiOutlineDotsVertical className="hover:bg-[#f0f0f0] block h-9 rounded-full w-10 p-2" onClick={() => setIsOptionButtonTriggered(1)} />
                                {isOptionButtonTriggered == 1 ?
                                    <ul className="absolute flex-col z-10 py-2 bg-white shadow-lg rounded-md w-max h-fit right-2">
                                        <li className="flex gap-3 items-center px-4 py-2 hover:bg-[#e5e5e5] w-full">
                                            <PiEyeSlash className="text-xl" /> Hide this notification
                                        </li>
                                        <li className="flex gap-3 items-center px-4 py-2 hover:bg-[#e5e5e5] w-full">
                                            <MdOutlineNotificationsOff className="text-2xl" /> Mute JetSet with Code {/* Channel Name Here */}
                                        </li>
                                        <li className="flex gap-3 items-center px-4 py-2 hover:bg-[#e5e5e5] w-full">
                                            <MdOutlineNotificationsOff className="text-2xl" /> Turn off reply updates
                                        </li>
                                    </ul>
                                    :
                                    ""
                                }
                            </div>
                        </div>

                        {/* Read Notification */}
                        <div className="w-max flex gap-4 py-2 hover:bg-[#f0f0f0] cursor-pointer min-w-full">
                            <div className="user w-max flex gap-2 items-center pl-3">
                                <div className="unreadDot h-1 w-1 bg-[#065FD4] rounded-full hidden"></div>
                                <div className="user-profile">
                                    {/* <HiUser className="bg-[#e5e5e5] text-[#333] block h-10 rounded-full w-10 p-2" /> */}
                                    <Image
                                        src={"/assets/logo/bg_logo.jpeg"}
                                        alt="Logo"
                                        className="w-10 h-10 rounded-full bg-white"
                                    />
                                </div>
                            </div>
                            <div className="message flex flex-col gap-2">
                                <p className="text-sm w-[15.375rem]">
                                    &#127775;  JetSet with Code replied: "thnks for feedback for my video i can improve in my next video"
                                </p>
                                <h6 className="text-[#606060] text-xs">2 weeks ago</h6>

                            </div>
                            <div className="image">
                                <Image
                                    src="/assets/logo/logo.png"
                                    alt="thumbnail"
                                    className="w-[5.375rem] h-14 rounded-md object-cover"
                                />
                            </div>
                            <div className="option relative">
                                <HiOutlineDotsVertical className="hover:bg-[#f0f0f0] block h-9 rounded-full w-10 p-2" onClick={() => setIsOptionButtonTriggered(2)} />
                                {isOptionButtonTriggered == 2 ?
                                    <ul className="absolute flex-col py-2 z-10 bg-white shadow-lg rounded-md w-max h-fit right-2">
                                        <li className="flex gap-3 items-center px-4 py-2 hover:bg-[#e5e5e5] w-full">
                                            <PiEyeSlash className="text-xl" /> Hide this notification
                                        </li>
                                        <li className="flex gap-3 items-center px-4 py-2 hover:bg-[#e5e5e5] w-full">
                                            <MdOutlineNotificationsOff className="text-2xl" /> Mute JetSet with Code {/* Channel Name Here */}
                                        </li>
                                        <li className="flex gap-3 items-center px-4 py-2 hover:bg-[#e5e5e5] w-full">
                                            <MdOutlineNotificationsOff className="text-2xl" /> Turn off reply updates
                                        </li>
                                    </ul>
                                    :
                                    ""
                                }
                            </div>
                        </div>

                    </div>
                </div>
                :
                ""
            }

        </div>
    )
}