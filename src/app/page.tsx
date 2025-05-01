'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center space-y-10">
      <h4 className="text-4xl font-bold">
        Trying out components and animations
      </h4>
      <ul className="flex flex-col items-center justify-center space-y-4">
        <li
          onClick={() => router.push("/components/tab")}
          className="px-3 py-2  bg-neutral-800 rounded-xl hover:bg-neutral-900 cursor-pointer duration-300 ease-in-out "
        >
          Tab switch
        </li>
        <li
          onClick={() => router.push("/components/modeswitch")}
          className="px-3 py-2  bg-neutral-800 rounded-xl hover:bg-neutral-900 cursor-pointer duration-300 ease-in-out "
        >
          Mode switch
        </li>
      </ul>
    </div>
  );
}
