import React from 'react';
import classNames from 'classnames';
import { Logo } from '../Logo';
import { Icon } from '../../icons/Icon';
import { Container } from '../Container';
import { FooterLink } from './FooterLink';

import {
  footerLinksTextAbout,
  footerLinksTextProperty,
  footerLinksTextSupport,
} from '../../services/footerLinksText';
import { useStyles } from './Footer.styles';

export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container className={classes.footerContainer}>
        <Logo
          className={classNames(
            classes.footerLogoMobile,
            classes.footerLogoIcon,
          )}
        >
          <Icon
            className={classNames(
              classes.footerLogoMobile,
              classes.footerLogoIcon,
            )}
            name="logo"
          />
        </Logo>
        <nav className={classes.footerItems}>
          <div className={classes.footerItem}>
            <ul className={classes.footerLinks}>
              <li className={classes.footerLinksItem}>
                <h3 className={classes.footerLinksHeader}>About</h3>
              </li>
              {footerLinksTextAbout.map((item, index) => {
                return <FooterLink key={index} text={item} />;
              })}
            </ul>
          </div>
          <div className={classes.footerItem}>
            <ul className={classes.footerLinks}>
              <li className={classes.footerLinksItem}>
                <h3 className={classes.footerLinksHeader}>Property types</h3>
              </li>
              {footerLinksTextProperty.map((item, index) => {
                return <FooterLink key={index} text={item} />;
              })}
            </ul>
          </div>
          <div className={classes.footerItem}>
            <ul className={classes.footerLinks}>
              <li className={classes.footerLinksItem}>
                <h3 className={classes.footerLinksHeader}>Support</h3>
              </li>
              {footerLinksTextSupport.map((item, index) => {
                return <FooterLink key={index} text={item} />;
              })}
            </ul>
          </div>
        </nav>
        <div className={classes.footerCopyright}>
          © 2022 Triphouse, Inc. All rights reserved
        </div>
      </Container>
    </footer>
  );
};
