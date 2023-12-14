export default class NetworkError extends Error {
  constructor(message, error) {
    if (error) {
      super(message, { cause: error});
    }

    super(message);
  }
}
