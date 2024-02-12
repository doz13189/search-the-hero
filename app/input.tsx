"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Input() {
  const [name, setName] = useState("");
  const router = useRouter()

  return (
      <div className="mb-4">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search"
          onChange={(event) => setName(event.target.value)}
        />
        <button type="button" onClick={() => router.push("/unique")} >button</button>
      </div>
  );
}
