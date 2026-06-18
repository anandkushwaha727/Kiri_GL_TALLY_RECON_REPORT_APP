sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/matrix/rap/gltallyrecon/test/integration/pages/ZC_GL_TALLY_RECONList",
	"com/matrix/rap/gltallyrecon/test/integration/pages/ZC_GL_TALLY_RECONObjectPage"
], function (JourneyRunner, ZC_GL_TALLY_RECONList, ZC_GL_TALLY_RECONObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/matrix/rap/gltallyrecon') + '/test/flp.html#app-preview',
        pages: {
			onTheZC_GL_TALLY_RECONList: ZC_GL_TALLY_RECONList,
			onTheZC_GL_TALLY_RECONObjectPage: ZC_GL_TALLY_RECONObjectPage
        },
        async: true
    });

    return runner;
});

