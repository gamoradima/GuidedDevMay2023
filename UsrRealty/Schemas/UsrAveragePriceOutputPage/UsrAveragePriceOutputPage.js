define("UsrAveragePriceOutputPage", [], function() {
	return {
		entitySchemaName: "",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "FLOAT6239ff04-0583-4259-bb08-5e64be2a57a2",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrAveragePrice",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING68b5a2d6-1c5c-4532-8842-003399f2af1e",
				"values": {
					"layout": {
						"colSpan": 17,
						"rowSpan": 3,
						"column": 7,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrSQLText",
					"enabled": false,
					"contentType": 0
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_DIFF*/
	};
});
