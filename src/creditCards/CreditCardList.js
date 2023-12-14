import React, { Fragment } from 'react';

import useCreditCardContext from '../lib/useCreditCardContext';
import Card from './Card';

const CreditCardList = () => {
  const { clients } = useCreditCardContext();

  if (!Boolean(clients)) {
    return (<p> Loading ...</p>)
  }

  console.log(clients);

  return(
    <Fragment>
      {
        clients.map((client, index) => {
          return(
            <Card key={index} clientInformation={client} />
          );
        })
      }
    </Fragment>
  );
};

export default CreditCardList;
