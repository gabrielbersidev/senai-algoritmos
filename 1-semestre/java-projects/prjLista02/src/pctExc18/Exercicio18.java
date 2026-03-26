package pctExc18;

import java.util.Scanner;

public class Exercicio18 {
    public static void main(String[] args) {
    	Scanner scanner = new Scanner(System.in);

    	System.out.print("Digite um número: ");
    	int num = scanner.nextInt();
    	System.out.print("Digite um segundo número: ");
    	int num2 = scanner.nextInt();
    	
    	if (num == num2) {
    	    System.out.println("Seu primeiro número é igual ao seu segundo número");
    	    
    	} else if (num > num2) {
    		System.out.println("Seu primeiro número é maior	");
    	}
    	else {
    		System.out.println("Seu segundo número é maior");
    	}
    	scanner.close();
    }
}