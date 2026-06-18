sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.matrix.rap.gltallyrecon',
            componentId: 'ZC_GL_TALLY_RECONList',
            contextPath: '/ZC_GL_TALLY_RECON'
        },
        CustomPageDefinitions
    );
});