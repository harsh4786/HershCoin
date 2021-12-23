import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { Hershcoin } from '../target/types/hershcoin';

describe('Hershcoin', () => {
    const provider = anchor.Provider.local();
    anchor.setProvider(provider);
    const program = anchor.Program.Hershcoin;
  
    let mint = null;
    let from = null;
    let to = null;
  
    it("Initializes test state", async () => {
  
    });
  
    it("Mints a token", async () => {
  
    });
  
    it("Transfers a token", async () => {
  
    });
  
    it("Burns a token", async () => {
  
    });
  
    it("Set new mint authority", async () => {
  
    });
    
  });
  
  
});
