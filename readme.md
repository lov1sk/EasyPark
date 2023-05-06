
# EasyPark

Trata-se de um sistema para registro de estacionamentos, o qual permite realizar cadastro de um novo registro de estacionamento, onde é salvo dados como entrada de cliente e horario, e a alteração destes registros para o momento de finalizar o estacionamento de um determinado cliente, calculando assim o tempo gasto e o preço a se pagar, movendo tal registro para um historico. 

Esse Projeto foi desenvolvido sobre o intuito de melhoras minhas habilidades para começar a criar projetos proprios ou para algum caso de uso especifico, treinar conceitos crud no banco noSQl, treinar o uso de express e etc.




## Documentação da API

#### Na tela de cadastro de estacionamentos:

```http
  POST /park/new
```

| Tipo       | Descrição                           |
| :--------- | :---------------------------------- |
|  `JSON {} ` | Atraves da submissao do forms, envia um objeto JSON contendo:'  name ,age ,phone ,gender ,  car: { model, year, manufacturer, plate } ' |

#### Na tela de listagem de estacionamentos, listar todos os estacionamentos ativos:

```http
  GET /parksActive
```

| Tipo       | Descrição                           |
| :--------- | :---------------------------------- |
|  `registers[] ` | Retorna os registros salvos na base de dados, seu status, e horario de inicio |

#### Modal de detalhes de um estacionamento ativo:

```http
  GET /parksActive/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------|
| `id`      | `ObjectId` | Envia na Url o id necessario e retorna um objeto de registro, valor da taxa a ser paga e tempo total permanecido |

#### No modal de detalhes de um estacionamento ativo, ao apertar o botão para finalizar e dar baixa no registro:

```http
  PUT /park/finish/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------|
| `id`      | `ObjectId` | Apenas solicita que o objeto localizado com o id enviado, mude seu status para finalizado e grave em seu registro o horario de finalização |


#### Na tela de historico, listar todos os estacionamentos finalizados:

```http
  GET /parksFinished
```

| Tipo       | Descrição                           |
| :--------- | :---------------------------------- |
|  `registers[] ` | Retorna os registros salvos na base de dados, seu status, e horario de inicio |

#### Modal de detalhes de um estacionamento finalizado:

```http
  GET /parksFinished/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------|
| `id`      | `ObjectId` | Envia na Url o id necessario e retorna um objeto de registro, valor da taxa a ser paga e tempo total permanecido |





## Stack utilizada

**Front-end:** HTML5, CSS, Bootstrap, JS

**Back-end:** NodeJs, Typescript, ExpressJs, MongoDb

