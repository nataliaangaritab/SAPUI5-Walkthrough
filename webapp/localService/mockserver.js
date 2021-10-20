sap.ui.define([
	"sap/ui/core/util/MockServer",
	"sap/base/util/UriParameters"
], function (MockServer, UriParameters) {
	"use strict";
	return {
		init: function () {
			// Create
			var oMockServer = new MockServer({
				rootUri: "https://services.odata.org/V2/Northwind/Northwind.svc/"
			});
			var oUriParameters = new UriParameters(window.location.href);
			// Configure mock server with a delay
			MockServer.config({
				autoRespond: true,
				autoRespondAfter: oUriParameters.get("serverDelay") || 500
			});
			// Simulate
			var sPath = sap.ui.require.toUrl("sap/ui/demo/walkthrough/localService");
			oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");
			// Start
			oMockServer.start();
		}
	};
});