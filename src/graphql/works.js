/** @format */

import { gql } from '@apollo/client';

const fragments = {
  workUrl: gql`
    fragment workUrlFrag on WorkUrl {
      type
      link
    }
  `,
  exif: gql`
    fragment exifFrag on Exif {
      model
      software
      isoSpeedRatings
      dateTime
      make
    }
  `,
};

export const WORKS = gql`
  {
    works {
      id
      urls {
        ...workUrlFrag
      }
      exif {
        ...exifFrag
      }
    }
  }
  ${fragments.workUrl}
  ${fragments.exif}
`;
