# Documentação da API

## Descritivo da API

Esta API foi desenvolvida para permitir que o backend possa ser desacoplado do front-end, permitindo assim uma maior flexibilidade ao trabalhar com o mesmo. A API segue os principios
RestFull para acessos via metodos HTTP, e se comunica utilizando a sintaxe JSON

#### Na tela de cadastro de estacionamentos:

```http
  POST /park/new
```

| Tipo       | Descrição                                                                                                                             |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `JSON {} ` | Atraves da submissao do forms, envia um objeto JSON contendo:' name ,age ,phone ,gender , car: { model, year, manufacturer, plate } ' |

#### Na tela de listagem de estacionamentos, listar todos os estacionamentos ativos:

```http
  GET /parksActive
```

| Tipo           | Descrição                                                                     |
| :------------- | :---------------------------------------------------------------------------- |
| `registers[] ` | Retorna os registros salvos na base de dados, seu status, e horario de inicio |

#### Modal de detalhes de um estacionamento ativo:

```http
  GET /parksActive/${id}
```

| Parâmetro | Tipo       | Descrição                                                                                                        |
| :-------- | :--------- | :--------------------------------------------------------------------------------------------------------------- |
| `id`      | `ObjectId` | Envia na Url o id necessario e retorna um objeto de registro, valor da taxa a ser paga e tempo total permanecido |

#### No modal de detalhes de um estacionamento ativo, ao apertar o botão para finalizar e dar baixa no registro:

```http
  PUT /park/finish/${id}
```

| Parâmetro | Tipo       | Descrição                                                                                                                                  |
| :-------- | :--------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| `id`      | `ObjectId` | Apenas solicita que o objeto localizado com o id enviado, mude seu status para finalizado e grave em seu registro o horario de finalização |

#### Na tela de historico, listar todos os estacionamentos finalizados:

```http
  GET /parksFinished
```

| Tipo           | Descrição                                                                     |
| :------------- | :---------------------------------------------------------------------------- |
| `registers[] ` | Retorna os registros salvos na base de dados, seu status, e horario de inicio |

#### Modal de detalhes de um estacionamento finalizado:

```http
  GET /parksFinished/${id}
```

| Parâmetro | Tipo       | Descrição                                                                                                        |
| :-------- | :--------- | :--------------------------------------------------------------------------------------------------------------- |
| `id`      | `ObjectId` | Envia na Url o id necessario e retorna um objeto de registro, valor da taxa a ser paga e tempo total permanecido |

## Stack utilizada

**Front-end:** HTML5, CSS, Bootstrap, JS

**Back-end:** NodeJs, Typescript, ExpressJs, MongoDb
