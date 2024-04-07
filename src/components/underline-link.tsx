import { cn } from "@/utils";
import Link from "next/link";

const UnderLineLink = ({
  children,
  href,
  className,
  containerClassName,
  theme = "light",
  as = "link",
}: {
  children: string;
  href: string;
  className?: string;
  containerClassName?: string;
  as?: "link" | "externalLink";
  theme?: "light" | "dark" | "primary";
}) => {
  const customClassName = cn(
    `animated-link border-b-[1.5px] w-auto text-sm md:text-lg font-normal`,
    theme === "light" ? "border-transparent after:bg-[#000]" : "",
    theme === "dark" ? "border-[#56616A] after:bg-[#fff]" : "",
    theme === "primary"
      ? "text-blue-700 border-transparent after:bg-blue-700"
      : "",
    className
  );

  if (as === "link") {
    return (
      <div className={cn(containerClassName, "group")}>
        <Link href={href} className={customClassName} prefetch={false}>
          {children}
        </Link>
      </div>
    );
  }

  return (
    <div className={cn("", containerClassName)}>
      <a
        href={href}
        className={customClassName}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    </div>
  );
};

export default UnderLineLink;
