package pctExc23;

import java.util.Scanner;

public class Exercicio23 {
    public static void main(String[] args) {
    	Scanner scanner = new Scanner(System.in);

    	System.out.print("Digite sua idade: ");
    	int idade = scanner.nextInt();

    	if (idade >= 60 || idade < 10) {
    	    System.out.println("Pode usar atendimento prioritário");
    	} else {
    	    System.out.println("Não pode usar atendimento prioritário");
    	}
    	scanner.close();
    }
}