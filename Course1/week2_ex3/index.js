// Телефонная книга
var phoneBook = {};

var COMMAND_ADD = "ADD";
var COMMAND_DELETE = "REMOVE_PHONE";
var COMMAND_SHOW = "SHOW";

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var words = command.split(" ");
    switch (words[0]) {
        case COMMAND_SHOW:
            return showPhoneBook();
        case COMMAND_ADD:
            return addPerson(words[1], words[2].split(","));
        case COMMAND_DELETE:
            return removePhone(words[1]);
    }
};

function showPhoneBook() {
    var keys = Object.keys(phoneBook);
    var resultArray = [];
    for (var i = 0; i < keys.length; i++) {
        var tempStr = "";
        tempStr += keys[i] + ": ";
        var keys2 = Object.keys(phoneBook[keys[i]]);
        var telephoneArray = [];
        for (var j = 0; j < keys2.length; j++) {
            telephoneArray.push(phoneBook[keys[i]][keys2[j]]);
        }
        if (telephoneArray.length === 0) {
            tempStr = "";
        }
        tempStr += telephoneArray.join(", ");
        if (tempStr !== "") { 
            resultArray.push(tempStr); 
        }
    }
    resultArray.sort();
    return resultArray;
}

/**
 * @param {String} name
 * @param {[String]} telephoneNubers
 */
function addPerson(name, telephoneNubers) {
    if(!phoneBook.hasOwnProperty(name)){
        phoneBook[name] = {};
    }
    var index = Object.keys(phoneBook[name]).length;
    for(var i = 0;i<telephoneNubers.length;i++){
        phoneBook[name][index+i] = telephoneNubers[i];
    }
}
/**
 * 
 * @param {String} phone
 * @returns {Boolean} 
 */
function removePhone(phone){
    var names = Object.keys(phoneBook);
    for(var i = 0;i<names.length;i++){
        var phones = Object.keys(phoneBook[names[i]]);
        for(var j = 0;j<phones.length;j++){
            if(phoneBook[names[i]][phones[j]]===phone){
                delete phoneBook[names[i]][phones[j]];
                return true;
            }
        }
    }
    return false;
}

