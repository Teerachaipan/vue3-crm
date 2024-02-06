export class ErrPermissionDenied extends Error {
  constructor(message: any) {
    super(message)
    this.name = 'permission denied'
  }
}
