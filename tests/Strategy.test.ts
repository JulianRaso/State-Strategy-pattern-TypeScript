import { expect } from 'chai';
import Strategy from '../src/Strategy';

describe('Trabajo', function() {
    it('Dos cumputadoras', function() {
        let result: number[] = [];

        for(let i=0; i<2; i++){
             result[i] = Strategy.empleado(i,i+1);
        }
        for(let i=0; i<=2; i++){
            expect(result[i]).equal(i);
        }
    }); 
  });
