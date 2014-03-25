exports.definition = {
    config: {
        columns: {
            active: "boolean"
        },
        defaults: {},
        adapter: {
            type: "acs",
            collection_name: "todos",
            custom: true
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("todos", exports.definition, []);

collection = Alloy.C("todos", exports.definition, model);

exports.Model = model;

exports.Collection = collection;