import Image from "next/image";
import InstantReveal from "../utils/InstantReveal";
import StaggerReveal from "../utils/StaggerReveal";
import Reveal from "../utils/Reveal";

const TechStack = () => {
  return (
    <section className="my-10 md:my-14 flex flex-col items-center justify-center h-full w-full text-center space-y-3 gap-3">
      <div className="w-full flex flex-col gap-3 justify-center items-center">
        <Reveal>
          <h1 className="font-cal -[#11192c] text-3xl md:text-6xl font-bold">
            Tech stack
          </h1>
        </Reveal>
        <Reveal>
          <p className="flex flex-col text-[#7b899c] font-sans max-w-[44rem] leading-normal text-muted-foreground sm:text-[18px] sm:leading-8 md:px-0 px-12">
            As a student developer, I have experience working with a variety of
            projects using different languages and frameworks to build robust
            and scalable applications.
            <span className="text-[#48515e] font-medium">
              Here are the top tech stacks i use:
            </span>
          </p>
        </Reveal>
      </div>
      <div className="text-[#11192c] grid grid-cols-1  md:grid-cols-3 gap-5 w-full text-start">
        <InstantReveal>
          <div className="flex flex-col gap-2 items-start justify-start bg-white rounded-md border py-6 px-5">
            <Image
              className="w-16 h-16"
              width="164"
              height="164"
              src="https://img.icons8.com/fluency/164/nextjs.png"
              alt="Next.js"
            />
            <h2 className="ml-2 text-md">Next.js 13</h2>
            <span className="ml-2 text-[15px] text-[#7b899c]">
              App dir, Routing, Layouts, Loading UI, API routes, you name it.
            </span>
          </div>
        </InstantReveal>
        <InstantReveal>
          <div className="flex flex-col gap-2 items-start justify-start bg-white rounded-md border py-6 px-5">
            <Image
              className="w-16 h-16"
              width="164"
              height="164"
              src="https://img.icons8.com/fluency/164/javascript.png"
              alt="JavaScript"
            />
            <h2 className="ml-2 text-md">JavaScript</h2>
            <span className="ml-2 text-[15px] ">
              Write maintainable, robust code using JavaScript.
            </span>
          </div>
        </InstantReveal>
        <InstantReveal>
          <div className="flex flex-col gap-2 items-start justify-start bg-white rounded-md border py-6 px-5">
            <Image
              className="ml-2 w-16 h-16"
              width="164"
              height="164"
              src="https://img.icons8.com/fluency/164/tailwind_css.png"
              alt="Tailwind"
            />
            <h2 className="ml-2 text-md">Tailwind CSS</h2>
            <span className="ml-2 text-[15px] text-[#7b899c]">
              A utility-first CSS framework packed with classes.
            </span>
          </div>
        </InstantReveal>
      </div>
      <div>
        <p className="text-[#7b899c] font-sans max-w-[44rem] leading-normal text-muted-foreground sm:text-[18px] sm:leading-8 md:px-0 px-10">
          My tech stacks are heavily influenced by my favorite youtubers.
        </p>
      </div>
    </section>
  );
};

export default TechStack;
