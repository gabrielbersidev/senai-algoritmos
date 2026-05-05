package pctExc05;

import java.util.Arrays;

public class Exercicio05 {
    public static void main(String[] args) {

        int[] vetor = {42, 23, 21, 98, 20};
        int[] vetorInvertido = new int[vetor.length];

        for (int i = 0; i < vetor.length; i++) {
            vetorInvertido[i] = vetor[vetor.length - 1 - i];
        }

        System.out.println("Valores originais:");
        System.out.println(Arrays.toString(vetor));

        System.out.println("\nValores invertidos:");
        System.out.println(Arrays.toString(vetorInvertido));
    }
}