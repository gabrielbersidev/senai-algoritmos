package pctExc15;

import java.util.Scanner;

public class Exercicio15 {
    public static void main(String[] args) {
    	Scanner scanner = new Scanner(System.in);

    	System.out.print("Digite uma temperatura: ");
    	double temp = scanner.nextDouble();

    	if (temp < 15) {
    	    System.out.println("Frio");
    	} else if (temp <= 25) {
    	    System.out.println("Agradável");
    	} else {
    	    System.out.println("Quente");
    	}

    	scanner.close();
    }
}