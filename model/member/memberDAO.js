var db = require("../../config/kyjdb");

function Member_selectAll(parameters) {
    return new Promise(function (resolve, rejcet) {
        db.query(`SELECT * FROM Member`, function (error, db_data) {
            if (error) {
                logger.error(
                    "DB error [Research_Fields]"+
                    "\n \t" + `SELECT * FROM Research_Fields` +
                    "\n \t" + error);
                rejcet('DB ERR');
                //throw error;
            }
            if(db_data[0] === undefined)
                resolve("<script>" +
                "alert('No Data');" +
                "window.history.go(-1);"+
                "</script>");
            resolve(db_data);
        });
    })
}
module.exports.memberDBFunc = {
    Member_selectAll
}
