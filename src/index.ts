import fastify from "fastify";
import { GankDaCabra } from "./controller/GankDaCabra";
import { FizzBuzzController } from "./controller/FizzBuzzController";
// Require the framework and instantiate it
const server = fastify({ logger:true })
const opts = {
  schema: {
    querystring: {
        name: { type: 'string' },
    }
  }
}
  // Declare a route
  server.get('/', opts ,function (request, reply) {
    var gankDaCabra = new GankDaCabra()
    reply.send(gankDaCabra.berraComONome(request.query['name']))
  })

  const opt2 = {
    schema: {
      body: {
          numbers: { type: 'array' },
      }
    }
  }
  server.post('/', opt2 ,function (request, reply) {
    var fizzBuzz = new FizzBuzzController()
    reply.send(fizzBuzz.fizzBuzz(request.body['numbers']))
  })
  // Run the server!
  server.listen(3000, function (err, address) {
    if (err) {
      server.log.error(err)
      process.exit(1)
    }
    server.log.info(`server listening on ${address}`)
  })