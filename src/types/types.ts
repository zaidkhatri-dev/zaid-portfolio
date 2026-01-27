export interface ContainerProps {
  children: React.ReactNode;
}

export interface MessageProps {
  content: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  imageURL: string;
  githubURL: string;
  technologies: string;
}

export interface SendMsgProps {
  isAnimate: boolean;
}