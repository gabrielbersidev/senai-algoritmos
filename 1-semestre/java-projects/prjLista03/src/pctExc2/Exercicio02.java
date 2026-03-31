package pctExc2;
import java.util.Scanner;

public class Exercicio02 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);	
        System.out.println("Bem-vindo ao cálculo de IMC!");

        System.out.println("Digite a altura do indivíduo (Exemplo: 1,80m):");
        double height = sc.nextDouble();
        System.out.println("Digite o peso do indivíduo (Exemplo: 60,5kg):");
        double weight = sc.nextDouble();

        sc.close();

        double imc = weight / (height * height);
        System.out.println("O IMC é: " + imc);

        if (imc<18.5){
            System.out.println("Indivíduo Abaixo do Peso.");
        } else if (imc>= 18.5 && imc<=25 ){
            System.out.println("Indíviduo com IMC Normal.");
        } else if (imc>= 25 && imc<=30 ){
            System.out.println("Indíviduo Sobrepeso.");
        }else if (imc>= 30 && imc<=40 ){
            System.out.println("Indíviduo em Obesidade.");
        }else if (imc>40){
            System.out.println("Indíviduo em estado de Obesidade Mórbida.");
        }
    }
}