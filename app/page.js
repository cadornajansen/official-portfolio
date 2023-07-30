import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col w-full">
      <div className="font-sans fixed bg-[#f2f4f3] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 flex items-center justify-center px-6 py-4 w-full gap-3">
        <svg
          className="text-sm hi-solid hi-fire inline-block w-6 h-6 text-green-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-medium">Jansen Cadorna</span>
      </div>
      <div className="px-8 mb-14 mt-28 md:my-44 flex flex-col items-center justify-center w-full text-center space-y-4">
        <div className="text-[#11192c] text-4xl md:text-7xl font-bold select-none">
          <p className="">Love writing modern code.</p>
          <p>
            <span className="text-[#16a34a]">Aesthetically</span> pleasing.
          </p>
        </div>
        <div className="">
          <p className="text-[#7b899c] font-sans max-w-[38rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            There is no better way to code than to build something with magic.
            Creative student freelancer here, let&apos;s turn ideas into reality. 💻
          </p>
        </div>
        <div>
          <Link
            className="border-none outline-none"
            href="https://discord.com/users/739798032639459348"
            target="_blank"
          >
            <button className="flex items-center justify-center font-sans text-white bg-[#0f172a] px-5 py-2 md:py-3 rounded-md">
              Chat with me on Discord
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                className="ml-1.5 h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
      <div className="my-10 md:my-14 flex flex-col items-center justify-center h-full w-full text-center space-y-3 gap-3">
        <div className="flex flex-col gap-3">
          <h1 className="text-[#11192c] text-3xl md:text-6xl font-bold">
            Tech stack
          </h1>
          <p className="flex flex-col text-[#7b899c] font-sans max-w-[44rem] leading-normal text-muted-foreground sm:text-[18px] sm:leading-8 md:px-0 px-12">
            As a student developer, I have experience working with a variety of
            projects using different languages and frameworks to build robust
            and scalable applications.
            <span className="text-[#48515e] font-medium">
              Here are the top tech stacks i use:
            </span>
          </p>
        </div>
        <div className="text-[#11192c] grid grid-cols-1  md:grid-cols-3 gap-5 w-full max-w-[75%] text-start">
          <div className="flex flex-col gap-2 items-start justify-start bg-white rounded-md border py-6 px-5">
            <img
              className=""
              width="64"
              height="64"
              src="https://img.icons8.com/fluency/64/nextjs.png"
              alt="Next.js"
            />
            <span className="ml-2 text-md">Next.js 13</span>
            <span className="ml-2 font-sans text-[15px] text-[#7b899c]">
              App dir, Routing, Layouts, Loading UI, API routes, you name it.
            </span>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start bg-white rounded-md border py-6 px-5">
            <img
              width="64"
              height="64"
              src="https://img.icons8.com/fluency/64/javascript.png"
              alt="JavaScript"
            />
            <span className="ml-2 text-md">JavaScript</span>
            <span className="ml-2 font-sans text-[15px] ">
              Write maintainable, robust code using JavaScript.
            </span>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start bg-white rounded-md border py-6 px-5">
            <img
              className="ml-2"
              width="64"
              height="64"
              src="https://img.icons8.com/fluency/64/tailwind_css.png"
              alt="Tailwind"
            />
            <span className="ml-2 text-md">Tailwind CSS</span>
            <span className="ml-2 font-sans text-[15px] text-[#7b899c]">
              A utility-first CSS framework packed with classes.
            </span>
          </div>
        </div>
        <div>
          <p className="text-[#7b899c] font-sans max-w-[44rem] leading-normal text-muted-foreground sm:text-[18px] sm:leading-8 md:px-0 px-10">
            My tech stacks are heavily influenced by my favorite youtubers.
          </p>
        </div>
      </div>
    </div>
  );
}
