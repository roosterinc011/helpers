# Helpers

Biblioteca Para Helpers Gerais

## Tabela de Conteúdos

- [Helpers](#helpers)
  - [Tabela de Conteúdos](#tabela-de-conteúdos)
  - [Instalação](#instalação)
  - [Uso Básico](#uso-básico)
  - [Recursos](#recursos)
    - [CPF](#cpf)
      - [Formatar CPF](#formatar-cpf)
      - [Mascarar CPF](#mascarar-cpf)
    - [Data](#data)
      - [Formatar para Data Brasileira](#formatar-para-data-brasileira)
      - [Verificação de Data Brasileira](#verificação-de-data-brasileira)
      - [Verificação de Data ISO](#verificação-de-data-iso)
      - [String para Data](#string-para-data)

## Instalação

```sh
npm i @rooster-inc/helpers
```

## Uso Básico

Apenas Importar as funções

```ts
import { formatarCpf } from "@rooster-inc/helpers";

const cpfFormatado = formatarCpf("123.456.789-01"); // 12345678901
```

## Recursos

### CPF

#### Formatar CPF

Função para remover pontuações e preencher com 0 à esquerda.

```ts
import { formatarCpf } from "@rooster-inc/helpers";

const cpfFormatado = formatarCpf("123.456.789-01"); // 12345678901
```

Caso tenha mais que 11 _números_, é pego apenas os 11 primeiros.

```ts
import { formatarCpf } from "@rooster-inc/helpers";

const numeros = "123.456.789.012.345.678-90";

const cpf = formatarCpf(numeros); // 12345678901
```

#### Mascarar CPF

Função para remover pontuações. preencher com 0 à esquerda e colocar as pontuações necessárias.

```ts
import { mascaraCpf } from "@rooster-inc/helpers";

const cpfFormatado = mascaraCpf("12345678901"); // 123.4567.89-01
```

Caso tenha mais que 11 _números_, é pego apenas os 11 primeiros.

```ts
import { mascaraCpf } from "@rooster-inc/helpers";

const numeros = "12345678901234567890";

const cpf = mascaraCpf("12345678901"); // 123.4567.89-01
```

### Data

#### Formatar para Data Brasileira

```ts
import { dataBrasileira } from "@rooster-inc/helpers";

const data = new Date("2023-05-05");

const formatada = dataBrasileira(data); // 05/05/2023
```

#### Verificação de Data Brasileira

```ts
import { isDataBrasileira } from "@rooster-inc/helpers";

isDataBrasileira("2023-05-05"); // false

isDataBrasileira("05/05/2023") // true
```

#### Verificação de Data ISO

```ts
import { isDataIso } from "@rooster-inc/helpers";

isDataIso("2023-05-05"); // true

isDataIso("05/05/2023") // false
```

#### String para Data

```ts
import { stringParaData } from "@rooster-inc/helpers";

const date1 = stringParaData("2023-05-05");

const date2 = stringParaData("05/05/2023");

const date3 = stringParaData("123123"); // Irá executar um erro
```
