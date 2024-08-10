'use client'

import { ITeams } from "@/type";
import axios from "axios";
import Image from "next/image";
import { useEffect , useState} from "react";

export default function Teams() {
   const [team, setTeam] = useState<ITeams[]>([])
   const getData = async () => {
      try {
         const res = await axios.get("https://randomuser.me/api/?results=12&inc=name,location,picture")
         console.log(res.data.results);
         setTeam(res.data.results)
         
      } catch (err) {
         console.log(err);
      }
      
   }

   useEffect(() => {
      getData()
   },[])

      return (
         <div className="bg-lime-600 flex justify-center flex-wrap h-auto items-center gap-8 pt-32 pb-8">
            <h1 className="text-4xl text-gray-900 font-extrabold text-center">Meet Our Amazing Team</h1>
            <div className="flex justify-center flex-wrap items-center gap-8 py-8">
               {team.map((val) => {
                  return (
                     <div key={val.name.first}>
                        <div className="h-64 w-48 bg-white p-4 rounded-md">
                           <div className="flex flex-col">
                              <img src={val.picture.large} alt="team image" />
                              <h5 className="text-xl font-bold tracking-tight text-lime-600">{val.name.first}</h5>
                              <p className="font-normal text-sm text-gray-900">{val.location.country}</p>
                           </div>
                        </div>
                     </div>
                  )
               })}
            </div>
           
         </div>
      ) 
}