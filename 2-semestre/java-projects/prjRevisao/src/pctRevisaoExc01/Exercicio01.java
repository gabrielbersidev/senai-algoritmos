package pctRevisaoExc01;

import java.util.Scanner;

public class Exercicio01 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int A, B, C;

        System.out.print("A: ");
        A = sc.nextInt();

        System.out.print("B: ");
        B = sc.nextInt();

        System.out.print("C: ");
        C = sc.nextInt();

        int soma = A + B;

        System.out.println("Soma = " + soma);

        if (soma < C) {
            System.out.println("A soma é menor que C.");
        } else {
            System.out.println("A soma não é menor que C.");
        }

        sc.close();
    }
}