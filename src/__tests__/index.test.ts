import { hello } from '..'

describe('hello', () => {
    it('exports a function', () => {
        expect(hello).toBeInstanceOf(Function)
    })
})