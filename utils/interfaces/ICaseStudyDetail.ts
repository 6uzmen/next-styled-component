interface ITechnology {
  name: string;
  url: string;
}

export interface ICaseStudyDetail {
  title: string;
  overview: string;
  challenge: string;
  solution: string;
  displayImage: string;
  link: string;
  technologies: ITechnology[];
}
