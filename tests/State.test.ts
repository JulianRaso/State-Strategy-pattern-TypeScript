import { expect } from 'chai';
import states from '../src/States';

describe('Musica', function() {
    it('Reproducir', function() {
      let result = states.Estado("Play");
      expect(result).equal("Play");
    }); 
  });

describe('Musica', function() {
    it('RepetirComando', function() {
      let result = states.Estado("Play");
      expect(result).equal("Comando Repetido");
    }); 
});

describe('Musica', function() {
    it('Pausar', function() {
      let result = states.Estado("Play");
      result = states.Estado("Pausa");
      expect(result).equal("Pausa");
    }); 
});