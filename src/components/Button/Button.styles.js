import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  (theme) => {
    return {
      root: {
        height: 64,
        width: '100%',
        borderRadius: 8,
        color: theme.primaryText,
        backgroundColor: theme.primary,
        fontSize: 24,
        border: `1px solid ${theme.primary}`,
        transition: 'background-color 300ms ease-in',
        '&:hover': {
          backgroundColor: theme.shade(theme.primary, -0.2),
        },
        '&:active': {
          backgroundColor: theme.shade(theme.primary, 0.3),
        },
      },
    };
  },
  {
    name: 'Button',
  },
);
