/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    var newHours = hours, newMinutes = minutes + interval;
    if (newMinutes > 59) {
        var coef = Math.floor(newMinutes / 60);
        newHours += coef;
        newMinutes %= 60;
        if (newHours > 23) {
            newHours %= 24;
        }
    }
    var resultStr = "";
    resultStr += newHours < 10 ? "0" + newHours : newHours;
    resultStr += ":";
    resultStr += newMinutes < 10 ? "0" + newMinutes : newMinutes;
    return resultStr;
};

