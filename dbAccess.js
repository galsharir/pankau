/**
 * Created by galsharir on 11/03/16.
 */


// TODO: update this to get the data from our sqlite
function getQandA(location, callback){

    // ToDo:  Get the top 10 q and A for this location
    console.log("In get quota");
    var params = { //Params to be sent according to the structure of the table (In PDF file).
        "TableName": "farmersQuota"
    }
    dynamodb.scan(params, function (err, data) {
        if (err) {
            console.log(err); // an error occurred
        }
        else {
            console.log(data); // successful response
            callback(data);
        }
    })
}

exports.getQandA = getQandA;