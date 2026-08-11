package pctRevisaoExc01;
import java.util.Scanner;

public class Exercicio08 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a, b, c, aux;

        System.out.print("Primeiro valor: ");
        a = sc.nextInt();

        System.out.print("Segundo valor: ");
        b = sc.nextInt();

        System.out.print("Terceiro valor: ");
        c = sc.nextInt();

        if (a < b) {
            aux = a;
            a = b;
            b = aux;
        }

        if (a < c) {
            aux = a;
            a = c;
            c = aux;
        }

        if (b < c) {
            aux = b;
            b = c;
            c = aux;
        }

        System.out.println(a);
        System.out.println(b);
        System.out.println(c);

        sc.close();
    }
}