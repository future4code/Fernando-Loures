class IdGeneratorMock{
    generate(): string{
        return "abc123";
    }
}
export default new IdGeneratorMock()