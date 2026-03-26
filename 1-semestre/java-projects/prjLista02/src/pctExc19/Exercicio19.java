package pctExc19;

import java.util.Scanner;

public class Exercicio19 {
    public static void main(String[] args) {
    	Scanner scanner = new Scanner(System.in);

    	System.out.print("Digite sua nota: ");
    	double num = scanner.nextDouble();
    	
    	if (num >= 7) {
    	    System.out.println("Você foi aprovado!");
    	    if(num>=9) {
    	    	System.out.println("Excelente!");
    	    }
    	}
    	else {
    		System.out.println("Você foi reprovado!");
    	}
    	scanner.close();
    }
}