import fastify from 'fastify';
import { bootstrap } from 'fastify-decorators';
import { resolve } from "path";

export default class Server {
  static configureServer(server = fastify({ logger: true })) {
    server.register(bootstrap, {
      directory: resolve(__dirname, `controller`),
      // Specify mask to match only our handler
      mask: /\.controller\./
    });

    server.listen(3000, (err, address) => {
      if (err) {
        server.log.error(err)
        process.exit(1)
      }
      server.log.info(`server listening on ${address}`)
    })
  }
}

Server.configureServer()

