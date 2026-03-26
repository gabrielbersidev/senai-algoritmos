package pctExc13;

import java.util.Scanner;

public class Exercicio13 {
    public static void main(String[] args) {
    	Scanner scanner = new Scanner(System.in);

    	System.out.print("Digite uma nota: ");
    	double nota = scanner.nextDouble();

    	if (nota >= 7) {
    	    System.out.println("Aprovado");
    	} else if (nota >= 5) {
    	    System.out.println("Recuperação");
    	} else {
    	    System.out.println("Reprovado");
    	}

    	scanner.close();
    }
}