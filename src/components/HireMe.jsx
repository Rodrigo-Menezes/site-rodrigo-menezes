import Link from "next/link";
import { CircularText } from "./icons";

export default function HireMe(){
    return(
        <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
            <div className="w-48 h-auto flex items-center justify-center relative">
                <CircularText className={"fill-dark dark:fill-light animate-spin-slow"}/>
                <Link href="/" className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light font-bold shadow-md rounded-full border border-solid border-dark dark:border-light w-20 h-20 hover:bg-light  hover:text-dark dark:hover:text-dark shadow-dark dark:shadow-light transition ease duration-300">
                    Hire Me
                </Link>
            </div>
        </div>
    )
}