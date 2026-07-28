package pctRevisaoExc01;
import java.util.Scanner;

public class Exercicio03 {
    public static void main(String [] args){
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        System.out.println("\n");
        int b = sc.nextInt();
        System.out.println("\n");

        sc.close();
        int c = (a+b);
        if(a == b){
            System.out.println("O resultado da soma entre n1 e n2, por serem iguais:");
            System.out.println(c);
        }else{
            c = a*b;
            System.out.println("O resultado da multiplicação entre n1 e n2, por serem diferentes:");
            System.out.println(c);
        }
    }
}
