package pctExc04;

import java.util.Scanner;

public class Exercicio04 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite uma palavra qualquer para ser invertida: ");

        String userString = sc.nextLine();

        String userStringLower = userString.toLowerCase();

        String reverse = new StringBuilder(userStringLower).reverse().toString();
        
        System.out.println(reverse);
        sc.close();
    }
}