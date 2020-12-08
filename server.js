var express = require('express')
var app = express()
var fs = require('fs')
const { features } = require('process')

app.get('/test', function(req, res){
    res.send('hello victor');
})

var server = app.listen(process.env.PORT || 8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log(`listening at ${host}:${port}`)
})