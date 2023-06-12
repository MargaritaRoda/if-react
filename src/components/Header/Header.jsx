import React from 'react';

import { HeaderMenu } from '../HeaderMenu';
import { Container } from '../Container';
import { useStyles } from './Header.styles';

export const Header = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <HeaderMenu />
        {children}
      </Container>
    </div>
  );
};
