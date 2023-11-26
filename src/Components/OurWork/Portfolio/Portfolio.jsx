import PortfolioCard from "./PortfolioCard";

export default function Portfolio() {
  return (
    <section className="text-white p-4 flex flex-col gap-12">
      <div className="text-4xl">
        Featured <span className="text-blue-500">Projects</span>
      </div>

      <div className="">
        <PortfolioCard />
      </div>
    </section>
  );
}
