#### Objetos e construtores de objetos

Existem várias maneiras de definir objetos, mas na maioria dos casos, é melhor usar a sintaxe literal do objeto da seguinte maneira:

```hash
const myObject = {
  property: 'Value!',
  otherProperty: 77,
  "obnoxious property": function() {
    // do stuff!
  }
};
```

Há também duas maneiras de obter informações de um objeto: notação de ponto e notação de colchetes.

```hash
// dot notation
myObject.property; // 'Value!'

// bracket notation
myObject["obnoxious property"]; // [Function]
```

#### Teste de existência de propriedade, operador “in”
Uma característica notável dos objetos em JavaScript, em comparação com muitas outras linguagens, é que é possível acessar qualquer propriedade. Não haverá erro se a propriedade não existir!

Ler uma propriedade não existente retorna apenas undefined. Então podemos testar facilmente se a propriedade existe:

let user = {};

alert( user.noSuchProperty === undefined ); // true means "no such property"
Há também um operador especial "in"para isso.

A sintaxe é:

"key" in object