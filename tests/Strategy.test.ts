import { expect } from 'chai';
import Strategy from '../src/Strategy';

describe('Trabajo', function() {
    it('Dos cumputadoras', function() {
        const result : number[] = [];

        for(let i=0; i<3; i++){
             result[i] = Strategy.empleado(i,i+1);
        }
        for(let i=0; i<=3; i++){
            expect(result[i]).equal(i);
        }
    }); 
  });
