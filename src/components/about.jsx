import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-secondary p-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">About Me</h2>
        <div className="mb-4">
          <p className="text-gray-700 font-medium">
            Hi, my name is [Your Name] and I am a [Your Profession]. I have been
            working in the field for [Number] years and have a passion for [Your
            Passion].
          </p>
        </div>
        <p className="text-gray-700 font-medium">
          In my free time, I enjoy [Your Hobbies] and [Other Hobbies]. I am also
          an avid [Your Favorite Thing] fan.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
