import { IReviews } from "@/type"
import Image from "next/image"


const reviews: IReviews[] = [
   {
      name: "Jesse",
      image: "/jesse.jpg",
      text: "There are so many of choices, I really love it!",
   },
   {
      name: "Robin",
      image: "/robin.jpg",
      text: "Flavor wise, super nice. The coffee has great quality",
   },
   {
      name: "Vishwas",
      image: "/vishwas.jpg",
      text: "The caffeine kick is not joking! Sleep is only for the weak anyway",
   },
  
]

export default function Reviews() {
      return reviews.map((review) => {
         return (
            <div key={review.name} className="bg-white bg-opacity-35 flex p-2 rounded-3xl w-96 h-28 gap-2">
               <Image src={review.image} alt="product image" width={90} height={30} className="rounded-full"/>
               <div className=" flex flex-col gap-1">
                  <h1 className="text-xl text-white">
                     {review.name}
                  </h1>
                  <h3 className="text-gray-900">
                     <span className="font-semibold text-white">says: </span>{review.text}
                  </h3>
               </div>
            </div>
         )
      }
      )
}