"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import img1 from "/heroImg.png"
import img2 from "/heroImg2.png"
import logo from '/logo.png'

export default function HeroPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 11,
    minutes: 25,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 }
        }
        return prev
      })
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#121212] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-4 left-4 grid grid-cols-4 gap-1 opacity-30">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1 h-1 bg-[#D1CABA] rounded-full" />
        ))}
      </div>

  <div className="absolute top-12 right-4 flex flex-col gap-1 opacity-30">
  {Array.from({ length: 6 }).map((_, rowIndex) => (
    <div key={rowIndex} className="flex gap-1">
      {Array.from({ length: 15 }).map((_, dotIndex) => (
        <div key={`${rowIndex}-${dotIndex}`} className="w-1 h-1 bg-[#D1CABA] rounded-full" />
      ))}
    </div>
  ))}
</div>

      {/* Logo */}
      <motion.div
        className="absolute mt-6  left-1/2 transform -translate-x-1/2 "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
    <img className="w-24 h-24" src={logo} alt="" />
      </motion.div>

      <div className="container mx-auto  px-4 h-screen flex items-center relative justify-end">
        {/* Left Image */}
        <motion.div
          className="absolute -left-32  transform w-[40%] h-[80%]  z-0"
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={img1}
            alt="Portrait of a Black man"
          
            className="  object-cover w-full filter grayscale-[40%] contrast-120 brightness-70 sepia-[20%]"
          />
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="absolute -right-14 top-1/2 transform -translate-y-1/2  z-0 w-[40%] h-[60%] "
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={img2}
            alt="Portrait of a Black woman"
      
            className=" object-cover w-full filter grayscale-[40%] contrast-120 brightness-70 sepia-[20%]"
          />
        </motion.div>

        {/* Central Content */}
        <motion.div
          className="flex flex-col items-center lg:mt-64 mt-12  text-center z-10 line-height mx-auto max-w-2xl md:max-w-3xl"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl line-height font-light tracking-widest mb-4 text-[#F3F3F3]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            BE A PART OF
          </motion.h2>

          <motion.h1
            className="text-5xl text-[#D1CABA]  md:text-7xl font-thin tracking-wider mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            THE MOVEMENT
          </motion.h1>

          <motion.p
            className="text-[#9E9E9E] text-md leading-relaxed mb-12 max-w-xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Project Black Is A Movement Dedicated To Elevating Black Excellence And Minority Success—Reshaping
            Narratives, Fostering Innovation, And Creating Opportunities For Lasting Empowerment.
          </motion.p>

          <motion.div
            className="flex gap-6 flex-wrap justify-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <button className="border   border-[#D38F8F] text-[#D38F8F] px-8 py-3 hover:bg-[#D38F8F] hover:text-black transition-colors duration-300 font-medium">
              Join the Waitlist
            </button>
            <button className="bg-[#563636] text-white px-8 py-3 hover:bg-[#563636dd] transition-colors duration-300 font-medium">
              Apply now
            </button>
          </motion.div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          className="absolute bottom-8 left-8 border border-amber-600 p-4 bg-black/50 backdrop-blur-sm"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="text-2xl font-mono text-amber-600">
            {String(timeLeft.days).padStart(2, "0")} : {String(timeLeft.hours).padStart(2, "0")} :{" "}
            {String(timeLeft.minutes).padStart(2, "0")}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
 
