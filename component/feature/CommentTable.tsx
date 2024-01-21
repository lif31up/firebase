import React from "react";
import Default from "@/util/interface";

function CommentTable({ className }: Default): React.JSX.Element {
  return (
    <section className={`w-full ${className}`}>
      <h2 className="text-sm font-extrabold text-neutral-500 tracking-widest">
        CommentTable.tsx
      </h2>
      <h1 className="text-2xl font-bold text-gray-600 select-none">
        지금까지 제 사이트에 방문하신 분들이 남긴 댓글입니다.
      </h1>
      <p className="text-base text-neutral-600 mt-2">
        getFirestore API를 사용해서 작성했습니다. 해당 코드를 확인해보세요.
      </p>
      <div className="block mt-8 text-neutral-600 text-xl">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </section>
  );
}
export default CommentTable;

function Comment({ className }: Default) {
  return (
    <div
      className={`w-fit inline-block bg-white px-8 py-4 mr-4 mb-4 rounded shadow ${className}`}
    >
      <h1 className="text-sm text-neutral-500">2023 01 02</h1>
      <p>Hello, Nice 2 Meet You</p>
    </div>
  );
}
