package pctRevisaoExc01;

import java.util.Scanner;

public class Exercicio06 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double valor;

        System.out.print("Digite um valor: ");
        valor = sc.nextDouble();

        double reajuste = ((valor/100)*5);

        System.out.println("Valor com reajuste de 5%: R$ " + reajuste);

        sc.close();
    }
}