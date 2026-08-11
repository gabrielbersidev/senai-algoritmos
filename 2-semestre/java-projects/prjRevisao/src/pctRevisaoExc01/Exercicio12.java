package pctRevisaoExc01;
import java.util.Scanner;

public class Exercicio12 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double valor;
        int opcao;

        System.out.print("Valor do produto: ");
        valor = sc.nextDouble();

        System.out.println("1 - Pix");
        System.out.println("2 - Cartão a vista");
        System.out.println("3 - Cartão 2xx");
        System.out.println("4 - Cartão 3x ou mais");

        opcao = sc.nextInt();

        if (opcao == 1)
            valor = (valor/100)*15;
        else if (opcao == 2)
            valor = (valor/100)*10;
        else if (opcao == 4)
            valor = (valor/100)*10;

        System.out.println("Valor final: " + valor);

        sc.close();
    }
}