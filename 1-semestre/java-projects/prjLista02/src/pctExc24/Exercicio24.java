package pctExc24;

import java.util.Scanner;

public class Exercicio24 {
    public static void main(String[] args) {
    	Scanner scanner = new Scanner(System.in);

    	System.out.print("Digite um número para descobrir se é especial ou não: ");
    	int num1 = scanner.nextInt();

    	if (num1 == 10 || num1 == 20) {
    	    System.out.println("Seu número é especial");
    	}else {
    	    System.out.println("Seu número não é especial");
    	}
    	scanner.close();
    }
}