import Server from './server';

const localhostPort = '8535';

const port = process.env.PORT || localhostPort;

Server.app.listen(port, () => {
      console.log(`Executando em: ${port}`);
});
