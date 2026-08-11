package pctRevisaoExc01;
import java.util.Scanner;

public class Exercicio21 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double valorHora, salarioBruto, salarioLiquido;
        int aulas;
        double aliquota = 0;
        double parcela = 0;
        double desconto;

        System.out.print("Valor da hora: ");
        valorHora = sc.nextDouble();

        System.out.print("Número de aulas: ");
        aulas = sc.nextInt();

        salarioBruto = valorHora * aulas;

        if (salarioBruto <= 1621) {
            aliquota = 0.075;
        } else if (salarioBruto <= 2902.84) {
            aliquota = 0.09;
            parcela = 24.32;
        } else if (salarioBruto <= 4354.27) {
            aliquota = 0.12;
            parcela = 111.40;
        } else {
            aliquota = 0.14;
            parcela = 198.49;
        }

        desconto = (salarioBruto * aliquota) - parcela;
        salarioLiquido = salarioBruto - desconto;

        System.out.println("Salário Bruto: " + salarioBruto);
        System.out.println("Desconto: " + desconto);
        System.out.println("Salário Líquido: " + salarioLiquido);

        sc.close();
    }
}