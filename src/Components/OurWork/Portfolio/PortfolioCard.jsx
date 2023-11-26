import project1 from "../../../assets/project1.png";
export default function PortfolioCard() {
  return (
    <div className="lg:w-[80%] flex flex-col gap-6">
      <img src={project1} alt="projectphoto"  className="rounded-3xl hover:ring-2 hover:ring-blue-900"/>
      <div><a href="https://logindesigns.com/" rel="noopener noreferrer" target="_black" className="text-xl hover:border-b">Login Designs - Login Experience</a></div>
    </div>
  );
}
