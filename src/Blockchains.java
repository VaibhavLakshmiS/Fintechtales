
    import java.util.ArrayList;

    public class Blockchains {
        public ArrayList<Block> chain;
        public int difficulty;

        public Blockchains(int difficulty) {
            this.chain = new ArrayList<Block>();
            this.difficulty = difficulty;

            // Create the first block (genesis block)
            Block genesisBlock = new Block("Genesis Block", "0");
            genesisBlock.mineBlock(this.difficulty);
            chain.add(genesisBlock);
        }

        // Add a new block to the chain
        public void addBlock(Block newBlock) {
            newBlock.previousHash = chain.get(chain.size() - 1).hash;
            newBlock.mineBlock(difficulty);
            chain.add(newBlock);
        }

        // Validate the blockchain
        public boolean isChainValid() {
            for (int i = 1; i < chain.size(); i++) {
                Block currentBlock = chain.get(i);
                Block previousBlock = chain.get(i - 1);

                // Compare registered hash and calculated hash
                if (!currentBlock.hash.equals(currentBlock.calculateHash())) {
                    return false;
                }

                // Compare previous hash and registered previous hash
                if (!previousBlock.hash.equals(currentBlock.previousHash)) {
                    return false;
                }
            }
            return true;
        }
    }

