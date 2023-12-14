import './Card.css';
import React from 'react';

const Card = ({ clientInformation }) => {
  return(
    <div className='client-card elements-to-row'>
      <div>
        A
      </div>
      <div>
        <div className='elements-to-row'>
          <div>
            <div>{clientInformation.name} {clientInformation.fLastName} {clientInformation.sLastName}</div>
            <div> ID: {clientInformation.id}</div>
          </div>
          <div>
            <button>
              status
            </button>
          </div>
        </div>
        <div>
          <div className='elements-to-row'>
            <div>
              <div>
                <p>Mail</p>
                <p>{clientInformation.email}</p>
              </div>
              <div>
                <p>FECHA DE NACIMIENTO</p>
                <p>{clientInformation.birthday}</p>
              </div>
              <div>
                <p>TELÉFONO</p>
                <p>{clientInformation.phone}</p>
              </div>
              <div>
                <p>ANALISTA ASIGNADO</p>
                <p>{clientInformation.assignedAnalyst}</p>
              </div>
            </div>
            <div className='vertical-line'/>
            <div>
              <div>
                <p>FULL NAME</p>
                <p>{clientInformation.name} {clientInformation.fLastName} {clientInformation.sLastName}</p>
              </div>
              <div>
                <p>CARD NUMBER</p>
                <p>{clientInformation.cardInfo.number}</p>
              </div>
              <div className='elements-to-row'>
                <div>
                  <p>CVV</p>
                  <p>{clientInformation.cardInfo.cvv}</p>
                </div>
                <div>
                  <p>PIN</p>
                  <p>{clientInformation.cardInfo.pin}</p>
                </div>
                <div>
                  <p>EXP</p>
                  <p>{clientInformation.cardInfo.expiration}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button>
            EDITAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
