/**
 * Created by galsharir on 11/03/16.
 */



function getQandA(db, location, callback) {

    var data = db.get({
        fields: '*',
        table: 'myTable',
        where: 'location=location',
        order: 'score DESC'
    });

    console.log(data); // successful response
    callback(data);
}



exports.getQandA = getQandA;