import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
public class Main {
    public static void main(String args[]){
        Blockchains myBlockchain = new Blockchains(2);

        myBlockchain.addBlock(new Block("First block data", myBlockchain.chain.get(myBlockchain.chain.size() - 1).hash));
        myBlockchain.addBlock(new Block("Second block data", myBlockchain.chain.get(myBlockchain.chain.size() - 1).hash));
        myBlockchain.addBlock(new Block("Third block data ", myBlockchain.chain.get(myBlockchain.chain.size() - 1).hash));

        System.out.println("Blockchain is Valid: " + myBlockchain.isChainValid());

        // Display the blockchain
        int c=0;
        for (Block block : myBlockchain.chain) {
            c++;
            System.out.println("BlocK"+c+":"+ new GsonBuilder().setPrettyPrinting().create().toJson(block));
        }
    }
}
