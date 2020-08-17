### EXERCICIO 1

a) Strings são mais flexíveis e variáveis que Numbers, então aumentam as possibilidades de inserção de dados; diminuindo a chance de repetição.
b) Implementação

### EXERCICIO 2

a) é criada uma nova instância do knex que é utilizada em uma função para inserrir novo usuario no banco de dados
b)

```ts
export async function up(knex: Knex): Promise<void> {
      return knex.schema.createTable('users', (table) => {
            table.uuid('id').primary();
            table.string('name').notNullable();
            table.string('email').notNullable().unique();
            table.string('password').notNullable();
      });
}
```

c) implementação
d) implementação

### EXERCICIO 4
