package pctExc20;

import java.util.Scanner;

public class Exercicio20 {
    public static void main(String[] args) {
    	Scanner scanner = new Scanner(System.in);

    	System.out.print("Digite sua idade: ");
    	int idade = scanner.nextInt();
    	
    	if (idade < 18) {
    	    System.out.println("Menor de idade");
    	} else if (idade < 65) {
    	    System.out.println("Maior de idade");
    	} else {
    	    System.out.println("Maior de idade e pode se aposentar");
    	}
    	scanner.close();
    }
}