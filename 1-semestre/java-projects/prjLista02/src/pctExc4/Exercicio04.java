package pctExc4;

import java.util.Scanner;

public class Exercicio04 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Digite a sua idade: ");
        int idade = scanner.nextInt();
        
        if (idade >= 60) {
            System.out.println("Sua idade " + idade+ " é maior ou igual a 60.");
        } else {
            System.out.println("O número " + idade + " não é maior ou igual que 60.");
        }

        scanner.close();
    }
}
