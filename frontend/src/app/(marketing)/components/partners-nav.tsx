"use client";

import { useRouter } from "next/navigation";

interface PartnersNavProps {
  textColor: string;
}

export const PartnersNav = ({ textColor }: PartnersNavProps) => {
  const router = useRouter();

  return (
    <div
      className="fixed flex justify-between
        items-center stop-0 w-full h-24 bg-transparent pr-12 pl-12 z-[999999999]"
      style={{ color: `${textColor}` }}
    >
      <div>
        <h1 className="font-[family-name:var(--font-bebas-regular)] text-3xl">
          VIGIL
        </h1>
      </div>
      <div className="flex gap-24 text-[1rem] ">
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
      <div className="text-[1.1rem] font-[family-name:var(--font-lark-regular)]">
        Work With Us
      </div>
    </div>
  );
};
