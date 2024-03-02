import Image from "next/image";
import TopNav from "./TopNav";
import Link from "next/link";
import { useState } from "react";

const LandingPage = ({ metamaskHandler }) => {
  const [connecting, setConnecting] = useState(false);

  return (
    <div className="flex w-full justify-center px-4">
      <div className="flex flex-col w-full max-w-[1200px]">
        <TopNav
          metamaskHandler={metamaskHandler}
          connecting={connecting}
          setConnecting={setConnecting}
        />
        <div className="flex flex-col w-full self-center">
          <div className="h-[20vh] w-full -z-10 relative">
            <div className="flex justify-end max-md:hidden absolute top-0 right-0 w-[42vw] h-[80vh] max-h-[600px]">
              <Image
                alt="illustration"
                fill="true"
                src="/hero.png"
                className="object-contain"
              ></Image>
            </div>
          </div>
          <section
            about="hero"
            className="flex flex-col max-md:items-center md:max-w-[50vw] md:w-[600px]"
          >
            <h1 className="text-5xl font-semibold">
              Decentralised Login
              <br />
              <span className="text-indigo-600">lorem ipsum</span>
            </h1>
            <p className="pt-8 text-2xl whitespace-nowrap max-md:text-center">
              lorem ipsum <wbr /> lorem ipsum lorem ipsum.
            </p>
            <div className="pt-8 flex gap-4 text-xl">
              <Link
                href={"/"}
                className="flex rounded-lg py-2 px-4 text-white bg-indigo-600 hover:bg-indigo-400 transition-colors cursor-pointer"
              >
                lorem
              </Link>
              <Link
                href={"/signup"}
                className="flex border disabled:cursor-wait border-black hover:text-indigo-600 hover:border-indigo-600 transition-colors py-2 px-4 rounded-lg items-center cursor-pointer"
              >
                Sign Up
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
