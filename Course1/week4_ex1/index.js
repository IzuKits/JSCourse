/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    var args = [].slice.call(arguments);
    var arr = collection.slice();
    var selects = [];
    for(let i = 1;i<args.length;i++){
        if(args[i].name==="filterIn"){
            arr = args[i](arr);
        }else{
            selects.push(args[i]);
        }
    }
    selects.forEach(function(item, index){arr = item(arr);})
    return arr;
}

/**
 * @params {String[]}
 */
function select() {
    var fields = [].slice.call(arguments);
    return function select(collection) {
        var resultCollection = [];
        for (let i = 0; i < collection.length; i++) {
            var item = {};
            for (let j = 0; j < fields.length; j++) {
                if (collection[i].hasOwnProperty(fields[j])) {
                    item[fields[j]] = collection[i][fields[j]];
                }
            }
            resultCollection.push(item);
        }
        return resultCollection;
    }

}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {

    return function filterIn(collection) {
        var resultCollection = collection.filter(checkField);
        function checkField(item, index) {
            var res = false;
            for (let i = 0; i < values.length; i++) {
                if (item.hasOwnProperty(property)) {
                    res = res || item[property] === values[i];
                }
            }
            return res;
        }
        return resultCollection;
    }

}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};

