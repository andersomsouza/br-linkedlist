## br-linkedlist

Lista encadeada que pode facilmente substituir o array nativo em seus projetos.

## Exemplo

```javascript

lista = new LinkedList();

// Adicionando itens
for (var i = 25; i > 0; i--) {
  lista.push(i);
}

// Removendo itens
lista.shift();
lista.pop();

// Getters 
console.log(lista[20]);
console.log(lista.get(20));

// Setters 
lista.set(20,55)
console.log(lista[20]);
lista[20] = 50;
console.log(lista[20]);

// Tem item na lista?
console.log("Indice de '10' ="+lista.has(10));
console.log("Indice de '26' ="+lista.has(26));
console.log("10 está na lista? ="+ (10 in lista));
console.log("26 está na lista? ="+ (26 in lista));

// forEach
lista.forEach(v => console.log(v))
lista.forEachReverse(v => console.log(v))

```

## Motivação

Facilitar o plotagem de grande conjunto de dados, como não encontrei implementação parecida, resolvi implementar.

## Instalação

Em HTML : 
```
<link rel="stylesheet" href="path/to/br-linkedlist.js">
```

## API Reference

Métodos:

    - push(valor)
    - pop()
    - shift()
    - has(valor)
    - get(indice)
    - set(indice, valor)
    - forEach(function(valor, indice))
    

## TO DO

- [x] implementação inicial utilizando module pattern e proxy pattern
- [x] função get e set
- [x] função forEach e has
- [x] outras funções básicas
- [ ] incluir transpiller (ES2015 -> VanillaJS)
- [ ] adicionar outras funções implementadas por arrays   


## License

A short snippet describing the license (MIT, Apache, etc.)