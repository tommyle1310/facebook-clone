import React from "react";

const useTheme = () => {
    const [theme, setTheme] = React.useState(() => {
        // Check if theme is stored in local storage, otherwise use 'light' as default
        const storedTheme = localStorage.getItem("theme");
        return storedTheme || "light";
    });

    const toggleTheme = (selectedTheme) => {
        switch (selectedTheme) {
            case 'light':
            case 'dark':
            case 'night':
            case 'aqua':
            case 'synthwave':
            case 'wireframe':
            case 'forest':
            case 'lemonade':
            case 'emerald':
            case 'fantasy':
            case 'cmyk':
                setTheme(selectedTheme);
                localStorage.setItem("theme", selectedTheme); // Store theme in local storage
                return;
            default:
                setTheme('light');
                localStorage.setItem("theme", 'light'); // Store default theme in local storage
        }
    };

    React.useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    return { theme, toggleTheme };
};

export default useTheme;
