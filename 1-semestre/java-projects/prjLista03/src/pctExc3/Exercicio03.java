package pctExc3;
import java.util.Scanner;

public class Exercicio03 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Digite abaixo seu Saldo Médio para verificação de possível Crédito Especial aplicado:");
        double saldoMedio = sc.nextInt();

        if (saldoMedio<=500){
            System.out.println("Seu saldo médio foi de " + saldoMedio + "e não houve crédito especial");
        }
        if (saldoMedio>500 && saldoMedio<1001){
            double creditoEspecial = (saldoMedio/100)*30;
            double saldoMedioFinal = (saldoMedio+creditoEspecial);
            System.out.println("Seu saldo médio + acréscimo de crédito especial de 30%, resultou em R$" + saldoMedioFinal);
        }
        if (saldoMedio>1000 && saldoMedio<3001){
            double creditoEspecial = (saldoMedio/100)*40;
            double saldoMedioFinal = (saldoMedio+creditoEspecial);
            System.out.println("Seu saldo médio + acréscimo de crédito especial de 40%, resultou em R$" + saldoMedioFinal);

        }
        if (saldoMedio>3000){
            double creditoEspecial = (saldoMedio/100)*50;
            double saldoMedioFinal = (saldoMedio+creditoEspecial);
            System.out.println("Seu saldo médio + acréscimo de crédito especial de 50%, resultou em R$" + saldoMedioFinal);

        }

        sc.close();
    }
}
