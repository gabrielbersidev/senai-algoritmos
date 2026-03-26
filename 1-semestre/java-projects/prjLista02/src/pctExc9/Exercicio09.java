package pctExc9;

import java.util.Scanner;

public class Exercicio09 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite um número: ");
        int num = scanner.nextInt();
        System.out.print("Digite outro número: ");
        int num2 = scanner.nextInt();
        
        if (num>num2) {
            System.out.println("O número " + num + " é maior que o número " + num2 + " ");
        } else {
            System.out.println("O número " + num2 + " é maior que o número " + num + " ");
        }

        scanner.close();
    }
}