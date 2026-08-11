package pctRevisaoExc01;
public class Exercicio17 {
    public static void main(String[] args) {

        double francisco = 1.10;
        double sara = 1.50;

        int anos = 0;

        while (francisco <= sara) {
            francisco += 0.03;
            sara += 0.02;
            anos++;
        }

        System.out.println("Anos necessários: " + anos);
    }
}