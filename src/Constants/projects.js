import icons from "../assets/icons";
import friendlyCover from "../assets/Friendly-cover.webp";
import docRxCover from "../assets/DocRx_cover.webp";

export const projects = [
  {
    id: 1,
    name: "DocRx",
    subHeading: "A mobile app for digital prescriptions.",
    image: docRxCover,
    link: [
      {
        name: "FrontEnd",
        link: "https://github.com/Saibalweb/DocRx",
      },
      {
        name: "BackEnd",
        link: "https://github.com/Saibalweb/DocRx_Server",
      },
    ],
    description: `Prescription creation and storage for doctors.
    Patient information management with secure digital records.`,
    techStack: [
      { name: "React Native", icon: icons.react },
      { name: "Expo", icon: icons.expo },
      { name: "Node.js", icon: icons.nodeJs },
      { name: "Express.js", icon: icons.express },
      { name: "MongoDB", icon: icons.mongo },
      { name: "NativeWind", icon: icons.tailwind },
      { name: "Tailwind", icon: icons.tailwind },
      { name: "Bcrypt", icon: icons.key },
      { name: "jwt", icon: icons.jwt },
    ],
  },
  {
    id: 2,
    name: "Friendly",
    subHeading: "A Socila Media App where you can connect with other people",
    image: friendlyCover,
    link: [
      {
        name: "FrontEnd",
        link: "https://github.com/Saibalweb/Friendly",
      },
      {
        name: "BackEnd",
        link: "https://github.com/Saibalweb/NodeJs_SocialMedia_Backend_Server",
      },
    ],
    description: `User authentication, posts with likes and comments, and notifications.
Full-stack development, RESTful API integration, state management, database design, and
deployment.`,
    techStack: [
      { name: "React Native", icon: icons.react },
      { name: "Node.js", icon: icons.nodeJs },
      { name: "Express.js", icon: icons.express },
      { name: "MongoDB", icon: icons.mongo },
      { name: "NativeWind", icon: icons.tailwind },
      { name: "Tailwind", icon: icons.tailwind },
      { name: "Bcrypt", icon: icons.key },
      { name: "jwt", icon: icons.jwt },
    ],
  },
];
