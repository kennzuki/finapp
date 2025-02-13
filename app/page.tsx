import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";


export default function Home() {
  return (
    <div className="bg-white text-black text-center p-12 space-y-4">
     <Navbar/>
      <Hero/>
    </div>
    
  );
}
