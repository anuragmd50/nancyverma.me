import React from "react";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

function Text(props: TextProps) {
  const { children, className } = props;

  return <div className={className}>{children}</div>;
}

export default Text;
