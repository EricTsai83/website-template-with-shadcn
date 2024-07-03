"use client";
import { Button } from "./ui/button";

interface ScrollButtonProps {
  text: string;
  targetId: string;
  offset?: number;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({
  text,
  targetId,
  offset = 0,
}) => {
  const handleScroll = () => {
    const element = document.getElementById(targetId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Button className="font-semibold" onClick={handleScroll}>
      {text}
    </Button>
  );
};

export default ScrollButton;
