import Fastify from 'fastify';
import cors from '@fastify/cors';
import { DatabasePostgres } from './database-postgres.js';

const server = Fastify();
const databasePostgres = new DatabasePostgres();

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
});

// Rota raiz
server.get('/', async (request, reply) => {
    return reply.status(200).send({ message: 'Bem-vindo à API!' });
});

// Endpoint de login
server.post('/login', async (request, reply) => {
    const login = request.body;
    try {
        if (!login.name || !login.password) {
            return reply.status(400).send({ message: 'Nome e senha são obrigatórios' });
        }
        const exist = await databasePostgres.verificarSeUsuarioExiste(login);
        if (exist.length > 0) {
            return reply.status(200).send({ message: 'Login feito', user: exist[0] });
        } else {
            return reply.status(400).send({ message: 'Login inválido' });
        }
    } catch (error) {
        console.error('Erro ao verificar login:', error);
        return reply.status(500).send({ message: 'Erro interno', error });
    }
});

// Endpoint de cadastro
server.post('/cadastro', async (request, reply) => {
    const cadastro = request.body;
    try {
        if (!cadastro.name || !cadastro.password) {
            return reply.status(400).send({ message: 'Nome e senha são obrigatórios' });
        }
        await databasePostgres.cadastroCriar(cadastro);
        return reply.status(201).send({ message: 'Cadastro feito com sucesso' });
    } catch (error) {
        console.error('Erro ao criar cadastro:', error);
        return reply.status(500).send({ message: 'Erro interno', error });
    }
});

// CREATE lixoEletronico endpoint
server.post('/lixoEletronico', async (request, reply) => {
    const lixoEletronico = request.body;
    try {
        console.log('Recebendo dados para salvar:', lixoEletronico); // Log dos dados recebidos
        await databasePostgres.createlixo(lixoEletronico);
        return reply.status(201).send({ message: 'Lixo cadastrado com sucesso' });
    } catch (error) {
        console.error('Erro ao salvar dados:', error);
        return reply.status(500).send({ message: 'Erro interno', error });
    }
});

// GET lixoEletronico endpoint
server.get('/lixoEletronico', async (request, reply) => {
    try {
        const lixo = await databasePostgres.listLixo();
        return reply.status(200).send(lixo);
    } catch (error) {
        console.error('Erro ao listar lixo:', error);
        return reply.status(500).send({ message: 'Erro interno', error });
    }
});

// GET cadastro endpoint
server.get('/cadastro', async (request, reply) => {
    try {
        const cadastro = await databasePostgres.listCadastro();
        return reply.status(200).send(cadastro);
    } catch (error) {
        console.error('Erro ao listar cadastro:', error);
        return reply.status(500).send({ message: 'Erro interno', error });
    }
});

// Endpoint para criar usuários
server.post('/users', async (request, reply) => {
    const body = request.body;
    try {
        if (!body.name || !body.password) {
            return reply.status(400).send({ message: 'Nome e senha são obrigatórios' });
        }
        await databasePostgres.createUser(body);
        return reply.status(201).send({ message: 'Usuário criado com sucesso' });
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        return reply.status(500).send({ message: 'Erro interno', error });
    }
});

// Endpoint para listar usuários
server.get('/users', async (request, reply) => {
    try {
        const users = await databasePostgres.listUsers();
        return reply.status(200).send(users);
    } catch (error) {
        console.error('Erro ao listar usuários:', error);
        return reply.status(500).send({ message: 'Erro interno', error });
    }
});

// Endpoint para atualizar usuários
server.put('/users/:id', async (request, reply) => {
    const userID = request.params.id;
    const body = request.body;
    try {
        if (!body.name || !body.password) {
            return reply.status(400).send({ message: 'Nome e senha são obrigatórios' });
        }
        await databasePostgres.updateUser(userID, body);
        return reply.status(204).send();
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        return reply.status(500).send({ message: 'Erro interno', error });
    }
});

// Endpoint para deletar usuários
server.delete('/users/:id', async (request, reply) => {
    const userID = request.params.id;
    try {
        await databasePostgres.deleteUser(userID);
        return reply.status(204).send();
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        return reply.status(500).send({ message: 'Erro interno', error });
    }
});

const start = async () => {
    try {
        await server.listen({ port: 3333, host: '0.0.0.0' });
        console.log('Servidor está funcionando em http://localhost:3333');
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

start();
