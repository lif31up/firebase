import Default from "@/src/utils/interface";
import React from "react";

function Authenticator({ className }: Default): React.JSX.Element {
  return (
    <section className={`w-full ${className}`}>
      <h2 className="text-sm font-extrabold text-neutral-500 tracking-widest">
        Authenticator.tsx
      </h2>
      <h1 className="text-2xl font-bold text-gray-600 select-none">
        각 버튼을 클릭하면 해당하는 인증 작업이 실행됩니다.
      </h1>
      <p className="text-base text-neutral-600 mt-2">
        getAuthenticator API를 사용해서 작성했습니다. 해당 코드를 확인해보세요.
      </p>
      <div className="flex gap-8">
        <button className="w-fit h-fit px-8 py-4 mt-8 text-white text-2xl font-extrabold rounded bg-yellow-400 shadow">
          로그인
        </button>
        <button className="w-fit h-fit px-8 py-4 mt-8 text-white text-2xl font-extrabold rounded bg-neutral-400 shadow">
          회원가입
        </button>
      </div>
    </section>
  );
}
export default Authenticator;
