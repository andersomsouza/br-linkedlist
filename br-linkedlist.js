var LinkedList = (function() {
  Nodo = function() {
    this.proximo = null;
    this.anterior = null;
    this.valor = null;
  };

  return class LinkedList {
    _adicionaProxy() {
      return new Proxy(this, {
        get: function(target, property, receiver) {
          if (typeof target[property] == typeof Function) {
            return function() {
              return Reflect.apply(target[property], target, arguments);
            };
          } else if (target[property]) {
            return target[property];
          } else if (!isNaN(property)) {
            return target.get(property);
          }
        },
        has: function(target, prop) {
          return target.has(prop);
        },
        set: function(target, property, value, receiver) {
          target.set(property, value);
        },
      });
    }

    constructor() {
      this._primeiro = null;
      this._ultimo = null;
      this._length = 0;

      return this._adicionaProxy();
    }

    push(valor) {
      let nodo = new Nodo();
      nodo.valor = valor;
      if (this._primeiro) {
        nodo.anterior = this._ultimo;
        this._ultimo.proximo = nodo;
        this._ultimo = nodo;
      } else {
        this._primeiro = nodo;
        this._ultimo = nodo;
      }
      this._length++;
    }

    shift() {
      let nodo = this._primeiro;
      this._primeiro = nodo.proximo;

      this._length--;
    }

    pop() {
      let nodo = this._ultimo;
      this._ultimo = nodo.anterior;

      this._length--;
    }

    get length() {
      return this._length;
    }

    get(index) {
      if (index == 0) return this._primeiro.valor;
      if (index == this._length - 1) return this._ultimo.valor;
      if (index >= this._length || index < 0) {
        throw new Error('índice fora da lista');
      }
      return this._getNodo(index).valor;
    }

    set(index, valor) {
      if (index == 0) this._primeiro.valor = valor;
      else if (index == this._length - 1) this._ultimo.valor == valor;
      else if (index >= this._length || index < 0) {
        throw new Error('índice fora da lista');
      } else {
        this._getNodo(index).valor = valor;
      }
    }

    has(valor) {
      let encontrado = false;
      let indice = false;
      this.forEach((valorNodo, i) => {
        encontrado = valorNodo == valor;
        if (encontrado) {
          indice = i;
        }
        return encontrado;
      });
      return indice;
    }

    forEach(func) {
      let nodoAtual = this._primeiro;
      for (var i = 0; nodoAtual; i++) {
        if (func(nodoAtual.valor, i) === true) {
          break;
        }
        nodoAtual = nodoAtual.proximo;
      }
    }

    _getNodo(index) {
      let nodoAtual = this._primeiro;
      for (let i = 0; i < index; i++) {
        nodoAtual = nodoAtual.proximo;
      }
      return nodoAtual;
    }
  };
})();
