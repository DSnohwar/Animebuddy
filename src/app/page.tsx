'use client'

import { Dialog } from '@headlessui/react'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
const navigation = [
  { name: 'Fantasy', href: '#' },
  { name: 'Mystery', href: '#' },
  { name: 'Action', href: '#' },
  { name: 'Romance', href: '#' },
]
const handles = [
  { name: 'Gitgub', href: 'https://github.com/DSnohwar' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/deepaknouhawar/' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  return (
    <>
    <div className='bg-slate-500'>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          className='flex items-center justify-between p-6 lg:px-8'
          aria-label='Global'>
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <div className='h-8 w-auto'>
              <img
                src='/logo.png'
                className='w-auto h-8'
                alt=''
              />

              </div>
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'>
              <span className='sr-only'>Open main menu</span>
              <Menu className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-sm font-semibold leading-6 text-black'>
                {item.name}
              </a>
            ))}
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <a
              href='#'
              className='text-sm font-semibold leading-6 text-gray-900'>
              Log in <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}>
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Your Company</span>
                <img
                  className='h-8 w-auto'
                  src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                  alt=''
                />
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}>
                <span className='sr-only'>Close menu</span>
                <X className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-950 hover:bg-gray-50'>
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className='py-6'>
                  <a
                    href='#'
                    className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className='relative isolate pt-14'>
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'>
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#c31432] to-[#240b36] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='py-24 sm:py-32 lg:pb-40'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                Your go-to Anime website
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-950'>
                Animebuddy is a small Anime recommendation website designed to suit your taste and recommend you series.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <a
                  href='#'
                  className='rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-gray-950 shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                  Explore Anime
                </a>
                <a
                  href='#'
                  className='text-sm font-semibold leading-6 text-gray-900'>
                  Currently Airing <span aria-hidden='true'>→</span>
                </a>
              </div>
            </div>
            <div className='mt-16 flow-root sm:mt-24'>
              <div className='min-h-[90vh] relative -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                <Image
                  src='/Poster.jpg'
                  alt='App screenshot'
                  className='rounded-md shadow-2xl ring-1 ring-gray-900/10'
                  fill
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          aria-hidden='true'>
          <div
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#c31432] to-[#240b36] opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
    <footer className="bg-black py-8">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-white">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Contact me</h2>
          {handles.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-gray-400 hover:text-white transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Deepak Nouhawar. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  </>
  )
}
