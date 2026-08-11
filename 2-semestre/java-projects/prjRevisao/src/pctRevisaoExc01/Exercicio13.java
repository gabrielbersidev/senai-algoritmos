package pctRevisaoExc01;
import java.util.Scanner;

public class Exercicio13 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String nome;
        int idade;

        System.out.print("Nome: ");
        nome = sc.nextLine();

        System.out.print("Idade: ");
        idade = sc.nextInt();

        System.out.println("Nome: " + nome);

        if (idade >= 18)
            System.out.println("Maior de idade");
        else
            System.out.println("Menor de idade");

        sc.close();
    }
}