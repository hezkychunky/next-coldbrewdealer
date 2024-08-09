import Image from "next/image";
import Hero from "../components/hero";
import Overview from "../components/overview";

export default function Home() {
  return (
    <div>
      <Hero/> 
      <Overview/>
    </div>
  );
}
