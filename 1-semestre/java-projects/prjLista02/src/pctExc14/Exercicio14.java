package pctExc14;

import java.util.Scanner;

public class Exercicio14 {
    public static void main(String[] args) {
    	Scanner scanner = new Scanner(System.in);

    	System.out.print("Digite um numero: ");
    	double num = scanner.nextDouble();

    	if (num == 0) {
    	    System.out.println("Zero");
    	} else if (num > 0) {
    	    System.out.println("Positivo");
    	} else {
    	    System.out.println("Negativo");
    	}

    	scanner.close();
    }
}