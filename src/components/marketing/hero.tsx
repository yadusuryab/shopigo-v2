import React from "react";
import Wrapper from "../global/wrapper";
// import Icons from "../global/icons";
import Image from "next/image";
import Container from "../global/container";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, CircleDot } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative z-0 w-full h-full">
      <div className="absolute -top-16 inset-x-0 -z-10 mx-auto w-3/4 h-32 lg:h-40 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(18,139,135,1)_0%,rgba(5,5,5,0)_80%)]"></div>

      <Image
        src="/images/hero.svg"
        alt="Shopigo Get Your Premium Website for Just Rs. 500"
        width={1024}
        height={1024}
        className="absolute inset-x-0 -top-16 w-full z-10 min-w-full"
      />

      <Wrapper className="py-20">
        <div className="flex flex-col items-center justify-center w-full z-10">
          <Container>
            <div className="flex items-center justify-center gap-x-1 px-2 py-1 relative w-max mx-auto rounded-[8px] border-1 border-border/50 font-light">
              <CircleDot className="size-3 animate-pulse duration-100 fill-primary" />
              <span className="text-sm text-white">
                4 stores launched this week!
              </span>
            </div>
          </Container>

          <Container delay={0.1}>
            <h2 className=" !leading-[1.25] text-center text-5xl md:text-6xl font-semibold tracking-tight mt-6 w-full">
              Design that
              <br className="hidden lg:inline-block" />
              <span className="font-normal italic">&nbsp;Sells</span> More.{" "}
            </h2>
          </Container>

          <Container delay={0.2}>
            <p className="text-[15px] md:text-lg font-normal text-center text-balance text-muted-foreground max-w-3xl mx-auto mt-4">
              Designs that grow stores.
            </p>
          </Container>

          <Container delay={0.3}>
            <div className="mt-6 flex gap-2">
              <Link
                href="https://wa.me/919495314108?text=Hello+Shopigo"
                target="_blank"
              >
                {" "}
                <Button >
                  Let&apos;s Talk
                  <ArrowRight className="size-3" />
                </Button>
              </Link>
            </div>
          </Container>

          <Container className="w-full z-30   hidden md:block">
            <div className="relative mx-auto max-w-7xl rounded-2xl md:rounded-[32px] border border-neutral-200/50 bg-neutral-100 p-2 backdrop-blur-lg dark:border-neutral-700 dark:bg-neutral-800/50 mt-10 md:mt-14">
              <div className="rounded-lg md:rounded-[24px] border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black">
                <Image
                  src="/images/dashboard.png"
                  alt="Dashboard"
                  priority
                  width={2932}
                  height={1664}
                  loading="eager"
                  className="rounded-[16px] md:rounded-[26px]"
                />
              </div>
            </div>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
};

export default Hero;
