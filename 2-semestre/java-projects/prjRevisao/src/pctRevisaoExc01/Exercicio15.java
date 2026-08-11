package pctRevisaoExc01;
import java.util.Scanner;

public class Exercicio15 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double a, b, c;

        System.out.print("Lado 1: ");
        a = sc.nextDouble();

        System.out.print("Lado 2: ");
        b = sc.nextDouble();

        System.out.print("Lado 3: ");
        c = sc.nextDouble();

        if (a < b + c && b < a + c && c < a + b) {

            if (a == b && b == c)
                System.out.println("Equilátero");
            else if (a == b || a == c || b == c)
                System.out.println("Isósceles");
            else
                System.out.println("Escaleno");

        } else {
            System.out.println("Não forma um triângulo");
        }

        sc.close();
    }
}