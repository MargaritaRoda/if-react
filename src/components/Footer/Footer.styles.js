import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  (theme) => {
    return {
      root: {
        backgroundColor: theme.accentDark,
        color: theme.accentDarkText,
        fill: theme.accentDarkText,
      },
      footerContainer: {
        maxWidth: 1232,
        '@media (max-width: 360px)': {
          padding: '24px 0 40px',
        },
      },
      footerLogoIcon: {
        '@media (max-width: 360px)': {
          display: 'block',
          width: '100%',
          maxWidth: 205,
          aspectRatio: '205/40',
        },
      },
      footerLogoMobile: {
        display: 'none',
        '@media (max-width: 360px)': {
          display: 'block',
          maxWidth: 98,
          margin: '0 auto 40px',
        },
      },
      footerItems: {
        display: 'flex',
        '@media (max-width: 360px)': {
          margin: '0 auto 32px',
        },
      },
      footerItem: {
        flex: '1',
        fontSize: 20,
        '@media (max-width: 600px)': {
          display: 'flex',
          flex: '1',
          justifyContent: 'space-around',
        },
        '@media (max-width: 360px)': {
          display: 'flex',
          flex: '1',
          justifyContent: 'space-around',
        },
      },
      footerLinks: {
        listStyle: 'none',
        padding: 0,
      },
      footerCopyright: {
        marginTop: 64,
        fontSize: 14,
        '@media (max-width: 600px)': {
          textAlign: 'center',
        },
        '@media (max-width: 360px)': {
          fontSize: 12,
          margin: '0 auto',
          textAlign: 'center',
        },
      },
      footerLinksItem: {
        paddingBottom: 24,
        '@media (max-width: 360px)': {
          padding: 0,
        },
      },
      footerLinksItemDesktop: {
        '@media (max-width: 600px)': {
          display: 'none',
        },
        '@media (max-width: 360px)': {
          display: 'none',
        },
      },
      footerLinksHeader: {
        fontSize: 20,
        '@media (max-width: 360px)': {
          fontSize: 15,
          textDecoration: 'underline',
        },
      },
    };
  },
  {
    name: 'Footer',
  },
);
