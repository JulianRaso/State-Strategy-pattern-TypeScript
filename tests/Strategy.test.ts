import { expect } from 'chai';
import Strategy from '../src/Strategy';

describe('Traslado', function() {
    it('Auto', function() {
        let result = Strategy.traslado(60,10);
        expect(result).equal("Auto");
});
});

describe('Traslado', function() {
    it('Colectivo', function() {
        let result = Strategy.traslado(15,35);
        expect(result).equal("Colectivo");  
});
});

describe('Traslado', function() {
    it('Combi', function() {
        let result = Strategy.traslado(20,25);
        expect(result).equal("Combi");   
    }); 
});

describe('Traslado', function() {
    it('TiempAuto', function() {
        let result = Strategy.traslado(20,10);
        expect(result).equal("Auto");   
    }); 
});

describe('Traslado', function() {
    it('PrecioA', function() {
        let result = Strategy.traslado(60,15);
        expect(result).equal("Auto");   
    }); 
});


describe('Traslado', function() {
    it('ERROR', function() {
        let result = Strategy.traslado(1,1);
        expect(result).equal("Error");   
    }); 
});