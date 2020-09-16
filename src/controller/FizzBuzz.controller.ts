import { FastifyReply, FastifyRequest } from "fastify"
import { Controller, POST } from "fastify-decorators"

@Controller({ route: '/fizzbuzz' })
export default class FizzBuzzController {
    // // constructor() { }
    // // private isFizz(number: number) {
    // //     return number % 3 == 0
    // // }
    // // private isBuzz(number: number) {
    // //     return number % 5 == 0
    // }
    @POST({ url: '/' })
    fizzBuzz(request: FastifyRequest, reply: FastifyReply) {
        // let numbers = request.body['numbers'];
        // return numbers.map((number) => {
        //     let message = ''
        //     if (this.isFizz(number)) {
        //         message += "Fizz"
        //     }
        //     if (this.isBuzz(number)) {
        //         message += "Buzz"
        //     }

        //     return message || `${number}`
        // }
        // )
        return 'oi'
    }
}