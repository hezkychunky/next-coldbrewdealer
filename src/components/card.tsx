import Image from "next/image";


export default function Card() {
   return (
      <div className="flex flex-wrap">
         <div className="bg-white flex p-2 rounded-lg w-96 h-44 gap-2">
            <Image src="/tanamera-product.webp" alt="product image" width={150} height={90}/>
            <div className=" flex flex-col gap-4">
            <h1 className="text-2xl text-lime-600">
               Nama Produk
            </h1>
            <h3 className="text-gray-600">
               Product Notes: blueberry, lavender, light-bodied
            </h3>
            <h1 className="text-2xl text-lime-600 text-center">
               $3
            </h1>
            </div>
         </div>
      </div>
   )
}