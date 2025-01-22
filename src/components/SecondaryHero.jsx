import React from 'react'

const SecondaryHero = () => {
      return (
            <section className="bg-white dark:bg-gray-900">
                  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Johnas L. Blasco </h1>
                              <p className="max-w-2xl mb-6 font-light text-white md:text-gray-800 lg:mb-8 md:text-lg lg:text-xl">from Desktop and Mobile to Web apps Hi, im Johnas L. Blasco an Aspiring Full Stack developer with experience building modern web apps using MERN stack</p>
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                              <img src="/secondaryHero.png" alt="mockup" className='w-full' />
                        </div>
                  </div>
            </section>
      )
}

export default SecondaryHero