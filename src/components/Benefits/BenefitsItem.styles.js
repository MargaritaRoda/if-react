import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => {
  return {
    item: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
      textAlign: 'center',
      gap: 48,
      fontSize: 24,
      flexBasis: '50%',
      marginBottom: 24,
      fill: theme.primary,
      '@media (max-width: 1439px)': {
        gap: 24,
      },
      '@media (max-width: 600px)': {
        width: '100%',
        flexBasis: '100%',
      },
      '@media (max-width: 360px)': {
        fontSize: 15,
        gap: 16,
        margin: '0 auto 32px',
        flexBasis: '100%',
      },
    },
  };
});
