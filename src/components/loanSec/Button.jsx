import React from 'react'
import { Link } from 'react-router-dom'

export default function Button() {
  return (
    <div className="flex flex-wrap gap-4 lg:gap-12 mt-6 lg:mt-10">
            <button>
              <Link to={'/signup-page'} className="flex text-black text-lg sm:text-xl border-[2px] sm:border-[3px] border-blue-800 hover:bg-yellow-300 hover:border-yellow-300 px-4 sm:px-4 py-2 sm:py-2 rounded-xl  items-center">
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-7 sm:h-7 pl-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </button>
            <button>
              <Link to={'/presonal-details-formOne'} className="flex text-white text-lg sm:text-xl border-[2px] sm:border-[3px] bg-primary border-primary px-4 sm:px-4 py-2 sm:py-2 rounded-xl  items-center">
                Contact Sales
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-7 sm:h-7 pl-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </button>
          </div>
  )
}
