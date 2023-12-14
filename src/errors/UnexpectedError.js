export default class UnexpectedError extends Error {
  constructor(error) {
    super('An error occurred on server', { cause: error});
  }
}
