/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    hashtags = hashtags.map(function (item, index){return item.toLowerCase();});
    var array = hashtags.reduce(getUniqueTags,[]);
    return array.join(", ");
};

function getUniqueTags(accum, item){
    if(accum.indexOf(item.toLowerCase())===-1){
        accum.push(item);
    }
    return accum;
}