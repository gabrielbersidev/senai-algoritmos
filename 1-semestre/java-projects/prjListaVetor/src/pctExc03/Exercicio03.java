package pctExc03;

public class Exercicio03 {
    public static void main(String[] args) {
        int[] vetor = {19, 6, 90, 12, 15, 17};

        int maiorVetor = vetor[0];

        for (int i = 0; i < vetor.length; i++) {
            if(vetor[i] > maiorVetor){
                maiorVetor = vetor[i];
            }
        }
        System.out.println("O maior valor do vetor é: " + maiorVetor);
    }
}