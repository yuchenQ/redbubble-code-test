/** @format */

import React, { useReducer } from 'react';
import { useQuery } from '@apollo/client';
import '../../styles/index.css';
import { Page } from '../Page/Page';
import { WORKS } from '../../graphql/works';
import { ALL, filterWorks } from './filterWorks';
import { Header } from '../Header';
import { distinctBySet } from '../../helpers/distinctBySet';
import { Cameras } from '../Cameras/Cameras';

const initialState = {
  model: ALL,
  make: ALL,
};

/**
 * @param {object} state
 * @param {object} action
 * @return {void}
 */
function reducer(state, { type, payload }) {
  switch (type) {
    case 'model':
      return { ...state, ...payload };
    case 'make':
      return { ...state, ...payload };
    default:
      throw new Error('Error occurs on reducer(): Invalid action type');
  }
}

export function App() {
  const { loading, error, data } = useQuery(WORKS);
  const [state, dispatch] = useReducer(reducer, initialState);

  if (loading) return <p data-testid="loading">Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { works } = data;
  const models = [];
  const makes = [];

  works.forEach(work => {
    const { exif } = work;

    if (exif) {
      const { model, make } = exif;

      if (model) {
        models.push(model);
      }

      if (make) {
        makes.push(make);
      }
    }
  });

  const uniqueModels = [ALL, ...distinctBySet(models)];
  const uniqueMakes = [ALL, ...distinctBySet(makes)];

  const filteredWorks = filterWorks(state, works);

  return (
    <Page
      header={
        <Header
          filter={state}
          count={filteredWorks.length}
          models={uniqueModels}
          makes={uniqueMakes}
          onFilter={dispatch}
        />
      }>
      <Cameras works={filteredWorks} />
    </Page>
  );
}
