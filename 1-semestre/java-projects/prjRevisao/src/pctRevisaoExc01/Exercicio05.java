package pctRevisaoExc01;

import java.util.Scanner;

public class Exercicio05 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double salarioMinimo = 1621.00;
        double salarioUsuario;

        System.out.print("Digite o seu salário: R$ ");
        salarioUsuario = sc.nextDouble();

        double quantidade = salarioUsuario / salarioMinimo;

        System.out.printf("Você recebe %.2f salários mínimos.%n", quantidade);

        sc.close();
    }
}