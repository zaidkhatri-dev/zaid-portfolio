import { useEffect, useState } from "react";

const useActiveSection = (sectionIDs: string[]) => {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // pick intersecting NON-hero sections
        const visible = entries.filter(
          (entry) =>
            entry.isIntersecting && entry.target.id !== "Hero"
        );

        if (visible.length > 0) {
          // choose the most visible one (optional but recommended)
          const mostVisible = visible.sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          )[0];

          setActive(mostVisible.target.id);
        } else {
          setActive(null);
        }
      },
      {
        threshold: 0.6,
      }
    );

    sectionIDs.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIDs]);

  return active;
};

export default useActiveSection;
