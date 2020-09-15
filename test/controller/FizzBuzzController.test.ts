import {FizzBuzzController} from '../../src/controller/FizzBuzzController';
import {GankDaCabra} from '../../src/controller/GankDaCabra';

describe('FizzBuzz test suite', ()=>{

    it('retorna numeros convertidos em string', ()=>{
        var controller = new FizzBuzzController()
        var numbers = [1]
        var expectedFizzBuzz = ["1"]
        var actualFizzBuzz = controller.fizzBuzz(numbers)

        expect(actualFizzBuzz).toStrictEqual(expectedFizzBuzz)
    })

    it('deve retornar Fizz se for multiplo de 3', ()=>{
        var controller = new FizzBuzzController()
        var numbers = [6]
        var expectedFizzBuzz = ["Fizz"]
        var actualFizzBuzz = controller.fizzBuzz(numbers)

        expect(actualFizzBuzz).toStrictEqual(expectedFizzBuzz)
    })

    it('retorna Buzz se for multiplo de 5', ()=>{
        var controller = new FizzBuzzController()
        var numbers = [5]
        var expectedFizzBuzz = ["Buzz"]
        var actualFizzBuzz = controller.fizzBuzz(numbers)

        expect(actualFizzBuzz).toStrictEqual(expectedFizzBuzz)
    })

    it('retorna FizzBuzz se for multiplo de 5 e de 3', ()=>{
        var controller = new FizzBuzzController()
        var numbers = [15]
        var expectedFizzBuzz = ["FizzBuzz"]
        var actualFizzBuzz = controller.fizzBuzz(numbers)

        expect(actualFizzBuzz).toStrictEqual(expectedFizzBuzz)
    })
})