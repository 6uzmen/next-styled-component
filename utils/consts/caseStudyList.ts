import { ICaseStudyDetail } from "../interfaces/ICaseStudyDetail";

export const defaultCase: ICaseStudyDetail = {
  title: "",
  overview: "",
  challenge: "",
  solution: "",
  displayImage: "",
  link: "",
  technologies: [],
};

const infinite: ICaseStudyDetail = {
  title: `Infinite`,
  overview: `Infinite will use its platform to securely create and sell verifiable non-fungible tokens that represent the authenticity of both digital and physical products. These tokens will be transacted in their marketplace.`,
  challenge: `SUKU needed an attractive marketplace and at the same time a cost-effective, secure, and scalable way to prove digital and physical asset authenticity and ownership by brands and customers that require a high degree of trust.`,
  solution: `ZirconTech was part of the core team that developed the different parts of the platform. Hedera Token Service (HTS) was used to strengthen the trust between brands, customers, and marketplace participants. The system guarantees the scalability to millions of users through a backend infrastructure built in AWS ecosystem running NodeJs (NestJs) backed up by a MongoDB data layer. Quality aspects were ensured through  unit and integration tests as well as interface tests with Cypress Lastly, the frontend was developed using React.js first and then Svelte.js. We were using Svelte and SvelteKit working in pairs with a design team to power the use of a custom UI library and a defined set of development guidelines. `,
  displayImage: `/assets/images/webp/suku-infinite.webp`,
  link: `case-study/infinite`,
  technologies: [
    { name: "#Svelte", url: "https://svelte.dev/" },
    { name: "#NestJs", url: "https://nestjs.com/" },
    { name: "#Hedera", url: "https://hedera.com/" },
    { name: "#Ethereum", url: "https://ethereum.org/" },
    { name: "#Auth0", url: "https://auth0.com/" },
    { name: "#Aws", url: "https://aws.amazon.com/" },
  ],
};

const giveTrack: ICaseStudyDetail = {
  title: `Givetrack`,
  overview: `GiveTrack™ is an innovative donation platform for nonprofits to provide transparency and accountability to donors by sharing financial information and direct project results in real-time. The platform helps nonprofits overcome breakdowns and challenges to do their work without limitations.`,
  challenge: `One issue with charities is donors never know for sure how much of the funds they give actually make it to the intended cause. GiveTrack solves that problem by bringing transparency to the donation process. By using Bitcoin and blockchain technology, the web-based project allows donors to give to a cause and then track the progress of those funds in real-time, thereby reducing opportunities for fraud.`,
  solution: `ZirconTech was in charge of the frontend and backend development. We designed and implemented the solution that included communication with API Blockchain (RootStock), the back-end API (built with Node.JS) under the infrastructure of AWS and Jenkins CI and the front-end using React.JS. Once the implementation was finished, we took over the maintenance, support and development of new functionalities.  `,
  displayImage: `/assets/images/webp/givetrack-study.webp`,
  link: `case-study/givetrack`,
  technologies: [
    { name: "#React", url: "https://en.reactjs.org/" },
    { name: "#NodeJs", url: "https://nodejs.org/" },
    { name: "#Bitcoin", url: "https://bitcoin.org/" },
    { name: "#Wyre", url: "https://www.sendwyre.com/" },
  ],
};

const cuckoo: ICaseStudyDetail = {
  title: `Cuckoo`,
  overview: `Cuckoo Links allows you to create a link-in-bio landing page with links to not only major streaming platforms, but beat markets for producers, indie stores, indie streaming platforms, YouTube videos, custom URL's like your website or merch store and much more.`,
  challenge: `The music industry is becoming more competitive and it is difficult, mainly for independent artists, to create and maintain a place where they can have up-to-date information about their music and social networks. Added to this is the impossibility of publishing more than one link on some social networks (eg Instagram) which makes it necessary to have a single url with which you can access all the information about each artist.`,
  solution: `We designed and developed a mobile application (Android and iOS) that works as a CMS (Content Management Service) that allows artists to unify all the information from streaming platforms and social networks in a single link. The application was developed using React Native with a backend in Node.JS. All the infrastructure is in Amazon Web Services. It also has an integration with Google analytics that allows obtaining information about the engagement generated. Both the backoffice and the web page that is generated from the CMS were developed in React.JS`,
  displayImage: `/assets/images/webp/cuckoo-study.webp`,
  link: `case-study/cuckoo`,
  technologies: [
    { name: "#ReactNative", url: "https://reactnative.dev/" },
    { name: "#NodeJs", url: "https://nodejs.org/" },
    { name: "#Analytics", url: "https://analytics.google.com/" },
  ],
};

const monax: ICaseStudyDetail = {
  title: `Monax`,
  overview: `Monax is a contract lifecycle management platform which allows consumers to easily procure lawyer-tested agreements and stay in full control of their business contracts. Harnessing a unique combination of active agreements, blockchain technology, and a contract modeling engine, the platform is designed to move business legal obligations into the networked world.`,
  challenge: `Monax's main challenge was to develop a cutting-edge platform using state-of-the-art technology. In many respects they were pioneers, developing legal technology on blockchain.`,
  solution: `We collaborated with the development of the Vent component of the Bosmarmot open source project. Bosmarmot is a set of tools developed by Monax for use with Hyperledger Burrow (Hyperledger Burrow provides a modular Blockchain client with a partially authorized smart contract interpreter, developed according to the specification of the Ethereum Virtual Machine (EVM)). What the Vent component does is interact with Burrow gRPC obtaining blocks, transactions and events generated from smart contracts implemented in Solidity, unpacking and decoding them to store in legible form in sql tables created on the fly. We are also helping Monax with the development of new features and the frontend of their NFT legal agreement tool.`,
  displayImage: `/assets/images/webp/monax-study.webp`,
  link: `case-study/monax`,
  technologies: [
    { name: "#React", url: "https://en.reactjs.org/" },
    { name: "#NodeJs", url: "https://nodejs.org/" },
    { name: "#eSign", url: "https://esign.com/" },
  ],
};

export const caseStudies: ICaseStudyDetail[] = [
  infinite,
  cuckoo,
  giveTrack,
  monax,
];
