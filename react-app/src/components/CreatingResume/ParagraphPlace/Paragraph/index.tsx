import { FC } from "react";

type Props = {
  value: string | undefined;
};

const Paragraph: FC<Props> = ({ value }) => {
  return <p>{value}</p>;
};

export default Paragraph;
