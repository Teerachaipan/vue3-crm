export class ErrUnauthorized extends Error {
  constructor(message: any) {
    super(message)
    this.name = 'unauthorized'
  }
}
