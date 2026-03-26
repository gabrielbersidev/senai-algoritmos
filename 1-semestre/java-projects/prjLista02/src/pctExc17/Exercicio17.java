package pctExc17;

import java.util.Scanner;

public class Exercicio17 {
    public static void main(String[] args) {
    	Scanner scanner = new Scanner(System.in);

    	System.out.print("Digite um número: ");
    	int idade = scanner.nextInt();

    	if (idade >= 18) {
    	    System.out.println("Seu número é maior ou igual a 18");
    	    
    	    if (idade > 60) {
    	        System.out.println("e maior que 60");
    	    }

    	} else {
    		System.out.println("Seu número é menor que 18");
    	}
    	scanner.close();
    }
}