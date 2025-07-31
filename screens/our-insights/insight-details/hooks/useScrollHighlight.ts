import { useEffect, useState } from "react";
import { slugifyHeading } from "../utils/slugify";

export function useScrollHighlight(content: string) {
  const [activeSection, setActiveSection] = useState("");

useEffect(() => {
    const handleScroll = () => {
        const articleContent = document.querySelector("#article_content");
        if (!articleContent) return;
        const headings = Array.from(articleContent.querySelectorAll("h2"));
        if (headings.length === 0) return;
        let currentSection = headings[0].id;
        let minDistance = Number.POSITIVE_INFINITY;
        headings.forEach(heading => {
            const {top} = heading.getBoundingClientRect();
            const distance = Math.abs(top - 100); // فاصله 100 پیکسل از بالا
            if (distance < minDistance && top < window.innerHeight - 200) {
                minDistance = distance;
                currentSection = heading.id;
            }
        });
        setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => window.removeEventListener("scroll", handleScroll);
}, [content]);

const scrollToSection = (heading: string) => {
    const id = slugifyHeading(heading)
    const section = document.getElementById(id);

    
    if (section) {
        window.scrollTo({
            top: section.getBoundingClientRect().top + window.scrollY - 110,
            behavior: "smooth",
        });
    }
};



  return { activeSection, scrollToSection };
}
