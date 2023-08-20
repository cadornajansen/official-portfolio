import Hero from "./sections/Hero";
import TechStack from "./sections/TechStack";
import Skills from "./sections/MySkills";

export default function Home() {
  return (
    <div className="space-y-24 md:space-y-48 my-28 md:my-44 w-10/12 lg:max-w-screen-lg flex flex-col justify-center items-center">
      <Hero />
      <TechStack />
      <Skills />
    </div>
  );
}
