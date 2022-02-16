type MessageContent = {
  nickname: string;
  message: string;
  date: string;
};

type EmojiesListProps = {
  styles: string;
  clickHandler: () => void;
};

type EmojieProps = {
  code: string;
};
