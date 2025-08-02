"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import ResumePanel from "../components/resumePanel";
import FadeInOnScroll from "../components/FadeInOnScroll";

export default function Home() {
  const [showResumePanel, setShowResumePanel] = useState(false);

  return (
    <>
      <ResumePanel
        setShowResumePanel={setShowResumePanel}
        showResumePanel={showResumePanel}
      />
      <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root">
        <div className="layout-container flex flex-col">
          <Navbar setShowResumePanel={setShowResumePanel} />
          <div
            id="about"
            className="scroll-mt-3 lg:px-20 md:px-40 flex flex-1 justify-center py-5 "
          >
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="@container">
                <div className="flex flex-col px-4 py-10 gap-8 lg:flex-row">
                  <FadeInOnScroll>
                    <div className="w-full lg:bg-cover bg-contain bg-center bg-no-repeat aspect-video rounded-lg">
                      <Image
                        width={500}
                        height={500}
                        className="m-auto rounded-3xl max-w-80 lg:rounded-full lg:max-w-60"
                        src="./profile.jpg"
                        alt="Profile Picture"
                      />
                    </div>
                  </FadeInOnScroll>
                  <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
                    <div className="flex flex-col gap-2 text-left">
                      <FadeInOnScroll>
                        <h1 className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                          Hi, I&apos;m Richard, a Junior Software Developer
                        </h1>
                      </FadeInOnScroll>
                      <FadeInOnScroll>
                        <h2 className="text-[#111418] text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                          I&apos;m currently studying Computer Science at the
                          University of Szeged, and this portfolio showcases some
                          of my projects. Feel free to explore my work and get in
                          touch if you have any questions or opportunities!
                        </h2>
                      </FadeInOnScroll>
                    </div>
                    <FadeInOnScroll>
                      <a
                        href="#projects"
                        className="hover:bg-blue-500 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                      >
                        <span className="truncate">View Projects</span>
                      </a>
                    </FadeInOnScroll>
                  </div>
                </div>
              </div>
              <FadeInOnScroll>
                <h2
                  id="projects"
                  className="scroll-mt-15 text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
                >
                  Projects
                </h2>
              </FadeInOnScroll>
              <div className="grid lg:grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                <FadeInOnScroll>
                  <div className="flex flex-col gap-3 pb-3 rounded-lg hover:scale-110 shadow-none hover:shadow-2xl transition-all duration-300 ease-in-out">
                    <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg">
                      <Image
                        width={500}
                        height={500}
                        src="./soszarnyitas.PNG"
                        alt="Soszarnyitas Thumbnail"
                      />
                    </div>
                    <div className="px-2">
                      <p className="text-[#111418] text-base font-medium leading-normal">
                        soszarnyitas.hu
                      </p>
                      <p className="text-[#60758a] text-sm font-normal leading-normal">
                        soszarnyitas.hu was one of my very first projects - a
                        website built for a local emergency gate opening
                        service.
                        <a
                          className="text-[#0c7ff2] underline"
                          target="_blank"
                          href="https://www.soszarnyitas.hu"
                        >
                          Visit site
                        </a>
                      </p>
                    </div>
                  </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                  <div className="flex flex-col gap-3 pb-3 rounded-lg hover:scale-110 shadow-none hover:shadow-2xl transition-all duration-300 ease-in-out">
                    <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg">
                      <Image
                        width={500}
                        height={500}
                        className="rounded-lg w-full h-full object-cover"
                        src="./djgabro.PNG"
                        alt="Djgabro Thumbnail"
                      />
                    </div>
                    <div className="px-2">
                      <p className="text-[#111418] text-base font-medium leading-normal">
                        djgabro.hu
                      </p>
                      <p className="text-[#60758a] text-sm font-normal leading-normal">
                        djgabro.hu is a dynamic website I built for a local DJ,
                        featuring event highlights, booking options, and a
                        modern, music-themed design.
                        <a
                          className="text-[#0c7ff2] underline"
                          target="_blank"
                          href="https://www.djgabro.hu"
                        >
                          Visit site
                        </a>
                      </p>
                    </div>
                  </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                  <div className="flex flex-col gap-3 pb-3 rounded-lg hover:scale-110 shadow-none hover:shadow-2xl transition-all duration-300 ease-in-out">
                    <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg">
                      <Image
                        width={500}
                        height={500}
                        className="rounded-lg w-full h-full object-cover"
                        src="./giftventures.jpg"
                        alt="Giftventures thumbnail"
                      />
                    </div>
                    <div className="px-2">
                      <p className="text-[#111418] text-base font-medium leading-normal">
                        GiftVentures
                      </p>
                      <p className="text-[#60758a] text-sm font-normal leading-normal">
                        GiftVentures is one of my first full-stack group
                        projects - a web app for gifting unique experiences,
                        built with React, Node.js, and MongoDB as part of our
                        final exam project.{" "}
                        <a
                          className="text-[#0c7ff2] underline"
                          href="./GiftVentures.docx"
                          download
                        >
                          Download documentation
                        </a>
                      </p>
                    </div>
                  </div>
                </FadeInOnScroll>
              </div>
              <FadeInOnScroll>
                <h2
                  id="skills"
                  className="scroll-mt-15 text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
                >
                  Skills
                </h2>
              </FadeInOnScroll>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                <FadeInOnScroll>
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 items-center">
                    <div
                      className="text-[#111418]"
                      data-icon="Code"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
                      </svg>
                    </div>
                    <h2 className="text-[#111418] text-base font-bold leading-tight">
                      HTML
                    </h2>
                  </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 items-center">
                    <div
                      className="text-[#111418]"
                      data-icon="Code"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
                      </svg>
                    </div>
                    <h2 className="text-[#111418] text-base font-bold leading-tight">
                      CSS
                    </h2>
                  </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 items-center">
                    <div
                      className="text-[#111418]"
                      data-icon="Code"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
                      </svg>
                    </div>
                    <h2 className="text-[#111418] text-base font-bold leading-tight">
                      JavaScript
                    </h2>
                  </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 items-center">
                    <div
                      className="text-[#111418]"
                      data-icon="Code"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
                      </svg>
                    </div>
                    <h2 className="text-[#111418] text-base font-bold leading-tight">
                      React
                    </h2>
                  </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 items-center">
                    <div
                      className="text-[#111418]"
                      data-icon="Code"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
                      </svg>
                    </div>
                    <h2 className="text-[#111418] text-base font-bold leading-tight">
                      Node.js
                    </h2>
                  </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 items-center">
                    <div
                      className="text-[#111418]"
                      data-icon="Code"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
                      </svg>
                    </div>
                    <h2 className="text-[#111418] text-base font-bold leading-tight">
                      Git
                    </h2>
                  </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 items-center">
                    <div
                      className="text-[#111418]"
                      data-icon="Code"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
                      </svg>
                    </div>
                    <h2 className="text-[#111418] text-base font-bold leading-tight">
                      Tailwindcss
                    </h2>
                  </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 items-center">
                    <div
                      className="text-[#111418]"
                      data-icon="Code"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
                      </svg>
                    </div>
                    <h2 className="text-[#111418] text-base font-bold leading-tight">
                      Python
                    </h2>
                  </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 items-center">
                    <div
                      className="text-[#111418]"
                      data-icon="Code"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
                      </svg>
                    </div>
                    <h2 className="text-[#111418] text-base font-bold leading-tight">
                      Java
                    </h2>
                  </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 items-center">
                    <div
                      className="text-[#111418]"
                      data-icon="Code"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
                      </svg>
                    </div>
                    <h2 className="text-[#111418] text-base font-bold leading-tight">
                      MongoDB
                    </h2>
                  </div>
                </FadeInOnScroll>
              </div>
              <FadeInOnScroll>
                <h2
                  id="contact"
                  className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
                >
                  Contact
                </h2>
              </FadeInOnScroll>
              <FadeInOnScroll>
                <form
                  action="https://formsubmit.co/hodiricsi@gmail.com"
                  method="POST"
                >
                  <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                      <p className="text-[#111418] text-base font-medium leading-normal pb-2">
                        Email
                      </p>
                      <input
                        required
                        name="email"
                        placeholder="your.email@example.com"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border border-[#dbe0e6] bg-white focus:border-[#dbe0e6] h-14 placeholder:text-[#60758a] p-[15px] text-base font-normal leading-normal"
                        defaultValue=""
                      />
                    </label>
                  </div>
                  <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                      <p className="text-[#111418] text-base font-medium leading-normal pb-2">
                        Message
                      </p>
                      <textarea
                        required
                        name="message"
                        placeholder="Your message"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border border-[#dbe0e6] bg-white focus:border-[#dbe0e6] min-h-36 placeholder:text-[#60758a] p-[15px] text-base font-normal leading-normal"
                      ></textarea>
                    </label>
                  </div>
                  <div className="flex px-4 py-3 justify-end">
                    <button className="hover:bg-blue-500 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                      <span className="truncate">Send</span>
                    </button>
                  </div>
                </form>
              </FadeInOnScroll>
            </div>
          </div>
          <footer className="flex justify-center">
            <div className="flex max-w-[960px] flex-1 flex-col">
              <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
                <p className="text-[#60758a] text-base font-normal leading-normal">
                  @2025 Richard&apos;s Portfolio
                </p>
              </footer>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
