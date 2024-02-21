"use client";

import appwritePitches from "@/app/appwrite/pitchesHaldler";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function IndividualOffers({ params }: any) {

    const [pitch, setPitch] = useState({} as any);

    const { id } = params;



    const pitchDetails = async (id: any) => {
        try {
            const pitchdetails = await appwritePitches.getPitchesDatabase(id);
            setPitch(pitchdetails);
            console.log(pitchdetails);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        pitchDetails(id);
    }, [id]);

    return (
        <>
            <div className="min-h-screen w-full bg-bg_dark_primary flex flex-col justify-start items-center gap-3 ">
                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                   
                    <h1 className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                        {pitch?.Title?.toUpperCase()}
                    </h1>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {pitch?.Description}
                    </p>
                    <div className="flex justify-between items-start mt-4 flex-col">
                        <div className="flex items-start gap-2">
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            Equity:  {pitch?.Equity} 
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                               Ask Amount : INR {pitch?.Ask_Amount} 
                            </p>
                        </div>
                    </div>
                    
                </BackgroundGradient>
            </div>
        </>
    )
}