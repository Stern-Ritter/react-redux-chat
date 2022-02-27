declare module "*.module.css";

type MessageContent = {
  nickname: string;
  message: string;
  date: string;
};

type MessageProps = {
  key: number;
  content: MessageContent;
};

type EmojieProps = {
  code: string;
};

type EmojiesListProps = {
  styles: string;
  clickHandler: (evt: React.MouseEvent<HTMLElement>) => void;
};
