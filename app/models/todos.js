exports.definition = {
	config: {
		"columns" : {
			"active" : "boolean"
		},
		"defaults": {},
		"adapter": {
			"type": "acs",
			"collection_name": "todos",
			"custom": true
		}
	},
	extendModel: function(Model){
		_.extend(Model.prototype, {});
		return Model;
	},

	extendCollection: function(Collection){
		_.extend(Collection.prototype, {});
		return Collection;
	}
};