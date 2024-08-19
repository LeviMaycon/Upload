# 📂 Backend - Simulação de Vida de um Upload

Este projeto é uma aplicação backend desenvolvida em NestJS, Prisma e PostgreSQL que simula a vida de um upload dentro de um sistema. A aplicação permite a criação, leitura, atualização e exclusão de uploads, além de gerenciar o ambiente em que esses uploads residem.

## 🚀 Tecnologias Utilizadas

- **NestJS**: Framework Node.js para construção de aplicações escaláveis e eficientes.
- **Prisma**: ORM (Object-Relational Mapping) para consultas em banco de dados.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **TypeScript**: Linguagem utilizada para melhorar a qualidade do código e garantir tipagem.

## 🎯 Objetivo do Projeto

O objetivo é criar uma aplicação backend que simula um sistema digital onde uploads (representações digitais de pessoas) podem interagir em diferentes ambientes, adquirir casas, acumular estatísticas e até mesmo acessar zonas cinzentas (gray zones). Este projeto foi inspirado na série "Upload" da Prime Video.

## 🛠️ Funcionalidades

### Uploads

- **Criar Upload**: Registra um novo upload no sistema. O upload deve ter `firstName`, `lastName`, `password` e deve estar associado a um ambiente.
- **Listar Uploads**: Lista todos os uploads registrados no sistema.
- **Buscar Upload por ID**: Recupera os detalhes de um upload específico com base no ID.
- **Atualizar Upload**: Permite a atualização de informações de um upload.
- **Deletar Upload**: Remove um upload do sistema.

### Ambientes

- **Gerenciar Ambientes**: Cria e lista ambientes onde os uploads residem. Cada ambiente pode ter características próprias (features).

### Estatísticas e Zonas Cinzentas

- **Estatísticas**: Cada upload pode acumular estatísticas, como conquistas ou dados de interação.
- **Zonas Cinzentas**: Uploads podem acessar áreas restritas conhecidas como "gray zones".

## 🧑‍💻 Estrutura do Projeto

### Prisma Schema

O esquema do Prisma define o banco de dados relacional com as seguintes tabelas:

- **Upload**: Representa o upload, com suas informações pessoais e relações com ambientes, casas, estatísticas, e mundos.
- **Environment**: Define os ambientes onde os uploads residem.
- **House**: Casas que pertencem aos uploads.
- **Stats**: Estatísticas acumuladas pelos uploads.
- **World**: Mundo virtual onde os uploads podem interagir.
- **GrayZone**: Áreas restritas ou especiais acessadas pelos uploads.

### Serviços

#### UploadService

- **`create(data: CreateUploadDto)`**: Cria um novo upload, verificando se um upload com o mesmo `firstName` já existe. Se já existir, lança uma exceção de conflito. Caso contrário, o upload é criado e armazenado no banco de dados.
  
- **`findAll()`**: Retorna todos os uploads registrados no sistema.

- **`findOne(id: number)`**: Busca e retorna um upload específico com base no ID.

- **`delete(id: number)`**: Remove um upload do sistema. Caso o ID não seja encontrado, lança uma exceção `NotFoundException`.

### Controladores

#### UploadController

- **`create(createUploadDto: CreateUploadDto)`**: Rota para criar um novo upload.
- **`findAll()`**: Rota para listar todos os uploads.
- **`findOne(id: number)`**: Rota para buscar um upload específico por ID.
- **`delete(id: number)`**: Rota para deletar um upload pelo ID.

### DTOs (Data Transfer Objects)

#### CreateUploadDto

Define os campos obrigatórios para a criação de um upload:

```typescript
export class CreateUploadDto {
  firstName: string;
  lastName: string;
  password: string;
  environmentId: number;
}
