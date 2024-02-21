"use client";

import appwritePitches from "@/app/appwrite/pitchesHaldler";


export default function IndividualOffers({params}:any){

    const { id } = params;
    
    const user = appwritePitches.getPitchesDatabase(id);
    console.log(user);

    return(
        <div>Individual Offers go here {params.id}</div>
    )
}