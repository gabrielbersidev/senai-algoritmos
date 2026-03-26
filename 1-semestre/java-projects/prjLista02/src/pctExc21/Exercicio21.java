package pctExc21;

import java.util.Scanner;

public class Exercicio21 {
    public static void main(String[] args) {
    	Scanner scanner = new Scanner(System.in);

    	System.out.print("Digite sua idade: ");
    	int idade = scanner.nextInt();

    	if (idade >= 18 && idade < 70) {
    	    System.out.println("Pode tirar carteira");
    	} else {
    	    System.out.println("Não pode tirar carteira");
    	}
    	scanner.close();
    }
}