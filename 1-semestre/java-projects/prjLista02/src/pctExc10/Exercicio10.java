package pctExc10;

import java.util.Scanner;

public class Exercicio10 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite a nota do aluno: ");
        double num = scanner.nextDouble();
        
        if (num>=7) {
            System.out.println("O aluno está aprovado ");
        } else {
            System.out.println("O aluno está reprovado ");
        }

        scanner.close();
    }
}