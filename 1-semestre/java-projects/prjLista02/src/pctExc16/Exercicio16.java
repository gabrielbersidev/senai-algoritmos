package pctExc16;

import java.util.Scanner;

public class Exercicio16 {
    public static void main(String[] args) {
    	Scanner scanner = new Scanner(System.in);

    	System.out.print("Digite um número: ");
    	int num = scanner.nextInt();

    	if (num > 0) {
    	    System.out.println("Positivo");
    	    
    	    if (num > 50) {
    	        System.out.println("e maior que 50");
    	    }

    	} else if (num < 0) {
    	    System.out.println("Negativo");
    	} else {
    	    System.out.println("Zero");
    	}

    	scanner.close();
    }
}