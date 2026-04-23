package pctExc02;

import java.util.Scanner;

public class Exercicio02 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite uma string qualquer: ");

        String userString = sc.nextLine();

        String userStringLower = userString.toLowerCase();

        String reverse = new StringBuilder(userStringLower).reverse().toString();

        if (userStringLower.equals(reverse)) {
            System.out.println("É um palíndromo!");
        } else {
            System.out.println("Não é um palíndromo.");
        }

        sc.close();
    }
}