export class FizzBuzzController{
    constructor(){} 
    private isFizz(number:number) {
        return number % 3 ==0
    }
    private isBuzz(number:number){
        return number % 5 ==0
    }

    fizzBuzz(numbers:number[]) {
        return numbers.map((number)=>{
                let message = ''
                if(this.isFizz(number)){
                    message += "Fizz"
                }
                if(this.isBuzz(number)){
                    message += "Buzz"
                }

                return message || `${number}`
            }
        )
    }
}