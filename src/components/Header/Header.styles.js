import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  (theme) => {
    return {
      root: {
        minHeight: '100vh',
        backgroundImage: `url(${theme.backgroundImageURL})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
        backgroundColor: theme.accentDark,
        color: theme.accentDarkText,
        fill: theme.accentDarkText,
      },
    };
  },
  {
    name: 'Header',
  },
);
