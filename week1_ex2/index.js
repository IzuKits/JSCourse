/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
    if (hours > 23 || hours < 0) return false;
    if (minutes > 59 || minutes < 0) return false;
    return true;

};
