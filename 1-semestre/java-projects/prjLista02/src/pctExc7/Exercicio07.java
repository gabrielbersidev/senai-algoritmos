package pctExc7;

import java.util.Scanner;

public class Exercicio07 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Digite a sua idade: ");
        int idade = scanner.nextInt();
        
        if (idade > 17) {
            System.out.println("Sua idade é de " + idade+ "anos, então é maior de idade.");
        } else {
            System.out.println("Sua idade é de " + idade+ "anos, então é menor de idade.");
        }

        scanner.close();
    }
}
