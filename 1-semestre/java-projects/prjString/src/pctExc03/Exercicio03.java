package pctExc03;

import java.util.Scanner;
// 3)Faça um programa que conte o numero de 1’s que aparecem em um string. Exemplo: “0011001” -> 3

public class Exercicio03 {
    public static void main(String[] args) {
        int numerosUm = 0;

        Scanner sc = new Scanner(System.in);
        System.out.println("Digite uma string de números qualquer: ");
        String userString = sc.nextLine();

        int numeroCaracteres = userString.length();
        System.out.println("Número de caracteres: " + numeroCaracteres);

        for (int contador = 0; contador < numeroCaracteres; contador++){
            char caracteres = userString.charAt(contador);

            if (caracteres == '1'){
                numerosUm++;
            }
        }

        System.out.println("Números de 1's: " + numerosUm);
        sc.close();
    }
}