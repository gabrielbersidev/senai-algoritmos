package pctExc3;

import java.util.Scanner;

public class Exercicio03	 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Digite um número: ");
        int numero = scanner.nextInt();
        
        if (numero < 100) {
            System.out.println("O número " + numero + " é menor que 100.");
        } else {
            System.out.println("O número " + numero + " não é menor que 100.");
        }
        
        scanner.close();
    }
}
