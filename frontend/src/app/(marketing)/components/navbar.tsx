"use client";

import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();

  return (
    <div
      className="fixed flex justify-between
        items-center stop-0 w-full h-24 bg-transparent pr-12 pl-12 z-[999999999] mix-blend-difference"
    >
      <div>
        <img
          src="/vigil_logo.jpeg"
          className="cursor-pointer"
          height={45}
          width={80}
          onClick={() => {
            router.push("/");
          }}
        />
      </div>
      <div className="flex gap-24 text-[1rem] text-white">
        <div
          className="font-[family-name:var(--font-lark-regular)] cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          Home
        </div>
        <div
          className="font-[family-name:var(--font-lark-regular)] cursor-pointer"
          onClick={() => {
            router.push("/partners");
          }}
        >
          Partners
        </div>
        <div
          className="font-[family-name:var(--font-lark-regular)] cursor-pointer"
          onClick={() => {
            router.push("/services");
          }}
        >
          Services
        </div>
        <div
          className="font-[family-name:var(--font-lark-regular)] cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          About
        </div>
      </div>
      <div className="text-[1.1rem] font-[family-name:var(--font-lark-regular)] text-white">
        Work With Us
      </div>
    </div>
  );
};
