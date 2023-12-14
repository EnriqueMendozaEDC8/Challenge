const obtainClients = (req, res) => {
  res.send({ clients: [
    {
      "id": 1,
      "email": "pablo@atratopago.com",
      "phone": "+523333333333",
      "name": "Pablo",
      "middleName": null,
      "fLastName": "Perez",
      "sLastName": "Ramirez",
      "birthday": "1990-04-23",
      "status": "PENDIENTE",
      "assignedAnalyst": "David",
      "cardInfo": {
          "number": "5188267468566250",
          "type": "Mastercard",
          "cvv": "944",
          "pin": "2319",
          "expiration": "2025-09-26T22:19:25.7460359+00:00"
      }
  }
  ]});
};


module.exports = obtainClients;
