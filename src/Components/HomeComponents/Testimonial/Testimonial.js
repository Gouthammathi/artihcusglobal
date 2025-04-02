import React from 'react';
 
const Testimonial = () => {
  const courses = [
    {
      name: 'Testimonial',
      description:
        'Outstanding service, from initial consultation to final installation, exceeded expectations. Highly recommend for SAP EWM implementations!',
      ceo: 'CEO of a Retail giant ,UAE', // Added CEO field
    },
    {
      name: 'Testimonial',
      description:
        'Extremely pleased with the professionalism, efficiency, and quality of the SAP EWM implementations. Excellent company to work with!',
      ceo: 'CTO of a Fashion  & Retail Brand, India ', // Added CEO field
    },
  ];
 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-orange-500 mb-8">Testimonials</h1>
      <div className="flex justify-center gap-10 flex-wrap">
        {courses.map((course, index) => (
          <div
            key={index}
            className="relative bg-green text-gray-800 p-6 rounded-lg shadow-md overflow-hidden group w-full md:w-[450px] lg:w-[500px] mx-auto"
          >
            {/* Expanding Circle */}
            <div className="absolute h-[5em] w-[9em] -top-[2.5em] -right-[2.5em] rounded-full bg-orange-400 group-hover:scale-[800%] duration-500 z-[-1]" />
 
            {/* Course Name */}
            <h2 className="text-2xl font-semibold mb-4 group-hover:text-black duration-500 z-10">
              {course.name}
            </h2>
 
            {/* Course Description */}
            <p className="group-hover:text-black duration-500 z-10">{course.description}</p>
 
            {/* CEO Text in Orange */}
            <p className="text-orange-500 group-hover:text-black mt-4 font-semibold">{course.ceo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default Testimonial;