import { IProductDetail } from "@/type";
import Image from "next/image";



const productDetail: IProductDetail[] = [
   {
      productname: "Tanamera",
      image: "/tanamera-product.webp",
      notes: "Green Apple, Cinnamon, Light-bodied",
      price: "$2.4"
   },
   {
      productname: "Grady's",
      image: "/gradys-product.webp",
      notes: "Chocolate, Chicory, Clove, Bold",
      price: "$3"
   },
   {
      productname: "Chameleon",
      image: "/chameleon-product.jpg",
      notes: "Vanilla, Biscoff, Medium-bodied",
      price: "$2.6"
   },
   {
      productname: "Blue Bottle",
      image: "/BB-product.webp",
      notes: "Lavender, Blueberry, Medium-bodied",
      price: "$2.2"
   },
   {
      productname: "Uel Zing",
      image: "/uelzing.jpg",
      notes: "chocolaty, Bold",
      price: "$2.5"
   },
   {
      productname: "Gambino",
      image: "/gambino.jpg",
      notes: "earthy, Heavy-bodied",
      price: "$2.1"
   }
]

export default function MapProduct() {
   return productDetail.map((product) => {
      return (
         <div key={product.productname} className="bg-white flex p-2 rounded-lg w-96 sm:h-44 h-auto gap-2 hover:scale-105 hover:shadow-md hover:shadow-gray-800">
            <Image src={product.image} alt="product image" width={150} height={90}/>
            <div className=" flex flex-col gap-4">
               <h1 className="text-2xl text-lime-600">
                  {product.productname}
               </h1>
               <h3 className="text-gray-600">
                  Characteristics: {product.notes}
               </h3>
               <h1 className="text-2xl text-lime-600 text-center">
                  {product.price}
               </h1>
            </div>
         </div>
      )
   }
   )
}

export function MapProductHome() {
   return productDetail.slice(0,2).map((product) => {
      return (
         <div key={product.productname} className="bg-white flex p-2 rounded-lg w-96 sm:h-44 h-auto gap-2 hover:scale-105 hover:shadow-md hover:shadow-gray-800">
            <Image src={product.image} alt="product image" width={150} height={90}/>
            <div className=" flex flex-col gap-4">
               <h1 className="text-2xl text-lime-600">
                  {product.productname}
               </h1>
               <h3 className="text-gray-600">
                  Characteristics: {product.notes}
               </h3>
               <h1 className="text-2xl text-lime-600 text-center">
                  {product.price}
               </h1>
            </div>
         </div>
      )
   }
   )
}