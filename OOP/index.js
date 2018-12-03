var EventEmmiter = require('events').EventEmitter;

var dispatcher = EventEmmiter();

dispatcher.on('connect', function(data){
    console.log('Connect 1', data);
});

dispatcher.on('connect', function(data){
    console.log('Connect 2', data);
});