<h3 align="center">
    <img alt="Logo" title="#logo" width="320px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png">
    <br />
    <br />
    <b>Variáveis de ambiente </b>
    <br />
</h3>
<p align="center">
  <a href="https://www.linkedin.com/in/rayza-oliveira-costa-482658129/">
    <img alt="Made by Rayza" src="https://img.shields.io/badge/made%20by-Rayza%20Oliveira-black">
  </a>
  <img alt="License" src="https://img.shields.io/badge/licence-MIT-black">
</p>

<br />

## :bookmark: Sobre

 O <strong>Next.js</strong> vem com suporte integrado para <strong>variáveis de ambiente</strong>, o que permite que você crie o seguinte ambientes:

  - Ambiente de desenvolvimento
  - Ambiente de produção
  - Ambiente de padrão

## 📌 Tópicos Estudados

 A página de índice mostrará como acessar variáveis de ambiente no servidor e como expor variáveis de ambiente ao navegador.
 
`pages/index.js`
```sql

export async function getServerSideProps() {
  return {
    props: {
      mongodbUri: process.env.NEXT_PUBLIC_MONGODB_URI,
      secretKey: process.env.SECRET_KEY,
    },
  };
}

export default Home;
```

- Ambiente de desenvolvimento

`.env.development` 

```sql
NEXT_PUBLIC_MONGODB_URI= connectionString_dev

# OBSERVAÇÕES:
# NEXT_PUBLIC_ , permitirá a exposição da variável ao navegador  
```

- Ambiente de produção

`.env.production` 

```sql
NEXT_PUBLIC_MONGODB_URI=connectionString_prod
MONGO_PROD=test
```

- Ambiente de padrão

Caso não seja necessário adicionar alguns padrões para ambiente como `devepopment` e `production`

Arquivo `.env`

```sql
NEXT_PUBLIC_MONGODB_URI=connectionString_local
SECRET_KEY=mysecretkey

# OBSERVAÇÕES:
# Um valor default para todos os ambientes
# Deve ser adicionado ao .gitigore, para que ele seja ignorado
# Os segredos devem ser adcionados aqui
```
</p>

## :computer: Execute no seu PC 

Este é um projeto [Next.js](https://nextjs.org/) inicializado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) com o seu navegador para ver o resultado.

Você pode começar a editar a página modificando `pages/index.js.` A página é atualizada automaticamente conforme você edita o arquivo.

## :rocket: Para mais informações


- **[Next.js Documentation](https://nextjs.org/docs)**
- **[Learn Next.js](https://nextjs.org/learn)**
- **[YouTube](https://www.youtube.com/watch?v=KCujq1URx2E)**


<h4 align="center">
    Feito com 🖤 by <a href="https://www.linkedin.com/in/rayza-oliveira-costa-482658129/" target="_blank">Rayza Oliveira</a>
</h4>
<!-- 
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->



