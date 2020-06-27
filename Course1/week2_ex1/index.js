/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var tweets = tweet.split(" ");
    return tweets.filter(filterIsTag).map(getNameTag);
};

/**
 * @param {String} item
 * @param {String} index
 * @returns {bool}
 */
function filterIsTag(item, index){
    return item[0]==="#";
};

/**
 * @param {String} item
 * @param {String} index
 * @returns {String}
 */
function getNameTag(item, index){
    return item.slice(1, item.length);
};
