package pctRevisaoExc01;

import java.util.Scanner;

public class Exercicio07 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        boolean a, b;

        System.out.print("Primeiro valor (true/false): ");
        a = sc.nextBoolean();

        System.out.print("Segundo valor (true/false): ");
        b = sc.nextBoolean();

        if (a && b) {
            System.out.println("Ambos são VERDADEIROS");
        } else if (!a && !b) {
            System.out.println("Ambos são FALSOS");
        } else {
            System.out.println("Um é verdadeiro e o outro é falso");
        }

        sc.close();
    }
}