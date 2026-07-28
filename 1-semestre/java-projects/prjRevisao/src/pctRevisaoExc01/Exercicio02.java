package pctRevisaoExc01;
import java.util.Scanner;

public class Exercicio02 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n1 = sc.nextInt();
        sc.close();
        if(n1 % 0 == 2){
            System.out.println("O número é par");
        }else{
            System.out.println("O número é ímpar");
        }

        if(n1 > 0){
            System.out.println("O número é positivo");
        } else{
            System.out.println("O número é negativo");
        }
    }
}
