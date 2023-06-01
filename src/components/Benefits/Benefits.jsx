import React from 'react';
import styles from './Benefits.module.scss';
import { Container } from '../Container';
import { Title } from '../Title';
import { BenefitsItem } from './BenefitsItem';

const BenefitsData = [
  { className: 'iconSupport', name: 'support', text: 'Support 24/7' },
  { className: 'iconMessage', name: 'message', text: 'Communicate directly' },
  { className: 'iconBook', name: 'book', text: 'Book online' },
  { className: 'iconLike', name: 'like', text: 'Real guest review' },
];

export const Benefits = () => {
  return (
    <Container>
      <Title className={styles.title}>What do we offer</Title>
      <div className={styles.items}>
        {BenefitsData.map(({ className, name, text }, index) => (
          <BenefitsItem
            key={index}
            className={styles[`${className}`]}
            name={name}
            text={text}
          />
        ))}
      </div>
    </Container>
  );
};
