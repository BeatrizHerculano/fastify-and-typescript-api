import { FastifyReply, FastifyRequest } from "fastify";
import { Controller, GET } from "fastify-decorators";
import { ClientRequest, IncomingMessage, ServerResponse } from "http";
import { Cabra } from "../model/Cabra";

@Controller({ route: '/gankCabra' })
export default class GankDaCabra {
    @GET({
        url: '/berro',
        options: {
            schema: {
                querystring: {
                    name: {
                        type: 'string'
                    }
                },
                response: {
                    200: { type: 'string' },
                },
            },
        },
    })
    berraComONome(request: FastifyRequest, reply: FastifyReply) {
        let name = request.query['name']
        return new Cabra(`Béééééééééééééé ${name}`)
    }
}


