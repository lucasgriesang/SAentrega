import { sql } from './db.js';
import { randomUUID } from "crypto";

export class DatabasePostgres {
    async verificarSeUsuarioExiste(credentials) {
        return await sql`select * from login where name = ${credentials.name} and password = ${credentials.password}`;
    }

    async listUsers() {
        return await sql`select * from login`;
    }

    async createUser(user) {
        const id = randomUUID();
        await sql`insert into login (id, name, password)
                  values (${id}, ${user.name}, ${user.password})`;
    }

    async cadastroCriar(cadastro) {
        const id = randomUUID();
        await sql`insert into login (id, name, password)
                  values (${id}, ${cadastro.name}, ${cadastro.password})`;
    }

    async createlixo(lixo) {
        const id = randomUUID();
        await sql`insert into cadastrolixo (id, cep, tipo_lixo, data)
                  values (${id}, ${lixo.cep}, ${lixo.tipo_lixo}, ${lixo.data})`;
    }

    async listLixo() {
        return await sql`select * from cadastrolixo`;
    }

    async listCadastro() {
        return await sql`select * from login`;
    }

    async updateUser(id, user) {
        await sql`update login set name = ${user.name}, password = ${user.password} where id = ${id}`;
    }

    async deleteUser(id) {
        await sql`delete from login where id = ${id}`;
    }
}
