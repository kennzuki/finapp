import Hero from "./components/Hero";


export default function Home() {
  return (
    <div className="bg-white text-black text-center p-12 space-y-4">
      <h1 className="text-gray-700 text-4xl font-bold">FinApp</h1>
      <p className="text-gray-600">Your finance app, reimagined.</p>
      <Hero/>
    </div>
    
  );
}
