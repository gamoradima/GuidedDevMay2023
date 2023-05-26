namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEventsSchema

	/// <exclude/>
	public class UsrRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEventsSchema(UsrRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("cb0f6a9c-1969-4e5d-a059-18a8848f361a");
			Name = "UsrRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("85a62d69-8de5-4bc6-a1db-dab40f05e2f2");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,81,107,219,48,16,126,47,244,63,28,102,15,54,4,209,190,174,91,97,201,178,17,40,219,104,156,190,140,61,40,242,197,213,144,37,163,147,211,101,99,255,125,39,203,33,174,211,65,15,131,173,211,119,223,125,223,249,172,108,144,90,169,16,74,244,94,146,219,5,177,112,118,167,235,206,203,160,157,189,188,248,115,121,1,28,29,105,91,195,250,64,1,155,155,113,106,92,216,52,206,254,247,210,163,88,218,160,131,70,122,13,70,44,247,104,195,17,250,189,79,31,250,220,157,102,17,22,125,190,86,143,216,200,47,236,1,222,67,182,33,127,143,210,132,67,86,252,72,69,109,183,53,90,129,50,146,8,210,221,11,52,240,22,230,146,240,133,155,196,50,12,96,68,232,246,44,89,87,8,123,167,43,248,106,87,150,208,7,246,146,187,237,79,84,1,8,109,133,126,6,137,115,142,59,54,214,51,127,240,53,1,22,39,198,17,121,140,45,11,17,99,194,35,19,22,55,207,145,137,26,124,239,138,237,231,41,81,164,130,9,184,66,165,27,105,160,245,90,197,89,165,42,241,25,67,121,104,177,90,56,211,53,246,65,154,14,223,13,208,219,60,206,243,91,196,111,214,31,179,105,119,189,131,60,145,221,194,245,213,49,138,231,160,137,183,24,40,86,180,144,86,161,193,138,117,4,223,33,51,159,227,40,248,184,26,188,156,36,107,44,177,105,141,12,81,185,197,39,184,115,74,26,253,91,110,13,174,123,92,62,248,217,240,212,120,123,45,255,2,94,93,113,143,228,58,175,24,228,60,179,204,206,219,196,56,237,77,90,184,108,6,217,89,7,18,253,116,86,84,58,55,215,117,58,101,133,40,221,160,160,120,133,13,150,159,18,226,147,243,141,12,249,196,30,55,190,22,87,243,55,103,211,142,17,30,189,123,234,237,47,127,41,108,163,193,99,253,20,254,247,116,28,62,249,197,207,63,122,6,7,218,237,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("e1f9810a-9584-dd0f-43e6-b6f5e650d152"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("85a62d69-8de5-4bc6-a1db-dab40f05e2f2"),
				CreatedInSchemaUId = new Guid("cb0f6a9c-1969-4e5d-a059-18a8848f361a"),
				ModifiedInSchemaUId = new Guid("cb0f6a9c-1969-4e5d-a059-18a8848f361a")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("cb0f6a9c-1969-4e5d-a059-18a8848f361a"));
		}

		#endregion

	}

	#endregion

}

