package pctRevisaoExc01;
import java.util.Scanner;

public class Exercicio20 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a, b;

        System.out.print("A: ");
        a = sc.nextInt();

        System.out.print("B: ");
        b = sc.nextInt();

        System.out.println("Quociente: " + (a / b));
        System.out.println("Resto: " + (a % b));

        sc.close();
    }
}