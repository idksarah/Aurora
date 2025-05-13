import Faq from "../components/faq";
import HeadObject from "../components/head";
import Nav from "../components/nav";
import Photos from "../components/photo";
import Head from "next/head";
import { useEffect, useRef } from "react";

export default function Home() {
  const eventsContainerRef = useRef(null);

  useEffect(() => {
    const container = eventsContainerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.2;
    const maxScroll = container.scrollWidth - container.clientWidth;
    let direction = 1;

    const scroll = () => {
      if (!container) return;

      scrollAmount += scrollSpeed * direction;

      if (scrollAmount >= maxScroll) {
        direction = -1;
      } else if (scrollAmount <= 0) {
        direction = 1;
      }

      container.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);

    const pauseScroll = () => cancelAnimationFrame(animation);
    const resumeScroll = () => requestAnimationFrame(scroll);

    container.addEventListener('mouseenter', pauseScroll);
    container.addEventListener('mouseleave', resumeScroll);

    return () => {
      cancelAnimationFrame(animation);
      if (container) {
        container.removeEventListener('mouseenter', pauseScroll);
        container.removeEventListener('mouseleave', resumeScroll);
      }
    };
  }, []);

  return (
    <>
      <HeadObject />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/aileron-font@1.0.0/aileron.min.css" rel="stylesheet" />
      </Head>
      <Nav />
      <style jsx global>{`
        .font-title {
          font-family: 'Bodoni Moda', 'Cormorant Garamond', serif;
        }
        
        .font-body {
          font-family: 'Aileron', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      `}</style>
      <main className="bg-[#1c1c19] text-[#fcf7f0] min-h-screen font-body">

        <section className="relative mb-16 flex flex-col items-center justify-center gap-2 lg:mb-28 pt-8">
          <div className="absolute top-4 right-4 bg-[#dba7d0] text-[#1c1c19] px-6 py-3 rounded-full transform rotate-12 font-semibold">
            All Skill Levels Welcome!
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            <h1 className="text-6xl md:text-8xl font-title text-center leading-tight tracking-wide">
              <span className="block font-medium text-[#fcf7f0]">Girls Coding</span>
              <span className="block italic font-semibold text-[#fcf7f0]">Summer Event</span>
            </h1>
          </div>

          <div id="register" className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-8 md:gap-16 px-4">
            <div className="md:w-1/2 flex flex-col items-center md:items-start">
              <div className="text-3xl font-title font-semibold text-center md:text-left italic mb-4">
                July 18<sup>th</sup>, 19<sup>th</sup>, & 20<sup>th</sup>
              </div>

              <div className="text-xl font-semibold text-center md:text-left mb-8 flex items-center gap-2">
                <span className="text-[#dba7d0]">📍</span> San Francisco, CA
              </div>

              <div className="text-lg max-w-lg mb-8 font-body">
                Aurora is a <span className="text-[#dba7d0] font-semibold">beginner-friendly, gender-focused hackathon</span> with 3 days of workshops,
                mentors, and hands-on coding & engineering projects—no experience needed!
              </div>

              <a
                href="https://airtable.com/appiMMj696TIbz1yu/pagGwqoRNscmhe9Ra/form"
                className="bg-[#dba7d0] text-[#1c1c19] px-12 py-4 rounded-full text-xl transform hover:scale-110 transition-transform font-semibold no-underline"
              >
                Register Now!
              </a>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <img
                src="/aurora-logo.png"
                alt="Aurora logo with stars and ethereal effects"
                className="w-full max-w-lg hover:opacity-90 transition-opacity"
              />
            </div>
          </div>

        </section>

        <section className="flex flex-col items-center mb-16" id="past-dos">
          <h2 className="text-4xl font-title italic mb-12">Past Events</h2>
          <div
            ref={eventsContainerRef}
            className="flex overflow-x-auto pb-4 gap-6 w-full max-w-5xl"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            <div className="bg-[#1c1c19] p-6 rounded-2xl border border-[#dba7d0]/30 hover:border-[#dba7d0] transition-colors cursor-pointer flex-shrink-0">
              <div className="w-60 h-40 bg-[#dba7d0]/10 rounded-xl mb-4 overflow-hidden">
                <img src="/photos/solstice.png" alt="Solstice event" className="w-full h-full object-cover" />
              </div>
              <p className="text-center font-title italic">Solstice | Chicago, IL</p>
            </div>

            <div className="bg-[#1c1c19] p-6 rounded-2xl border border-[#dba7d0]/30 hover:border-[#dba7d0] transition-colors cursor-pointer flex-shrink-0">
              <div className="w-60 h-40 bg-[#dba7d0]/10 rounded-xl mb-4 overflow-hidden">
                <img src="/photos/spark.jpg" alt="Spark event" className="w-full h-full object-cover" />
              </div>
              <p className="text-center font-title italic">Spark | San Francisco, CA</p>
            </div>

            <div className="bg-[#1c1c19] p-6 rounded-2xl border border-[#dba7d0]/30 hover:border-[#dba7d0] transition-colors cursor-pointer flex-shrink-0">
              <div className="w-60 h-40 bg-[#dba7d0]/10 rounded-xl mb-4 overflow-hidden">
                <img src="/photos/horizon.jpeg" alt="Horizon event" className="w-full h-full object-cover" />
              </div>
              <p className="text-center font-title italic">Horizon | New York, NY</p>
            </div>

            <div className="bg-[#1c1c19] p-6 rounded-2xl border border-[#dba7d0]/30 hover:border-[#dba7d0] transition-colors cursor-pointer flex-shrink-0">
              <div className="w-60 h-40 bg-[#dba7d0]/10 rounded-xl mb-4 overflow-hidden">
                <img src="/photos/halo.jpg" alt="Halo event" className="w-full h-full object-cover" />
              </div>
              <p className="text-center font-title italic">Halo | Los Angeles, CA</p>
            </div>

            <div className="bg-[#1c1c19] p-6 rounded-2xl border border-[#dba7d0]/30 hover:border-[#dba7d0] transition-colors cursor-pointer flex-shrink-0">
              <div className="w-60 h-40 bg-[#dba7d0]/10 rounded-xl mb-4 overflow-hidden">
                <img src="/photos/alpine.jpeg" alt="Alpine event" className="w-full h-full object-cover" />
              </div>
              <p className="text-center font-title italic">Alpine | Salt Lake City, UT</p>
            </div>

            <div className="bg-[#1c1c19] p-6 rounded-2xl border border-[#dba7d0]/30 hover:border-[#dba7d0] transition-colors cursor-pointer flex-shrink-0">
              <div className="w-60 h-40 bg-[#dba7d0]/10 rounded-xl mb-4 overflow-hidden">
                <img src="/photos/celestial.webp" alt="Celestial event" className="w-full h-full object-cover" />
              </div>
              <p className="text-center font-title italic">Celestial | Toronto, ON</p>
            </div>

            <div className="bg-[#1c1c19] p-6 rounded-2xl border border-[#dba7d0]/30 hover:border-[#dba7d0] transition-colors cursor-pointer flex-shrink-0">
              <div className="w-60 h-40 bg-[#dba7d0]/10 rounded-xl mb-4 overflow-hidden">
                <img src="/photos/blossom.jpg" alt="Blossom event" className="w-full h-full object-cover" />
              </div>
              <p className="text-center font-title italic">Blossom | Atlanta, GA</p>
            </div>

            <div className="bg-[#1c1c19] p-6 rounded-2xl border border-[#dba7d0]/30 hover:border-[#dba7d0] transition-colors cursor-pointer flex-shrink-0">
              <div className="w-60 h-40 bg-[#dba7d0]/10 rounded-xl mb-4 overflow-hidden">
                <img src="/photos/spark.jpg" alt="Spark event" className="w-full h-full object-cover" />
              </div>
              <p className="text-center font-title italic">Spark | Boston, MA</p>
            </div>
          </div>
        </section>

        <section className="mb-16 flex flex-col items-center gap-8">
          <h2 className="text-4xl font-title italic">Workshops</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 xl:w-3/4">
            <div className="workshop-card transform hover:scale-105 transition-transform">
              <div className="w-full h-48 bg-[#dba7d0]/10 rounded-t-2xl flex items-center justify-center overflow-hidden">
                <img src="/photos/website.png" alt="Web Development" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 bg-[#1c1c19] rounded-b-2xl border-x border-b border-[#dba7d0]/30">
                <h3 className="text-2xl font-title italic mb-2">Day 1: Web Dev</h3>
                <p className="font-body">Build a Website with HTML, CSS, JS, and 3D Modeling!</p>
              </div>
            </div>

            <div className="workshop-card transform hover:scale-105 transition-transform">
              <div className="w-full h-48 bg-[#dba7d0]/10 rounded-t-2xl flex items-center justify-center overflow-hidden">
                <img src="/photos/pcb.jpg" alt="PCB Design" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 bg-[#1c1c19] rounded-b-2xl border-x border-b border-[#dba7d0]/30">
                <h3 className="text-2xl font-title italic mb-2">Day 2: Hardware</h3>
                <p className="font-body">Design and Print Circuit Board Keychains!</p>
              </div>
            </div>

            <div className="workshop-card transform hover:scale-105 transition-transform">
              <div className="w-full h-48 bg-[#dba7d0]/10 rounded-t-2xl flex items-center justify-center overflow-hidden">
                <img src="/photos/gamdev.jpg" alt="Game Development" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 bg-[#1c1c19] rounded-b-2xl border-x border-b border-[#dba7d0]/30">
                <h3 className="text-2xl font-title italic mb-2">Day 3: Game Dev</h3>
                <p className="font-body">Create Your Own Video Game!</p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center gap-4 pb-16">
          <h2 className="text-4xl font-title italic mb-8" id="faq">Frequently Asked Questions</h2>
          <Faq />
        </section>
      </main>
      <footer className="bg-[#1c1c19] text-[#fcf7f0] flex items-center justify-center py-4 font-title font-semibold border-t border-[#dba7d0]/20">
        <p className="">
          THIS WEBSITE IS OPEN SOURCE AT{" "}
          <a href="https://github.com/hackclub/aurora" className="text-[#dba7d0] hover:text-[#fcf7f0] transition-colors no-underline">
            HACKCLUB/AURORA
          </a>
        </p>
      </footer>
    </>
  );
}
