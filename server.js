var express = require('express')
var app = express()
var fs = require('fs')
const { features } = require('process')

app.get('/test', function(req, res){
    res.send('hi');
})

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port
    console.log(`listening at ${host}:${port}`)
})