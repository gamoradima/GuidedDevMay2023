define("UsrMyRealtyClassic1Page", ["ServiceHelper"], function(ServiceHelper) {
	return {
		entitySchemaName: "UsrMyRealtyClassic",
		attributes: {
			"UsrCommissionUSD": {
				dependencies: [
					{
						columns: ["UsrPriceUSD", "UsrOfferType"],
						methodName: "calculateCommission"
					}
				]
			},
			"UsrOfferType": {
				lookupListConfig: {
					columns: ["UsrCommissionMultiplier"]
				}
			}
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrMyRealtyClassicFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrMyRealtyClassic"
				}
			},
			"UsrSchemacf3405ddDetail345a6998": {
				"schemaName": "UsrRealtyVisitClassicDetailGrid",
				"entitySchemaName": "UsrRealtyVisitClassic",
				"filter": {
					"detailColumn": "UsrParentRealty",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"UsrComment": {
				"7632a40c-9084-4c96-8536-9eb2eeba00c1": {
					"uId": "7632a40c-9084-4c96-8536-9eb2eeba00c1",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 7,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrPriceUSD"
							},
							"rightExpression": {
								"type": 0,
								"value": 100000,
								"dataValueType": 5
							}
						}
					]
				}
			},
			"UsrManager": {
				"7ce8097e-8927-4afa-bf13-edc62e74db94": {
					"uId": "7ce8097e-8927-4afa-bf13-edc62e74db94",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrType"
							}
						}
					]
				},
				"0939685c-8cba-485e-9fb0-5ba47cbaa1ef": {
					"uId": "0939685c-8cba-485e-9fb0-5ba47cbaa1ef",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "Type",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 0,
					"value": "60733efc-f36b-1410-a883-16d83cab0980",
					"dataValueType": 10
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			onRunWebServiceButtonClick: function() {
				var typeObject = this.get("UsrType");
				if (!typeObject) {
					return;
				}
				var typeId = typeObject.value;
				var offerTypeObject = this.get("UsrOfferType");
				if (!offerTypeObject) {
					return;
				}
				var offerTypeId = offerTypeObject.value;
				var params = {
					realtyTypeId: typeId,
					realtyOfferTypeId: offerTypeId,
					entityName: "UsrMyRealtyClassic"
				};				
				this.console.log("1");
				ServiceHelper.callService("RealtyService", "GetTotalAmountByTypeId", this.getWebServiceResult, params, this);
				this.console.log("2");
			},
			getWebServiceResult: function(response, success) {
				this.console.log("3");
				this.Terrasoft.showInformation("Total amount by typeId: " + response.GetTotalAmountByTypeIdResult);
			},

			calculateCommission: function() {
				var price = this.get("UsrPriceUSD");
				if (!price) {
					price = 0;
				}
				var offerTypeObject = this.get("UsrOfferType");
				var coeff = 0;
				if (offerTypeObject) {
					coeff = offerTypeObject.UsrCommissionMultiplier;
				}
				var commission = price * coeff;
				this.set("UsrCommissionUSD", commission);
			},

			onEntityInitialized: function() {
				this.callParent(arguments);
				this.calculateCommission();
			},
			onMyButtonClick: function() {
				this.console.log("MyButton pressed");
				Terrasoft.showInformation("My button pressed");
			},
			getMyButtonEnabled: function() {
				var result = true;
				var name = this.get("UsrName");
				if (!name) {
					result = false;
				}
				return result;
			},
			positiveValueValidator: function(value, column) {
				var msg = "";
				if (value < 0) {
					msg = this.get("Resources.Strings.ValueMustBeGreaterThanZero");
				}
				return {
					invalidMessage: msg
				};
			},
			setValidationConfig: function() {
				this.callParent(arguments);
				this.addColumnValidator("UsrPriceUSD", this.positiveValueValidator);
				this.addColumnValidator("UsrArea", this.positiveValueValidator);
			},
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrNamec46177ef-c87a-4b99-a311-ad1b9eb8a0c9",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrName",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FLOATd5a2bd7e-1d48-40e5-823f-9bd1f17bcbc2",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrPriceUSD",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FLOATcb20ddf2-64bd-40ee-aa09-2db11fb7a9f3",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrArea",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
            /* Metadata to add the custom button to the page. */
            {
                /*  Run the operation that inserts the element to the page. */
                "operation": "insert",
                /* The meta name of the parent container to add the button. */
                "parentName": "ProfileContainer",
                /* Add the button to the element collection of the parent element. */
                "propertyName": "items",
                /* The meta name of the added button. */
                "name": "MyButton",
                /* The properties to pass to the element’s constructor. */
                "values": {
					"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
                    /* Set the type of the added element to ‘button.’ */
                    "itemType": Terrasoft.ViewItemType.BUTTON,
                    /* Bind the button title to the localizable schema string. */
                    "caption": {bindTo: "Resources.Strings.MyButtonCaption"},
                    /* Bind the button click handler method. */
                    "click": {bindTo: "onMyButtonClick"},
                    /* Bind the button availability property. */
                    "enabled": {bindTo: "getMyButtonEnabled"},
                    /* The display style of the button. */
                    "style": Terrasoft.controls.ButtonEnums.style.GREEN
                }
            },
            {
                /*  Run the operation that inserts the element to the page. */
                "operation": "insert",
                /* The meta name of the parent container to add the button. */
                "parentName": "ProfileContainer",
                /* Add the button to the element collection of the parent element. */
                "propertyName": "items",
                /* The meta name of the added button. */
                "name": "RunWebServiceButton",
                /* The properties to pass to the element’s constructor. */
                "values": {
					"layout": {
						"colSpan": 14,
						"rowSpan": 1,
						"column": 10,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
                    /* Set the type of the added element to ‘button.’ */
                    "itemType": Terrasoft.ViewItemType.BUTTON,
                    /* Bind the button title to the localizable schema string. */
                    "caption": {bindTo: "Resources.Strings.RunWebServiceButtonCaption"},
                    /* Bind the button click handler method. */
                    "click": {bindTo: "onRunWebServiceButtonClick"},
                    /* The display style of the button. */
                    "style": Terrasoft.controls.ButtonEnums.style.RED
                }
            },
			{
				"operation": "insert",
				"name": "FLOAT12a33457-9904-4f7d-82ea-c292fbe5dec9",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrCommissionUSD",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUPb7239d34-f9f2-46f7-84b6-48496534794f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP7f203a2f-f50d-4103-8441-038d6b2031ab",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrOfferType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING3f73213a-0d37-46c8-8bd1-ee074c205b61",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 2,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrComment",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUPbf620ca0-de57-4839-9cc0-84df6bf47b1b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrManager",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tab2c2af08cTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab2c2af08cTabLabelTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrSchemacf3405ddDetail345a6998",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab2c2af08cTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "UsrNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 2
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
