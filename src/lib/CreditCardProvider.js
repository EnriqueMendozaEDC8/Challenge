import React, { useEffect, useMemo, useState } from "react";
import CreditCardContext from "./CreditCardContext";
import UnexpectedError from "../errors/UnexpectedError";
import NetworkError from "../errors/NetworkError";

const CreditCardProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getClients = async () => {
    try {
      const response = await fetch('http://localhost:5000/v1/creaditCard/clients', {
        method: 'GET',
      });

      const { clients } = await response.json();

      return clients;
    } catch (error) {
      if (error.code === 500) {
        throw new UnexpectedError(error);
      }

      throw new NetworkError(error)
    }
  };

  const getClient = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/creaditCard/client/${id}`);
      console.log(response);
    } catch (error) {
      /*
        if (error.code === 500) {
          throw new UnexpectedError(error);
        } else if (error.code === 404) {
          throw new ClientNpotFound(error);
        } else if (error.code === 400) {
          throw new BadRequest(error);
        } else {
          throw new NetworkError(error)
        }
      */
    }
  };

  useEffect(() => {
    const obtainClients = async() => {
      setLoading(true);

      try {
        const clientsObtained = await getClients();

        setClients(clientsObtained);
      } catch (requestError) {
        setError(requestError);
      } finally {
        setLoading(false);
      }
    };

    obtainClients();
  }, []);

  const value = useMemo(() => {
    return {
      clients,
      getClient,
      loading,
      error,
    };
  }, [clients, error, loading]);

  return(
    <CreditCardContext.Provider value={value}>
      { children }
    </CreditCardContext.Provider>
  );
}

export default CreditCardProvider;
