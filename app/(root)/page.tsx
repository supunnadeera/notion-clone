
import Headings from "./_components/headings";
import Heros from "./_components/heros";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <div className=" h-full flex flex-col ">
      <div className="flex flex-col items-center justify-center md:justify-start gap-y-8 flex-1 px-6 pb-10 text-center">
        <Headings />
        <Heros />
      </div>
      <Footer />
    </div>
  );
}
