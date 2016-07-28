/**
 * Created by elad on 7/28/16.
 */
var elasticsearch = require('elasticsearch');

var elasticClient = new elasticsearch.Client({
    host: 'search-migrano-3thswwjharrfstzpfztjuli6cy.us-west-2.es.amazonaws.com',
    port: '80',
    log: 'trace',
    path: '/tmp/elasticsearch.log'

});

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
        type: 'document',
        body: document
    });
}

addDocument({test:'test'}).then(function (error, result) {
    if (error) {console.log(error)} else {console.log(result)}
});