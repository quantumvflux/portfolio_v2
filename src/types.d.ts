interface Link {
  text: string;
}

interface Skill {
  imgUrl: string;
  skillName: string;
  skillDescription: string;
}

interface Project {
  title: string;
  projectLink: string;
  img: string;
  type: string;
}

type HandleShowNav = () => void;
