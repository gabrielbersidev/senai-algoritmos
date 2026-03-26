package pctExc25;

import java.util.Scanner;

public class Exercicio25 {
    public static void main(String[] args) {
    	Scanner scanner = new Scanner(System.in);

    	int num = scanner.nextInt();

    	if (!(num == 0)) {
    	    System.out.println("Número diferente de zero");
    	} else {
    	    System.out.println("Número igual a zero");
    	}
    	scanner.close();
    }
}	