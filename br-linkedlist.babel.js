'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinkedList = function () {
  var Nodo = function Nodo() {
    this.proximo = null;
    this.anterior = null;
    this.valor = null;
  };

  return function () {
    _createClass(LinkedList, [{
      key: '_adicionaProxy',
      value: function _adicionaProxy() {
        return new Proxy(this, {
          get: function get(target, property, receiver) {
            if (_typeof(target[property]) == (typeof Function === 'undefined' ? 'undefined' : _typeof(Function))) {
              return function () {
                return Reflect.apply(target[property], target, arguments);
              };
            } else if (target[property]) {
              return target[property];
            } else if (!isNaN(property)) {
              return target.get(property);
            }
          },
          has: function has(target, prop) {
            return target.has(prop);
          },
          set: function set(target, property, value, receiver) {
            target.set(property, value);
            return value;
          }
        });
      }
    }]);

    function LinkedList() {
      _classCallCheck(this, LinkedList);

      this._primeiro = null;
      this._ultimo = null;
      this._length = 0;

      return this._adicionaProxy();
    }

    _createClass(LinkedList, [{
      key: 'push',
      value: function push(valor) {
        var nodo = new Nodo();
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
    }, {
      key: 'shift',
      value: function shift() {
        console.log(this._primeiro);

        this._primeiro = this._primeiro.proximo;
        this._primeiro.anterior = null;
        console.log(this._primeiro);

        this._length--;
      }
    }, {
      key: 'pop',
      value: function pop() {
        this._ultimo = this._ultimo.anterior;
        this._ultimo.proximo = null;
        this._length--;
      }
    }, {
      key: 'get',
      value: function get(index) {
        if (index == 0) return this._primeiro.valor;
        if (index == this._length - 1) return this._ultimo.valor;
        if (index >= this._length || index < 0) {
          throw new Error('índice fora da lista');
        }
        return this._getNodo(index).valor;
      }
    }, {
      key: 'set',
      value: function set(index, valor) {
        if (index == 0) this._primeiro.valor = valor;else if (index == this._length - 1) this._ultimo.valor == valor;else if (index >= this._length || index < 0) {
          throw new Error('índice fora da lista');
        } else {
          this._getNodo(index).valor = valor;
        }
      }
    }, {
      key: 'has',
      value: function has(valor) {
        var encontrado = false;
        var indice = false;
        this.forEach(function (valorNodo, i) {
          encontrado = valorNodo == valor;
          if (encontrado) {
            indice = i;
          }
          return encontrado;
        });
        return indice;
      }
    }, {
      key: 'forEach',
      value: function forEach(func) {
        var nodoAtual = this._primeiro;
        for (var i = 0; nodoAtual; i++) {
          if (func(nodoAtual.valor, i) === true) {
            break;
          }
          nodoAtual = nodoAtual.proximo;
        }
      }
    }, {
      key: 'forEachReverse',
      value: function forEachReverse(func) {
        var nodoAtual = this._ultimo;
        for (var i = 0; nodoAtual; i++) {
          if (func(nodoAtual.valor, i) === true) {
            break;
          }
          nodoAtual = nodoAtual.anterior;
        }
      }
    }, {
      key: '_getNodo',
      value: function _getNodo(index) {
        var nodoAtual = this._primeiro;
        for (var i = 0; i < index; i++) {
          nodoAtual = nodoAtual.proximo;
        }
        return nodoAtual;
      }
    }, {
      key: 'length',
      get: function get() {
        return this._length;
      }
    }]);

    return LinkedList;
  }();
}();