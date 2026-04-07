package pctEx04;

import java.util.Scanner;

public class Exemplo05 {
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);

		char answer = 'S';

		while(answer != 'N') {
			System.out.println("Assistindo Netflix...");
			System.out.println("Quer assistir mais um episódio? (S/N)");
			answer = sc.next().charAt(0);
			sc.nextLine();
		}

		sc.close();
	}
}