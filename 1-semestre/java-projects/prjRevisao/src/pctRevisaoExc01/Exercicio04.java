package pctRevisaoExc01;
import java.util.Scanner;


public class Exercicio04 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n1 = sc.nextInt();
        sc.close();

        System.out.println("O seu sucessor e antecessor são, respectivamente:");
        System.out.println(n1+1);
        System.out.println(n1-1);
        
    }
}
