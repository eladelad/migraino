var elasticsearch = require('elasticsearch');

var elasticClient = new elasticsearch.Client({
    host: 'search-migrano-3thswwjharrfstzpfztjuli6cy.us-west-2.es.amazonaws.com',
    log: 'trace',
    port: '80'
});

var Promise = require('promise');
var debug = false;

//elasticClient.ping({
//  requestTimeout: 30000,
//  // undocumented params are appended to the query string
//  hello: "elasticsearch"
//}, function (error) {
//  if (error) {
//    console.error('elasticsearch cluster is down!');
//  } else {
//    console.log('All is well');
//  }
//});

function addDocument(document, type, indexName, id) {
    var documentJson = {
        index: indexName,
        type: type,
        body: document
    };
    if (id) { documentJson.id = id; }
    if (debug){
        console.log(documentJson);
        return new Promise(function (resolve, reject) {
            resolve("hello");
        });
    }
    return elasticClient.index(documentJson);
}
exports.addDocument = addDocument;

function updateDocument(document, type, indexName, id){
    if (!id) { return false }
    var documentJson = {
        index: indexName,
        type: type,
        body: {
            doc: document
        }
    };
    if (debug){
        console.log(documentJson);
        return new Promise(function (resolve, reject) {
            resolve("hello");
        });
    }
    return elasticClient.update(documentJson)
}

exports.updateDocument = updateDocument;