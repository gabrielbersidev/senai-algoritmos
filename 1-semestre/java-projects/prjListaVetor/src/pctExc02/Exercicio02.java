package pctExc02;

public class Exercicio02 {
    public static void main(String[] args) {

        int[] vetor = {3, 6, 9, 12, 15};
        int somaVetor = 0;

        for (int i = 0; i < vetor.length; i++) {
            System.out.println("Números antes da soma:");
            System.err.println("Posicao " + (i+1) + ": " + vetor[i]);
        }

        for (int i = 0; i < vetor.length; i++) {
            somaVetor = somaVetor+vetor[i];
        }

        System.out.println("\nSoma dos elementos: " + somaVetor);
    }
}