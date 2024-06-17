"use client"

import {Navigation} from "@/app/components/nav";
import {Card} from "@/app/components/card";
import {Article} from "@/app/projects/article";
import React from "react";

const Error = ({ status, children }: any) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
      {status = 404?
      <div className="flex flex-col items-center w-full h-full">
      <Navigation />
        <div className="w-[560px] px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 ">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              This page cannot be found.
            </h2>
            <p className="mt-4 text-zinc-400">
              Apparently I haven’t made the page yet!
            </p>
          </div>
          <div className="w-full h-px bg-zinc-800" />
        </div>
      </div>:
      <>
        <div className="flex flex-col items-center w-full h-full">
          <Navigation />
          <div className="w-[560px] px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 ">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                Errors :(
              </h2>
            </div>
            <div className="w-full h-px bg-zinc-800" />
          </div>
        </div>
      </>
      }
      <main>{children}</main>
    </div>
  )
}

export default Error
