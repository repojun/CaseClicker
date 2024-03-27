import { useState } from 'react';

const useTheme = () => {
    const initialTheme = localStorage.getItem('color') || 'Blue';

    const [theme, updateTheme] = useState({
        initialTheme,
    });

    const setTheme = (input) => {
        window.localStorage.setItem('theme', input);
        document.documentElement.dataset.theme = input;

        return updateTheme({ theme });
    };

    return { theme, setTheme };
};

export default useTheme;