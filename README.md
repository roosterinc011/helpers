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
