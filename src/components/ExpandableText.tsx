import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggle = () => {
    setExpanded(!isExpanded);
  };

  if (children.length < maxChars) {
    return <div>{children}</div>;
  }
  return (
    <>
      <p>
        {isExpanded ? children : children.substring(0, maxChars) + "..."}
        <button onClick={toggle}>{isExpanded ? "Less" : "More"}</button>
      </p>
    </>
  );
};

export default ExpandableText;
