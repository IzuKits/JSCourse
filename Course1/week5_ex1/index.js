module.exports = {

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        ruleEvents.add(event, subscriber, handler);
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        ruleEvents.remove(event, subscriber);
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        if(ruleEvents.events.hasOwnProperty(event)){
            ruleEvents.events[event].handlers.forEach(function(item, index){
                item.call(ruleEvents.events[event].subscribers[index]);
            })
        }
        return this;
    }
};
var ruleEvents = {
    events: {},

    add: function(event, subscriber, handler){
        this.events[event]===undefined?this.events[event]={}:false;
        if(!this.events[event].hasOwnProperty("subscribers"))
        {
            this.events[event]["subscribers"] = [];
        }
        this.events[event]["subscribers"].push(subscriber);
        if(!this.events[event].hasOwnProperty("handlers"))
        {
            this.events[event]["handlers"] = [];
        }
        this.events[event]["handlers"].push(handler);
    },
    remove: function(event, subscriber){
        var removeHandlers = [];
        if(this.events[event]===undefined){
            return;
        }
        this.events[event].subscribers =  this.events[event].subscribers.filter(function(item, index){
            item===subscriber?removeHandlers.push(this.events[event].handlers[index]):false;
            return item!==subscriber;
        }.bind(this));
        this.events[event].handlers = this.events[event].handlers.filter(function(item, index){
            return removeHandlers.indexOf(item)===-1;
        });
        
        if(this.events[event].subscribers.length===0){
            delete this.events[event];
        }
    },
}
