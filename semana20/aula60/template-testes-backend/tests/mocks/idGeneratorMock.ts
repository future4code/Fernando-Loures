export class IdGeneratorMock {
  public generate(): string {
    return "abc123"
  }
}

export default new IdGeneratorMock()