import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <Link href={"/chat"}>CHAT!</Link>
    </div>
  )
}
