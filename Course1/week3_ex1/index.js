/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    return {
        value: date,

        calculate: function (num, name) {
            var dateType = this.parseDate(this.value);
            switch (name) {
                case "years":
                    dateType.setFullYear(dateType.getFullYear() + num);
                    break;
                case "months":
                    dateType.setMonth(dateType.getMonth() + num);
                    break;
                case "days":
                    dateType.setDate(dateType.getDate() + num);
                    break;
                case "hours":
                    dateType.setHours(dateType.getHours() + num);
                    break;
                case "minutes":
                    dateType.setMinutes(dateType.getMinutes() + num);
                    break;
                default:
                    throw new TypeError("Неверная величина");
                    break;
            }
            this.value = this.getStrFromDate(dateType);
            return this;
        },
        add: function (num, name) {
            if (num < 0) {
                throw new TypeError("Значение не может быть меньше 0");
            }
            return this.calculate(num, name);
        },
        subtract: function (num, name) {
            if (num < 0) {
                throw new TypeError("Значение не может быть меньше 0");
            }
            return this.calculate(-num, name);
        },

        parseDate: function (strDate) {
            var regExp = /(\d\d\d\d)-(\d\d)-(\d\d) (\d\d):(\d\d)/;
            var res = strDate.match(regExp);
            return new Date(res[1], res[2] - 1, res[3], res[4], res[5]);
        },
        getStrFromDate: function (date) {
            return date.getFullYear() + "-" + (date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1) + "")
                + "-" + (date.getDate() < 10 ? "0" + date.getDate() : String(date.getDate())) + " " +
                (date.getHours() < 10 ? "0" + date.getHours() : String(date.getHours())) + ":" +
                (date.getMinutes() < 10 ? "0" + date.getMinutes() : String(date.getMinutes()));
        }

    }
};




