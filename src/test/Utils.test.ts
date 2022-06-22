import { text } from "stream/consumers";
import { Utils } from "../app/Utils";

describe.skip('Inital Utils Test Suite', ()=> {
    test.skip('expected output lowercase to uppercse', ()=> {
        const strngChange = Utils.toUpperCase('abc');
        expect(strngChange).toBe('ABC');
    })

    test('URL Parser Test Case', ()=> {
        const urlString = Utils.parseUrl('http://localhost:9090/login');
        expect(urlString.href).toBe('http://localhost:9090/login')
        expect(urlString.port).toBe('9090')
        expect(urlString.protocol).toBe('http:')
    })
})

describe('Console Test', ()=> {
    test('Test String', ()=> {
        console.log('Hello from console')
    })
})