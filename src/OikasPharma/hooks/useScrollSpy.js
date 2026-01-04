import { useState, useEffect } from "react";

/**
 * Custom hook to track which section is currently active in the viewport.
 * @param {Array} sectionIds - Array of section IDs to observe.
 * @param {string} defaultActiveId - The ID to set as active initially.
 * @param {object} options - IntersectionObserver options (rootMargin, threshold).
 * @returns {string} - The ID of the currently active section.
 */
export default function useScrollSpy(sectionIds, defaultActiveId, options = {}) {
    const [activeId, setActiveId] = useState(defaultActiveId);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Find the entry that is intersecting and has the highest intersection ratio
                // or just simply the first one that is intersecting if we want "sticky top" behavior
                // with the specific rootMargin logic.
                // However, simple "last one wins" can be flaky.
                // Let's rely on finding any intersecting one, but since we have a narrow rootMargin/threshold
                // the "trigger" is quite specific.

                // Better logic: Filter intersecting, then maybe pick one?
                // Actually, standard behavior: iterate all changes.
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: "-100px 0px -50% 0px", // Default offset
                ...options,
            }
        );

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [sectionIds, options]);

    return activeId;
}
