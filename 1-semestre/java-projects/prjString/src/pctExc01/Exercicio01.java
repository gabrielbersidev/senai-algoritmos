package pctExc01;

import java.util.Scanner;

public class Exercicio01 {
    public static void main(String[] args) {
        int numeroVogais = 0;

        Scanner sc = new Scanner(System.in);
        System.out.println("Digite uma string qualquer: ");

        String userString = sc.nextLine();

        int numeroCaracteres = userString.length();
        System.out.println("Número de caracteres: " + numeroCaracteres);

        String upperString = userString.toUpperCase();
        System.out.println("String em maiúsculo: " + upperString);

        for (int contador = 0; contador < numeroCaracteres; contador++){
            char caracteres = upperString.charAt(contador);

            if (caracteres == 'A' || caracteres == 'E' || caracteres == 'I' || caracteres == 'O' || caracteres == 'U'){
                numeroVogais++;
            }
        }

        System.out.println("Número de vogais: " + numeroVogais);
        sc.close();
    }
}