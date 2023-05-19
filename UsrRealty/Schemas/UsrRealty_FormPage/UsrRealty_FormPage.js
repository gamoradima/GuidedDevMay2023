define("UsrRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "88552bae-7302-4d9c-a4d0-17790915676a",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrPriceUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_eyqvk8o",
					"labelPosition": "auto",
					"control": "$NumberAttribute_eyqvk8o"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrCommissionUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_wazftvc",
					"labelPosition": "auto",
					"control": "$NumberAttribute_wazftvc",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_2fjf00c",
					"labelPosition": "auto",
					"control": "$NumberAttribute_2fjf00c"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_dcgvhx2",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Button_Push",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(Button_qph1sc4_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.MyButtonRequest"
					},
					"clickMode": "default",
					"icon": "database-icon"
				},
				"parentName": "GridContainer_dcgvhx2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_y15o9fm",
					"labelPosition": "auto",
					"control": "$LookupAttribute_y15o9fm",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_iv42e37",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_iv42e37_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrOfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_qnaugco",
					"labelPosition": "auto",
					"control": "$LookupAttribute_qnaugco",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_x461gch",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_x461gch_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrOfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrComment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_46wo2x2",
					"labelPosition": "auto",
					"control": "$StringAttribute_46wo2x2",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrOwner",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_ne6nhdc",
					"labelPosition": "auto",
					"control": "$LookupAttribute_ne6nhdc",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_cbi2rfi",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_cbi2rfi_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrOwner",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_4et5trf",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrOfferTypeUsrCommissionMultiplier",
					"control": "$UsrOfferTypeUsrCommissionMultiplier",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_eiywcgy",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_eiywcgy_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_gbv8fxc",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_eiywcgy",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_9y3cv3y",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_gbv8fxc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_9hcdkyu",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_9hcdkyu_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_9y3cv3y",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_280euxl",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_280euxl_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_cc2cv63DS"
						}
					}
				},
				"parentName": "FlexContainer_9y3cv3y",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_5swtwi1",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_5swtwi1_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_9y3cv3y",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_ak6at0l",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_ak6at0l_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_cc2cv63"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_5swtwi1",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_scoscsl",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_scoscsl_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_5swtwi1",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_7t5vrmh",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_7t5vrmh_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_cc2cv63"
					]
				},
				"parentName": "FlexContainer_9y3cv3y",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_bfbzus3",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_eiywcgy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_RealtyVisits",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"fitContent": true,
					"items": "$GridDetail_cc2cv63",
					"primaryColumnName": "GridDetail_cc2cv63DS_Id",
					"columns": [
						{
							"id": "6b210ad3-f9c6-36b9-7eef-c9902592a286",
							"code": "GridDetail_cc2cv63DS_UsrVisitDateTime",
							"path": "UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_cc2cv63DS_UsrVisitDateTime)#",
							"dataValueType": 7,
							"width": 176
						},
						{
							"id": "5bce2a58-6fc6-2d06-658d-02cefaf51daa",
							"code": "GridDetail_cc2cv63DS_UsrPotentialCustomer",
							"path": "UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_cc2cv63DS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 173
						},
						{
							"id": "013da66a-f1f7-7aa5-213c-b87dbc541ace",
							"code": "GridDetail_cc2cv63DS_UsrManager",
							"path": "UsrManager",
							"caption": "#ResourceString(GridDetail_cc2cv63DS_UsrManager)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 137
						},
						{
							"id": "5312ab52-14b6-cfd4-1c8f-d348a187dfc5",
							"code": "GridDetail_cc2cv63DS_UsrComment",
							"path": "UsrComment",
							"caption": "#ResourceString(GridDetail_cc2cv63DS_UsrComment)#",
							"dataValueType": 28,
							"width": 146
						},
						{
							"id": "45da6917-6ba2-e28b-f990-90ba5390b923",
							"code": "GridDetail_cc2cv63DS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(GridDetail_cc2cv63DS_CreatedOn)#",
							"dataValueType": 7
						}
					]
				},
				"parentName": "GridContainer_bfbzus3",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"UsrName": {
					"modelConfig": {
						"path": "PDS.UsrName"
					}
				},
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				},
				"NumberAttribute_eyqvk8o": {
					"modelConfig": {
						"path": "PDS.UsrPriceUSD"
					},
					"validators": {
						"MySuperValidator": {
							"type": "usr.DGValidator",
							"params": {
								"minValue": 30,
								"message": "Price can not be less than 30.0$"
							}
						}
					}

				},
				"NumberAttribute_2fjf00c": {
					"modelConfig": {
						"path": "PDS.UsrArea"
					},
					"validators": {
						"MySuperValidator": {
							"type": "usr.DGValidator",
							"params": {
								"minValue": 10,
								"message": "Area can not be less than 10.0 sqft"
							}
						}
					}
				},
				"LookupAttribute_y15o9fm": {
					"modelConfig": {
						"path": "PDS.UsrType"
					}
				},
				"LookupAttribute_qnaugco": {
					"modelConfig": {
						"path": "PDS.UsrOfferType"
					}
				},
				"StringAttribute_46wo2x2": {
					"modelConfig": {
						"path": "PDS.UsrComment"
					}
				},
				"LookupAttribute_ne6nhdc": {
					"modelConfig": {
						"path": "PDS.UsrManager"
					}
				},
				"GridDetail_cc2cv63": {
					"isCollection": true,
					"modelConfig": {
						"path": "GridDetail_cc2cv63DS"
					},
					"viewModelConfig": {
						"attributes": {
							"GridDetail_cc2cv63DS_UsrVisitDateTime": {
								"modelConfig": {
									"path": "GridDetail_cc2cv63DS.UsrVisitDateTime"
								}
							},
							"GridDetail_cc2cv63DS_UsrPotentialCustomer": {
								"modelConfig": {
									"path": "GridDetail_cc2cv63DS.UsrPotentialCustomer"
								}
							},
							"GridDetail_cc2cv63DS_UsrManager": {
								"modelConfig": {
									"path": "GridDetail_cc2cv63DS.UsrManager"
								}
							},
							"GridDetail_cc2cv63DS_UsrComment": {
								"modelConfig": {
									"path": "GridDetail_cc2cv63DS.UsrComment"
								}
							},
							"GridDetail_cc2cv63DS_CreatedOn": {
								"modelConfig": {
									"path": "GridDetail_cc2cv63DS.CreatedOn"
								}
							},
							"GridDetail_cc2cv63DS_Id": {
								"modelConfig": {
									"path": "GridDetail_cc2cv63DS.Id"
								}
							}
						}
					}
				},
				"NumberAttribute_wazftvc": {
					"modelConfig": {
						"path": "PDS.UsrCommissionUSD"
					}
				},
				"UsrOfferTypeUsrCommissionMultiplier": {
					"modelConfig": {
						"path": "PDS.UsrOfferTypeUsrCommissionMultiplier"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"config": {
						"entitySchemaName": "UsrRealty",
						"attributes": {
							"UsrOfferTypeUsrCommissionMultiplier": {
								"path": "UsrOfferType.UsrCommissionMultiplier",
								"type": "ForwardReference"
							}
						}
					},
					"scope": "page"
				},
				"AttachmentListDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "SysFile",
						"attributes": {
							"Name": {
								"path": "Name"
							}
						}
					}
				},
				"GridDetail_cc2cv63DS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "UsrRealtyVisit",
						"attributes": {
							"UsrVisitDateTime": {
								"path": "UsrVisitDateTime"
							},
							"UsrPotentialCustomer": {
								"path": "UsrPotentialCustomer"
							},
							"UsrManager": {
								"path": "UsrManager"
							},
							"UsrComment": {
								"path": "UsrComment"
							},
							"CreatedOn": {
								"path": "CreatedOn"
							}
						}
					}
				}
			},
			"primaryDataSourceName": "PDS",
			"dependencies": {
				"GridDetail_cc2cv63DS": [
					{
						"attributePath": "UsrParentRealty",
						"relationPath": "PDS.Id"
					}
				]
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.MyButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					this.console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.NumberAttribute_eyqvk8o;
					this.console.log("Price = " + price);
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
					/* If the UsrPriceUSD field changes, take the following steps. */
					if (request.attributeName === 'NumberAttribute_eyqvk8o' || 					// if price changed
					   request.attributeName === 'UsrOfferTypeUsrCommissionMultiplier' ) { 		// or multiplier changed
						var price = await request.$context.NumberAttribute_eyqvk8o;
						var multiplier = await request.$context.UsrOfferTypeUsrCommissionMultiplier;
						var commission = price * multiplier;
						request.$context.NumberAttribute_wazftvc = commission;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});