import React, { Component } from 'react';

import { Container } from '../../Container';
import { Title } from '../../Title';
import { HotelsList } from '../../HotelsList';
import { getPopularHotelsData } from '../../../services/hotelsData';

import styles from './HomesGuests.module.scss';

export class HomesGuests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelsData: [],
    };
  }
  componentDidMount() {
    getPopularHotelsData().then((hotels) => {
      this.setState({
        hotelsData: hotels,
      });
    });
  }

  render() {
    const { hotelsData } = this.state;
    return (
      <section className={styles.section}>
        <Container className={styles.container}>
          <Title className={styles.title}>Homes guests loves</Title>
          <HotelsList items={hotelsData} />
        </Container>
      </section>
    );
  }
}
