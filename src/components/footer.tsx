import Link from "next/link";


export default function Footer() {
   return (
      <div className=" bg-gray-50 h-28 rounded-lg m-4 border-lime-600 border-2 p-4">
         <div className="flex items-center w-full h-full justify-between">
            <Link href="/">
               <span className="text-2xl font-light text-lime-600">COLDBREW DEALER</span>
            </Link>
            <div className="text-gray-900">Universitetsgata 2, 0164 Oslo, Norway</div>
         </div>
      </div>
   )
}