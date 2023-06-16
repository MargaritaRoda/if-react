import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => {
  return {
    item: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      fontSize: 24,
      textAlign: 'start',
      flexBasis: 296,
      '@media (max-width: 980px)': {
        fontSize: 18,
      },
      '@media (max-width: 760px)': {
        fontSize: 12,
      },
      '@media (max-width: 360px)': {
        gap: 4,
      },
    },
    img: {
      backgroundPosition: 'center',
      objectFit: 'cover',
      aspectRatio: '1/1',
      maxWidth: 296,
      minWidth: 156,
      width: '100%',
      '@media (min-width: 1286px)': {
        minWidth: 296,
        maxWidth: 296,
      },
    },
    title: {
      color: theme.primary,
    },
    address: {
      color: '#bfbfbf',
    },
  };
});
