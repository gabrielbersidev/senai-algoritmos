package pctExc22;

import java.util.Scanner;

public class Exercicio22 {
    public static void main(String[] args) {
    	Scanner scanner = new Scanner(System.in);

    	System.out.print("Digite sua nota: ");
    	double nota = scanner.nextDouble();
    	System.out.print("Digite sua frequência sem %: ");
    	int freq = scanner.nextInt();

    	if (nota >= 6 && freq >= 75) {
    	    System.out.println("Aprovado");
    	} else {
    	    System.out.println("Reprovado");
    	}
    	scanner.close();
    }
}