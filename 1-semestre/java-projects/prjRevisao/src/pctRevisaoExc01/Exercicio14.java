package pctRevisaoExc01;
import java.util.Scanner;

public class Exercicio14 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a, b, a1, b1;

        System.out.print("A: ");
        a = sc.nextInt();

        System.out.print("B: ");
        b = sc.nextInt();

        
        b1 = a;
        a1 = b;

        System.out.println("A = " + a1);
        System.out.println("B = " + b1);

        sc.close();
    }
}