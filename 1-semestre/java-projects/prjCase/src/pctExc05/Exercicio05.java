package pctExc05;

import java.util.Scanner;

public class Exercicio05 {
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Digite sua idade:");
		int age = sc.nextInt();
		String result = (age>=18)?"Pode dirigir.":"Não pode dirigir.";
		System.out.println(result);

		sc.close();
	}
}
