import Hero from "./components/Hero";

export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero/>
      <section className="z-9 min-h-screen bg-slate-500"/>
    </main>
  )
}
