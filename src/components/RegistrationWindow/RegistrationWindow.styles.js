import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  (theme) => {
    return {
      root: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: 400,
        margin: '268px auto 0',
        background: '#ffffff',
      },
      title: {
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'normal',
        fontSize: 24,
        color: theme.accentDark,
        marginTop: 36,
      },
      textField: {
        height: 40,
        width: '100%',
        border: '1px solid #cecece',
        borderRadius: 8,
        paddingLeft: 8,
      },
      label: {
        fontSize: 16,
        fontWeight: 'lighter',
        color: '#333333',
      },
      form: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        margin: 40,
      },
      btn: {
        height: 48,
        width: 320,
      },
    };
  },
  {
    name: 'RegistrationWindow',
  },
);
