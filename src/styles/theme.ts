import { createTheme, rem } from '@mantine/core';

const theme = createTheme({  
    shadows: {
        md: '1px 1px 3px rgba(0, 0, 0, .25)',
        xl: '5px 5px 3px rgba(0, 0, 0, .25)',
    },
    
    headings: {
        fontFamily: 'Roboto, sans-serif',
        sizes: {
            h1: { fontSize: rem(36) },
        },
    },
    primaryColor: 'bright-pink',
    colors: {
        'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
    },
    primaryShade: 6,
    autoContrast: true,
    defaultRadius: 'md',
    cursorType: 'pointer',
});

export { theme }