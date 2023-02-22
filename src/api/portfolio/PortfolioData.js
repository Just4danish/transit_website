// import TimeTagWatch from "../../views/portfolio/TimeTagWatch";
// import UnderArmour from "../../views/portfolio/UnderArmour";
// import ReStyling from "../../views/portfolio/ReStyling";
// import ToastReel from "../../views/portfolio/ToastReel";
// import WhatIfGold from "../../views/portfolio/WhatIfGold";
// import NileKabutha from "../../views/portfolio/NileKabutha";
// import InnovationQualityCostEffectiveness from "../../views/portfolio/InnovationQualityCostEffectiveness";
// import NovaraConic from "../../views/portfolio/NovaraConic";
// import BastianBux from "../../views/portfolio/BastianBux";

const data = [
  {
    id: 1,
    title: " Transit Security Solutions LLC",
    // slug: "re-styling",
    src: "/assets/img/FrontPage/2.jpg",
    srcSlider: "/assets/img/FrontPage/2.jpg",
    category: ["Brand"],
    description:
      "An Innovative Solutions Provider Committed To High-Quality and Cost Effective.",
    overlay: 2,
    // component: (props) => <ReStyling {...props} />,
  },
  {
    id: 2,
    title: "Innovation,Quality & Cost Effectiveness",
    // slug: "time-tag-watch",
    category: ["Brand"],
    description:
      "We Share Our Clients Aspirations And Deliver High-Performance Solutions.",

    src: "/assets/img/FrontPage/1.jpg",
    srcSlider: "/assets/img/FrontPage/1.jpg",
    overlay: 2,
    // component: (props) => <TimeTagWatch {...props} />,
  },
  {
    id: 3,
    title: "High-Performance Solutions",
    // slug: "under-armour",
    src: "/assets/img/FrontPage/3.jpg",
    srcSlider: "/assets/img/FrontPage/3.jpg",
    category: ["Brand"],
    description:
      "We Share Our Clients Aspirations And Deliver High-Performance Solutions.",
    overlay: 2,

    // component: (props) => <UnderArmour {...props} />,
  },

  {
    id: 4,
    title: "Creating Unique Value",
    // slug: "toast-2019-reel",
    // category: ["Video"],
    // src: "https://theme.dsngrid.com/video/Transit.mp4",
    // video: {
    //   poster: "/assets/img/project/project4/1.jpg",
    //   loop: true,
    // },
    category: ["Brand"],
    src: "/assets/img/FrontPage/4.jpg",
    srcSlider: "/assets/img/FrontPage/4.jpg",
    description:
      "The Most Relible Systems,Solution And Technical Service Company Creating Unique Value For Each Clint.",
    overlay: 2,
    // component: (props) => <ToastReel {...props} />,
  },
  {
    id: 5,
    title: "Performance And Profitability",
    // slug: "what-if-gold",
    src: "/assets/img/FrontPage/5.jpg",
    srcSlider: "/assets/img/FrontPage/5.jpg",
    category: ["Brand"],
    description:
      "We Deliver the Latest Technology Desiged To Drive Performance And Profitability",
    overlay: 2,
    // component: (props) => <WhatIfGold {...props} />,
  },
  //   {
  //     id: 6,
  //     title: "Nile - Kabutha",
  //     slug: "nile-kabutha",
  //     category: ["Photography", "Brand"],
  //     src: "/assets/img/project/project6/1.jpg",
  //     srcSlider: "/assets/img/project/project6/2.jpg",
  //     description:
  //       "Striking and powerful Aston Martin Vantage captivates you at the first sight.",
  //     overlay: 2,
  //     // component: (props) => <NileKabutha {...props} />,
  //   },
  //   {
  //     id: 7,
  //     title: "Innovation,Quality & Cost Effectiveness",
  //     slug: "innovation-quality-cost-effectiveness",
  //     category: ["Photography"],
  //     src: "/assets/img/project/project7/1.jpg",
  //     srcSlider: "/assets/img/project/project7/4.jpg",
  //     description:
  //       "Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.",
  //     overlay: 2,
  //     // component: (props) => <InnovationQualityCostEffectiveness {...props} />,
  //   },
  //   {
  //     id: 8,
  //     title: "Novara Conic",
  //     slug: "novara-conic",
  //     src: "/assets/img/project/project8/1.jpg",
  //     srcSlider: "/assets/img/project/project8/4.jpg",
  //     category: ["Architecture"],
  //     description:
  //       "Cal was first. The first public university in the great state of California. They are the pioneers.",
  //     overlay: 2,
  //     // component: (props) => <NovaraConic {...props} />,
  //   },
  //   {
  //     id: 9,
  //     title: "Bastian Bux",
  //     slug: "bastian-bux",
  //     category: ["Photography"],
  //     description:
  //       "Bastian bux is the consequence of reducing everything surrounding a dj and producer to its essential element: the music.",
  //     src: "/assets/img/project/project9/1.jpg",
  //     srcSlider: "/assets/img/project/project9/3.jpg",
  //     overlay: 2,
  //     // component: (props) => <BastianBux {...props} />,
  //   },
];

export const getPortfolioData = () => data;

export const getPortfolioItem = (value, whereName = "id") => {
  return data.find((item) => {
    if (item[whereName] === value) return item;
    return null;
  });
};
export const getPortfolioLink = (item) => {
  if (item) return item.slug && "/services/" + item.slug;

  return "";
};
