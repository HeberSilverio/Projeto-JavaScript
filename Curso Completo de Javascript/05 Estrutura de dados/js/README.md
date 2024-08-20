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