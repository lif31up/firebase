"use client";
import React, { SetStateAction, useState } from "react";
import { uploadHandler } from "@/components/common/Firebase";
import Default from "@/src/utils/interface";

interface Data {
  comment: string;
}
export default function LogTrigger({ className }: Default) {
  const [data, setData]: [
    data: Data,
    setData: React.Dispatch<SetStateAction<Data>>
  ] = useState({ comment: "" });
  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === "Enter") {
      clickHandler();
      setData({ comment: "" });
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setData({ comment: event.target.value });
  };
  const clickHandler = (): void => {
    if (data.comment === "") return;
    uploadHandler(data).then((r: void): void => {
      console.log(data);
    });
  };
  return (
    <section className={`w-full ${className}`}>
      <h2 className="text-sm font-extrabold text-neutral-500 tracking-widest">
        Uploader.tsx
      </h2>
      <h1 className="text-2xl font-bold text-gray-600 select-none">
        해당 버튼을 클릭하면, 클라이언트에서 작성한 댓글이 Firestore 클라우드로
        업로드됩니다.
      </h1>
      <p className="text-base text-neutral-600 mt-2">
        getFirestore API를 이용해서 작성했습니다. 이에 해당하는 코드를
        확인해보세요.
      </p>
      <label className="mr-8 w-fit h-fit text-xl">
        <input
          name="comment"
          value={data.comment}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="text-xl py-4 pl-4 border"
          placeholder="type your comment"
        />
      </label>
      <button
        className="w-fit h-fit px-8 py-4 mt-8 text-white text-2xl font-extrabold rounded bg-yellow-400 shadow"
        onClick={clickHandler}
      >
        댓글 남기기
      </button>
    </section>
  );
}
