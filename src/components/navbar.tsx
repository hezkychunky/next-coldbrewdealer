import Link from "next/link";
import Image from "next/image";

export default function NavbarComp() {
  return (
      <div className="flex flex-col md:flex-row fixed w-full bg-white z-20 pl-4">
        <Link href="/" className="flex pt-2">
          <Image src="/bottle-icon.svg" width={50} height={80} alt="Coldbrew Dealer Logo" />
          <span className="text-2xl md:text-4xl font-extralight text-lime-600">COLDBREW DEALER</span>
        </Link>
        <div className="pr-10 flex gap-4 w-full justify-center md:justify-end items-center text-gray-900">
          <Link href="/" className="md:text-xl text-sm font-light hover:font-medium hover:text-lime-600" /*active*/>
            Home
          </Link>
          <Link className="md:text-xl text-sm font-light hover:font-medium hover:text-lime-600" href="/about">
            About
          </Link>
          <Link href="products" className="md:text-xl text-sm font-light hover:font-medium hover:text-lime-600">Products</Link>
          <Link href="teams" className="md:text-xl text-sm font-light hover:font-medium hover:text-lime-600">Teams</Link>
        </div>
      </div>
  );
}
