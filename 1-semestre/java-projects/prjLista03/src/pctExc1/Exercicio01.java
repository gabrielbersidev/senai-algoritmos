package pctExc1;

import java.util.Scanner;

public class Exercicio01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);	

        System.out.println("Digite um número abaixo:");
        
        int num1 = scanner.nextInt();
        boolean isBoolean = false;

        if (num1 % 10 == 0) {
            System.out.println("Seu número é divisível por 10.");
            isBoolean = true;
        }
        if (num1 % 5 == 0) {
            System.out.println("Seu número é divisível por 5.");
            isBoolean = true;
        }
        if (num1 % 2 == 0) {
            System.out.println("Seu número é divisível por 2.");
            isBoolean = true;
        }
        if (!isBoolean){
            System.out.println("Seu número não é divisível por 5, 10 e 20");
        }
        scanner.close();
    }
}