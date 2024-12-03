import React from 'react'
export default function Step() {
    
  return (
    <div className="flex justify-between items-center mb-6">
          {[1, 2, 3, 4].map((step, index) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-lg border-4 ${
                  index <= 2 ? 'border-blue-400' : 'border-blue-200'
                }`}
              >
                {step}
              </div>
              {index !== 3 && (
                <div className="w-16 h-1 bg-blue-400 rounded-full mx-2"></div>
              )}
            </div>
          ))}
        </div>
  )
}

