//Heros
import Image from "next/image";

const Heros = () => {
    return (
        <div className="flex flex-col justify-center items-center max-w-5xl">
            <div className="flex items-center ">
                <div className=" relative  h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]">
                    <Image 
                        className=" object-contain dark:hidden"
                        src="/documents.png"
                        alt="documents"
                        fill

                        />
                    <Image className=" object-contain hidden dark:block"
                        src="/documents-dark.png"
                        alt="documents"
                        fill
                        />
                </div>
                <div className=" relative h-[400px] w-[400px] hidden md:block">
                    <Image className=" object-contain dark:hidden"
                        src="/reading.png"
                        alt="documents"
                        fill
                        />
                    <Image 
                        className=" object-contain hidden dark:block"
                        src="/reading-dark.png"
                        alt="documents"
                        fill
                        />
                </div>
            </div>
        </div>
    )
}

export default Heros;