package pctExc1;

import java.util.Scanner;

public class Exercicio01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Digite um número: ");
        int numero = scanner.nextInt();
        
        if (numero > 20) {
            System.out.println("O número " + numero + " é maior que 20.");
        } else {
            System.out.println("O número " + numero + " não é maior que 20.");
        }
        
        scanner.close();
    }
}
