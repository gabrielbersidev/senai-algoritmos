package pctExc01;

import java.util.Arrays;
import java.util.Scanner;

public class Exercicio01 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] vetor = new int[5];

        System.out.println("Digite 5 valores inteiros:");

        for (int i = 0; i < 5; i++) {
            System.out.print("Valor " + (i + 1) + ": ");
            vetor[i] = sc.nextInt();
        }

        System.out.println("\nValores digitados:");
        System.out.println(Arrays.toString(vetor));        
        sc.close();
    }
}