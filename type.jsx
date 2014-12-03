/** @flow */

var funcs: {x: (type: string) => string;} = {
    x: function(type: string): string {
        return 'Type: ' + type;
    }
};

console.log(funcs.x('thing'));
