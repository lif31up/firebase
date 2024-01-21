import LogTrigger from "@/component/feature/LogTrigger";
import Uploader from "@/component/feature/Uploader";
import Authenticator from "@/component/feature/Authenticator";
import CommentTable from "@/component/feature/CommentTable";

export default function Home() {
  return (
    <>
      <section className="px-40 border-b">
        <LogTrigger className="my-20" />
        <Uploader className="my-20" />
        <Authenticator className="my-20" />
      </section>
      <section className="px-40 my-20">
        <CommentTable />
      </section>
    </>
  );
}
