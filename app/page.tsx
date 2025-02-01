import dynamic from "next/dynamic"

const PongGame = dynamic(() => import("./components/PongGame"), {
  ssr: false,
})

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <PongGame />
    </main>
  )
}

