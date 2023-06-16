import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      marginTop: 500,
      position: 'absolute',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: 40,
      backgroundColor: '#eaf0f9',
      borderRadius: 8,
      boxShadow: '4px 4px 50px 5px rgb(234, 240, 249)',
      padding: 16,
    },
    img: {
      backgroundPosition: 'center',
      objectFit: 'cover',
      aspectRatio: '1/1',
      maxWidth: 400,
      minWidth: 400,
      width: '100%',
    },
    title: {
      color: theme.primary,
    },
    address: {
      color: '#bfbfbf',
    },
  };
});
