package pctRevisaoExc01;
import java.util.Scanner;

public class Exercicio11 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String nome;
        double n1, n2, n3, n4, media;

        System.out.print("Nome: ");
        nome = sc.nextLine();

        System.out.print("Nota 1: ");
        n1 = sc.nextDouble();

        System.out.print("Nota 2: ");
        n2 = sc.nextDouble();

        System.out.print("Nota 3: ");
        n3 = sc.nextDouble();

        System.out.print("Nota 4: ");
        n4 = sc.nextDouble();

        media = (n1 + n2 + n3 + n4) / 4;

        System.out.println("Aluno: " + nome);
        System.out.println("Média: " + media);

        if (media >= 7)
            System.out.println("Aprovado");
        else
            System.out.println("Reprovado");

        sc.close();
    }
}