import React from 'react';


const TrustedClients = () => {
  const reviews = [
    {
      id: 1,
      name: "Prince Saini",
      time: "04 june 2024",
      rating: 5,
      review:
        "I had a fantastic experience with [Website Name]! The loan application process was straightforward, and their team was incredibly helpful in guiding me through every step. I received my loan approval quickly and at competitive interest rates. The transparency they offer is commendable—no hidden fees or surprises. I highly recommend their services to anyone looking for reliable financial assistance!",
      avatar: "https://via.placeholder.com/50", // Replace with actual avatar URL
    },
    {
      id: 2,
      name: "Armen Sargsyan",
      time: "04 june 2024",
      rating: 5,
      review:
        "[Website Name] made securing a loan stress-free. The agents were professional and responsive, answering all my questions promptly. While the interest rates were slightly higher than expected, the service quality and fast processing made up for it. It’s a trustworthy platform that I’d use again if needed",
      avatar: "https://via.placeholder.com/50", // Replace with actual avatar URL
    },
  ];


 return (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-28">
      <h1 className="text-4xl font-semibold text-center mb-8">Our Trusted Clients</h1>
      <div className="flex justify-between items-center mb-8"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border border-gray-200 rounded-lg p-6 shadow-sm"
          >
            <div className="flex items-center mb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full mr-6"
              />
              <div>
                <h2 className="text-lg font-semibold">{review.name}</h2>
                <p className="text-sm text-gray-500">{review.time}</p>
                <p className=" text-2xl text-yellow-500">{"★".repeat(review.rating)}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{review.review}</p>
            </div>
        ))}
      </div>
      <div className="mt-8 text-right">
        <a href="#" className="text-blue-600 hover:underline">
          See all reviews
        </a>
      </div>
    </div>
  </section>
);

};

export default TrustedClients;
