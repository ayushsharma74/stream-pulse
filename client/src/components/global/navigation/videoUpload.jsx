import { RiVideoAddLine } from "react-icons/ri"
import { GoVideo } from "react-icons/go"
import { HiMiniSignal } from "react-icons/hi2"
import { BiEdit } from "react-icons/bi"
import { useState } from "react"
export default function VideoUpload() {
    const [isUploadButtonTriggered, setIsUploadButtonTriggered] = useState(false);

    return (
        <div className="relative">
            <div className="cursor-pointer after:content-['Create'] after:absolute after:bg-[#616161e0] relative after:top-16 after:w-fit after:px-2 after:text-white after:font-sans after:h-8 after:leading-8 after:text-sm after:rounded-md after:hidden hover:after:block motion-safe:after:animate-ping-half" onClick={() => setIsUploadButtonTriggered(!isUploadButtonTriggered)}>
                <RiVideoAddLine className="hover:bg-[#e5e5e5] block h-10 rounded-full w-10 p-2" />
            </div>
            {isUploadButtonTriggered ?
                <ul className="absolute flex-col py-2 bg-white shadow-lg rounded-md w-max h-fit right-1">
                    <a href="/upload-video">
                        <li className="flex gap-3 items-center px-4 py-2 hover:bg-[#f0f0f0] w-full">
                            <GoVideo className="text-xl" /> Upload Video
                        </li>
                    </a>
                    <a href="/upload-video">
                        <li className="flex gap-3 items-center px-4 py-2 hover:bg-[#f0f0f0] w-full">
                            <HiMiniSignal className="text-2xl" /> Go Live
                        </li>
                    </a>
                    <a href="/upload-video">
                        <li className="flex gap-3 items-center px-4 py-2 hover:bg-[#f0f0f0] w-full">
                            <BiEdit className="text-2xl" /> Create Post
                        </li>
                    </a>
                </ul>
                :
                ""
            }
           
        </div>
    )
}