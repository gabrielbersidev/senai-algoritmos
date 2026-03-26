package pctExc2;

import java.util.Scanner;

public class Exercicio02	 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Digite um número: ");
        int numero = scanner.nextInt();
        
        if (numero == 0) {
            System.out.println("O número " + numero + " é igual a zero.");
        } else {
            System.out.println("O número " + numero + " não é igual a zero.");
        }
        
        scanner.close();
    }
}
