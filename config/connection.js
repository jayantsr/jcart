const mongoClient = require('mongodb').MongoClient;
const dbstate = {
    db: null,
};

module.exports.connect = done => {
    const url = 'mongodb://192.168.100.115:27017';
    const dbname = 'jcart';

    mongoClient.connect(url, (err, data) => {
        if (err) return done(err);
        dbstate.db = data.db(dbname);
        done();
    });
};

module.exports.get = () => {
    return dbstate.db;
};