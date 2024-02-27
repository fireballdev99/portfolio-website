"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimateNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementList = [
  {
    metric: "Projects",
    value: "20",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "10000",
  },
  {
    metric: "Awards",
    value: "2",
  },
  {
    metric: "Years",
    value: "4",
  },
];

const AchievementSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-xl py-6 md:py-8 px-2 xl:px-16 md:px-12 flex flex-col xl:flex-row md:flex-row items-center justify-between">
        {achievementList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-2 md:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimateNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      frictions: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementSection;
