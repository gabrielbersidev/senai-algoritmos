package pctExc5;

import java.util.Scanner;

public class Exercicio05 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Digite a temperatura de hoje: ");
        int temp = scanner.nextInt();
        
        if (temp >= 60) {
            System.out.println("A temperatura de  " + temp+ "graus é maior que 30 graus.");
        } else {
            System.out.println("A temperatura de " + temp + "graus não é maior que 30 graus.");
        }

        scanner.close();
    }
}
