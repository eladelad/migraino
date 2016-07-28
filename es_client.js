var elasticsearch = require('elasticsearch');

var elasticClient = new elasticsearch.Client({
    host: 'search-migrano-3thswwjharrfstzpfztjuli6cy.us-west-2.es.amazonaws.com',
    log: 'trace',
    port: '80'
});

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

function addDocument(document) {
    var indexTime = new Date().toISOString();
    indexTime = indexTime.substring(0, indexTime.indexOf('T'));
    var indexName = 'migraino-' + indexTime;
    var cur_date = new Date();
    document.date = cur_date.toISOString();
    console.log(indexName);
    console.log(document);
    return elasticClient.index({
        index: indexName,
        type: "document",
        body: document
    });
}
exports.addDocument = addDocument;