import Link from "next/link";
import Hero from "../components/hero";
import Overview from "../components/overview";
import { MapProductHome } from "./products/map-product";
import Reviews from "@/components/reviews";

export default function Home() {
  return (
    <div>
      <Hero/> 
      <Overview/>
      <div className="w-full h-auto px-8 pt-20 pb-8 bg-lime-600 ">
         <h1 className="text-4xl text-gray-900 text-center mb-8">Our Products</h1>
         <div className="flex flex-wrap justify-evenly gap-8 items-center">
            <MapProductHome/>
            <div className="flex-col">
              <h1 className="text-gray-900 font-bold text-center text-xl">And many more...</h1>
              <Link href="/products" className="bg-white px-2 rounded-lg font-semibold hover:text-lime-600 hover:shadow-md hover:shadow-gray-600">Click here to see all products!</Link>
            </div>
         </div>
         <h1 className="text-4xl text-gray-900 text-center mb-8 pt-20">Reviews</h1>
         <div className="flex flex-wrap justify-between gap-2">
          <Reviews/>
         </div>
      </div>
    </div>
  );
}
      