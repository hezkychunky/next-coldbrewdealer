import Reviews from "@/components/reviews";
import MapProduct from "./map-product";


export default function Products() {
   return (
      <div className="w-full h-auto px-8 pt-28 pb-8 bg-lime-600 ">
         <h1 className="text-4xl text-gray-900 text-center mb-8">Our Products</h1>
         <div className="flex flex-wrap justify-evenly gap-8 items-center">
            <MapProduct/>
         </div>
         <h1 className="text-4xl text-gray-900 text-center mb-8 pt-12">Reviews</h1>
         <div className="flex flex-wrap justify-between gap-2">
          <Reviews/>
         </div>
      </div>
   )
}