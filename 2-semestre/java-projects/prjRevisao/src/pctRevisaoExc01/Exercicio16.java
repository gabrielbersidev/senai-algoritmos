package pctRevisaoExc01;
import java.util.Scanner;

public class Exercicio16 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double f, c;

        System.out.print("Fahrenheit: ");
        f = sc.nextDouble();

        c = (5 * (f - 32)) / 9;

        System.out.println("Fahrenheit: " + f);
        System.out.println("Celsius: " + c);

        sc.close();
    }
}