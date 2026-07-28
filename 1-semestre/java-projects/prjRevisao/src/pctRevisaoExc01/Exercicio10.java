package pctRevisaoExc01;
import java.util.Scanner;

public class Exercicio10 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double n1, n2, n3, media;

        System.out.print("Nota 1: ");
        n1 = sc.nextDouble();

        System.out.print("Nota 2: ");
        n2 = sc.nextDouble();

        System.out.print("Nota 3: ");
        n3 = sc.nextDouble();

        media = (n1 + n2 + n3) / 3;

        System.out.println("Média: " + media);

        sc.close();
    }
}