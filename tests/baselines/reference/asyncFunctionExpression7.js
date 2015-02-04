//// [asyncFunctionExpression7.ts]
declare class Promise<T> {
    constructor(init: (resolve: (value?: T | IPromise<T>) => void, reject: (reason?: any) => void) => void);
    then<TResult>(onfulfilled?: (value: T) => TResult | IPromise<TResult>, onrejected?: (reason: any) => TResult | IPromise<TResult>): Promise<TResult>;
}

var bar = async function (): Promise<void> {
  // 'await' here is an identifier, and not an await expression.
  var foo = async function (a = await): Promise<void> {
  }
}

//// [asyncFunctionExpression7.js]
var bar = function () {
    return new Promise(function (_resolve) {
        _resolve(__awaiter(__generator(function (_state) {
            foo = function (a) {
                if (a === void 0) { a = await; }
                return new Promise(function (_resolve) {
                    _resolve(__awaiter(__generator(function (_state) {
                        return [2 /*return*/];
                    })));
                });
            };
            return [2 /*return*/];
        })));
    });
    var foo;
};