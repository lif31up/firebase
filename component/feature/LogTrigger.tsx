"use client";
import React from "react";
import { logHandler } from "@/component/common/Firebase";
import Default from "@/util/interface";

export default function LogTrigger({ className }: Default) {
  const clickHandler = () => {
    logHandler("button-pushed");
    console.log("log triggered...");
  };
  return (
    <section className={`w-full ${className}`}>
      <h2 className="text-sm font-extrabold text-neutral-500 tracking-widest">
        LogTrigger.tsx
      </h2>
      <h1 className="text-2xl font-bold text-gray-600 select-none">
        해당 버튼을 클릭하면, 그에 대한 로그가 Firebase 통계로 넘어갑니다.
      </h1>
      <p className="text-base text-neutral-600 mt-2">
        getAnalytics API를 이용해서 작성했습니다. 이에 해당하는 코드를
        확인해보세요.
      </p>
      <button
        className="w-fit h-fit px-8 py-4 mt-8 text-white text-2xl font-extrabold rounded bg-yellow-400 shadow"
        onClick={clickHandler}
      >
        로그 남기기
      </button>
    </section>
  );
}
