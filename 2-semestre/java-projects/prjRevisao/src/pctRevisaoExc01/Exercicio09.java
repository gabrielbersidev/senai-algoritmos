package pctRevisaoExc01;
import java.util.Scanner;

public class Exercicio09 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double peso, altura, imc;

        System.out.print("Peso: ");
        peso = sc.nextDouble();

        System.out.print("Altura: ");
        altura = sc.nextDouble();

        imc = peso / (altura * altura);

        System.out.println("IMC: " + imc);

        if (imc < 18.5)
            System.out.println("Abaixo do peso");
        else if (imc < 25)
            System.out.println("Peso ideal");
        else if (imc < 30)
            System.out.println("Levemente acima do peso");
        else if (imc < 35)
            System.out.println("Obesidade grau I");
        else if (imc < 40)
            System.out.println("Obesidade grau II");
        else
            System.out.println("Obesidade grau III");

        sc.close();
    }
}