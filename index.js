function receivesAFunction (callback){
    return callback();
}
function returnsANamedFunction (){
    return function named(x){
        return x;
    };
}
function returnsAnAnonymousFunction(){
    return () => {};
}