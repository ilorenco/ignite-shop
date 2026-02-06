'use client'

import { useKeenSlider } from 'keen-slider/react'
import Image from "next/image";

import 'keen-slider/keen-slider.min.css'

export default function Home() {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 48
        }
    })

    return (
        <main
            ref={sliderRef}
            className="keen-slider flex w-full max-w-[calc(100vw-(100vw-1180px)/2)] ml-auto min-h-[656px]"
        >
            <div className="keen-slider__slide group relative flex items-center justify-center bg-linear-to-b from-[#1ea483] to-[#7465d4] rounded-lg cursor-pointer overflow-hidden">
                <Image src="/Igniter-abord-2-t-shirt 1.png" alt="" width={520} height={480} className="object-cover" />
                <footer className="absolute bottom-1 left-1 right-1 p-8 rounded-md flex items-center justify-between bg-black/40 translate-y-full opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                    <strong className="text-lg">R$ 129,90</strong>
                    <span className="text-xl font-bold text-green-300">10x s/ juros</span>
                </footer>
            </div>

            <div className="keen-slider__slide group relative flex items-center justify-center bg-linear-to-b from-[#1ea483] to-[#7465d4] rounded-lg cursor-pointer overflow-hidden">
                <Image src="/Igniter-abord-2-t-shirt 1.png" alt="" width={520} height={480} className="object-cover" />
                <footer className="absolute bottom-1 left-1 right-1 p-8 rounded-md flex items-center justify-between bg-black/40 translate-y-full opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                    <strong className="text-lg">R$ 129,90</strong>
                    <span className="text-xl font-bold text-green-300">10x s/ juros</span>
                </footer>
            </div>

            <div className="keen-slider__slide group relative flex items-center justify-center bg-linear-to-b from-[#1ea483] to-[#7465d4] rounded-lg cursor-pointer overflow-hidden">
                <Image src="/Igniter-abord-2-t-shirt 1.png" alt="" width={520} height={480} className="object-cover" />
                <footer className="absolute bottom-1 left-1 right-1 p-8 rounded-md flex items-center justify-between bg-black/40 translate-y-full opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                    <strong className="text-lg">R$ 129,90</strong>
                    <span className="text-xl font-bold text-green-300">10x s/ juros</span>
                </footer>
            </div>

            <div className="keen-slider__slide group relative flex items-center justify-center bg-linear-to-b from-[#1ea483] to-[#7465d4] rounded-lg cursor-pointer overflow-hidden">
                <Image src="/Igniter-abord-2-t-shirt 1.png" alt="" width={520} height={480} className="object-cover" />
                <footer className="absolute bottom-1 left-1 right-1 p-8 rounded-md flex items-center justify-between bg-black/40 translate-y-full opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                    <strong className="text-lg">R$ 129,90</strong>
                    <span className="text-xl font-bold text-green-300">10x s/ juros</span>
                </footer>
            </div>
        </main>
    )
}