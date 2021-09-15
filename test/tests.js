let expect  = require("chai").expect;
let server = require('../server.js'); 

describe('Tests unitarios', function(){
    describe('Longitud correcta de la fecha completa:', function(){
        it('28:', function(done){
            let f = server.getFechaCompleta();
            expect(f.length).equal(28);
            done();
        });
    });

});
