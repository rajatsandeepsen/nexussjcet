"use client";
import ProjectMat from "@/components/projects/ProjectMat";
import { PrevProjectOfTheWeek } from "@/components/projects/pages/PrevProjectOfTheWeek";
import { ProjectOfTheWeek } from "@/components/projects/pages/ProjectOfTheWeek";
import RegisterPage from "@/components/projects/pages/RegisterPage";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const heroRef = useRef<HTMLDivElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const thirdSectionRef = useRef<HTMLDivElement>(null);
  const fourthSectionRef = useRef<HTMLDivElement>(null);
  const projectMatRef = useRef<HTMLDivElement>(null);

  const projectMatPositions = [
    {
      id: "hero",
      position: { x: 0.5, y: 0.5 },
      rotation: 0,
      scale: .9,
    },
    {
      id: "secondSection",
      position: { x: 0.2, y: 0.8 },
      rotation: 45,
      scale: 1,
    },
    {
      id: "thirdSection",
      position: { x: 0.2, y: 0.8 },
      rotation: 45,
      scale: 1.5,
    },
    {
      id: "fourthSection",
      position: { x: 0.5, y: 0.4 },
      rotation: 0,
      scale: .9,
    },
  ];

  useEffect(() => {
    if (projectMatRef.current) {
      const projectMatTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      gsap.set(projectMatRef.current, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      });

      projectMatPositions.forEach((pos, index) => {
        if (index > 0) {
          projectMatTimeline.to(projectMatRef.current, {
            top: `${pos.position.y * 100}%`,
            left: `${pos.position.x * 100}%`,
            rotation: pos.rotation,
            scale: pos.scale,
            duration: 1,
          });
        }
      });
    }

    const stopMotionEffect = () => ({
      duration: 2,
      ease: "steps(8)",
      x: `+=${Math.random() * 200 - 100}`,
      y: `+=${Math.random() * 200 - 100}`,
      rotation: `+=${Math.random() * 60 - 30}`,
    });

    const smoothScrollTrigger = ScrollTrigger.create({
      trigger: heroRef.current,
      start: "bottom top",
      end: "bottom bottom",
      onLeave: () => {
        nextSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      },
      onEnterBack: () => {
        heroRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      },
    });

    const images = gsap.utils.toArray(
      ".box-left, .box-right, .box-top, .box-bottom"
    );

    const animations = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    animations
      .to(
        ".box-left",
        {
          ...stopMotionEffect(),
          x: -1500,
          stagger: 0.1,
        },
        0
      )
      .to(
        ".box-right",
        {
          ...stopMotionEffect(),
          x: 1500,
          stagger: 0.1,
        },
        0
      )
      .to(
        ".box-top",
        {
          ...stopMotionEffect(),
          y: -1500,
          stagger: 0.1,
        },
        0
      )
      .to(
        ".box-bottom",
        {
          ...stopMotionEffect(),
          y: 1500,
          stagger: 0.1,
        },
        0
      );

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#eaeaec]">
      {/* Animated Edge-Aligned Boxes */}
      <div className="pointer-events-none fixed inset-0 z-50">
        {/* Left Edge Boxes */}
        <div className="box-left absolute top-0 left-0 w-1/4 drop-shadow-xl transition-transform md:w-auto sm:w-1/3">
          <Image
            src="/projects/board4.webp"
            width={300}
            height={300}
            alt="Board 4"
            className="h-auto w-full"
          />
        </div>
        <div className="box-left absolute bottom-0 left-0 w-1/5 drop-shadow-xl transition-transform md:w-auto sm:w-1/4">
          <Image
            src="/projects/speaker.webp"
            width={200}
            height={200}
            alt="Speaker"
            className="h-auto w-full"
          />
        </div>
        <div className="box-left absolute top-0 left-[20%] w-1/5 drop-shadow-xl transition-transform md:w-auto sm:w-1/4">
          <Image
            src="/projects/speaker.webp"
            width={200}
            height={200}
            alt="Speaker"
            className="h-auto w-full"
          />
        </div>
        <div className="box-left absolute top-[10%] left-0 w-1/3 drop-shadow-xl transition-transform md:w-auto sm:w-2/5">
          <Image
            src="/projects/notepad2.webp"
            width={400}
            height={400}
            alt="Notepad 2"
            className="h-auto w-full"
          />
        </div>
        <div className="box-left absolute top-[70%] left-[30%] w-1/5 drop-shadow-xl transition-transform md:w-auto sm:w-1/4">
          <Image
            src="/projects/board3.webp"
            width={200}
            height={200}
            alt="Board 3"
            className="h-auto w-full"
          />
        </div>

        {/* Top Edge Boxes */}
        <div className="box-top absolute top-0 left-[50%] z-10 w-1/3 drop-shadow-xl transition-transform md:w-auto sm:w-2/5">
          <Image 
            src="/projects/env.webp" 
            width={400} 
            height={400} 
            alt="Envelope"
            className="h-auto w-full"
          />
        </div>
        <div className="box-top absolute top-[-20%] left-[50%] w-1/3 drop-shadow-xl transition-transform md:w-auto sm:w-2/5">
          <Image
            src="/projects/sketches.webp"
            width={400}
            height={400}
            alt="Sketches"
            className="h-auto w-full"
          />
        </div>
        <div className="box-top absolute top-0 left-[70%] w-1/4 drop-shadow-xl transition-transform md:w-auto sm:w-1/3">
          <Image
            src="/projects/cable.webp"
            width={300}
            height={300}
            alt="Cable"
            className="h-auto w-full"
          />
        </div>
        <div className="box-top absolute top-[5%] right-0 w-1/4 drop-shadow-xl transition-transform md:w-auto sm:w-1/3">
          <Image
            src="/projects/notepad1.webp"
            width={300}
            height={300}
            alt="Notepad 1"
            className="h-auto w-full"
          />
        </div>
        <div className="box-top absolute top-0 right-0 z-10 w-1/4 drop-shadow-xl transition-transform md:w-auto sm:w-1/3">
          <Image 
            src="/projects/lamp.webp" 
            width={300} 
            height={300} 
            alt="Lamp"
            className="w-full h-auto"
          />
        </div>
        <div className="absolute top-0 right-0 z-0 transition-transform drop-shadow-xl box-top w-1/4 sm:w-1/3 md:w-auto">
          <Image
            src="/projects/rectangle 40319.webp"
            width={300}
            height={300}
            alt="Rectangle"
            className="w-full h-auto"
          />
        </div>

        {/* Right Edge Boxes */}
        <div className="absolute top-[40%] right-0 transition-transform drop-shadow-xl box-right w-1/5 sm:w-1/4 md:w-auto">
          <Image 
            src="/projects/volt.webp" 
            width={250} 
            height={250} 
            alt="Volt"
            className="w-full h-auto"
          />
        </div>
        <div className="absolute bottom-[10%] left-[90%] transition-transform drop-shadow-xl box-top w-1/12 sm:w-1/10 md:w-auto">
          <Image
            src="/projects/board1.webp"
            width={100}
            height={100}
            alt="Board 1"
            className="w-full h-auto"
          />
        </div>
        <div className="absolute bottom-[14%] left-[90%] transition-transform drop-shadow-xl rotate-45 box-top w-1/12 sm:w-1/10 md:w-auto">
          <Image
            src="/projects/board1.webp"
            width={100}
            height={100}
            alt="Board 1"
            className="w-full h-auto"
          />
        </div>

        {/* Bottom Edge Boxes */}
        <div className="absolute bottom-0 right-[10%] transition-transform drop-shadow-xl box-bottom w-1/3 sm:w-2/5 md:w-auto">
          <Image
            src="/projects/gears.webp"
            width={400}
            height={400}
            alt="Gears"
            className="w-full h-auto"
          />
        </div>
        <div className="absolute bottom-0 left-[40%] transition-transform drop-shadow-xl box-bottom w-2/5 sm:w-1/2 md:w-auto">
          <Image
            src="/projects/notepad4.webp"
            width={500}
            height={500}
            alt="Notepad 4"
            className="w-full h-auto"
          />
        </div>
        <div className="absolute bottom-0 left-[35%] transition-transform drop-shadow-xl box-bottom w-1/5 sm:w-1/4 md:w-auto">
          <Image
            src="/projects/solderingiron.webp"
            width={200}
            height={200}
            alt="Soldering Iron"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative h-auto overflow-hidden bg-[#eaeaec] z-0">
        <div
          className="relative flex h-screen w-full items-center justify-center z-10"
          ref={projectMatRef}
        >
          <ProjectMat />
        </div>

        <div ref={heroRef} className="relative h-screen w-full bg-[#eaeaec]">
        <div className="absolute bg-blend-multiply z-0">
        <Image src={"/projects/shadow.webp"} width={1920} height={1080} alt="logo" />
      </div>
          <h1 className="absolute top-[42%] md:top-1/2   md:mt-9 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center flex items-start flex-col justify-start">
            <span className="inline-block align-middle mr-2">
              <Image 
                src={"/favicon.svg"} 
                width={60} 
                height={60} 
                alt="logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
              />
            </span>
            <br/>Project Of The Week
          </h1>
        </div>

        <div
          ref={nextSectionRef}
          className="flex min-h-screen w-full items-center justify-center bg-[#eaeaec]"
        >
          <ProjectOfTheWeek />
        </div>

        <div className="w-full min-h-screen">
          <PrevProjectOfTheWeek />
        </div>

        <div className="w-full min-h-screen">
          <RegisterPage />
        </div>
      </div>
    </div>
  );
}

