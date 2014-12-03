/** @flow */

type Callback<T> = (err: ?Error, x?: T) => void;

function someAsyncFunction(arg1, arg2, callback: Callback<string>) {
    setTimeout(function() {
        if (Math.random() < 0.5) {
            callback(new Error('Broken'));
        } else {
            callback(null, "OK");
        }
    }, arg1 * arg2)
}

someAsyncFunction(10, 37, function(err, result) {
    if (err) {
        console.warn(err.stack);
        return;
    }
    console.log(result);
});
