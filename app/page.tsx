import LogTrigger from "@/components/feature/LogTrigger";
import Uploader from "@/components/feature/Uploader";

export default function Home() {
  return (
    <>
      <section className="px-40">
        <LogTrigger className="my-20" />
        <Uploader className="my-20" />
      </section>
    </>
  );
}
