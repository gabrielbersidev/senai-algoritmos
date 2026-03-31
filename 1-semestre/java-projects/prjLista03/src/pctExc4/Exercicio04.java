package pctExc4;


import java.util.Scanner;

public class Exercicio04 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Prato
        System.out.println("Escolha o prato:");
        System.out.println("1 - Vegetariano");
        System.out.println("2 - Peixe");
        System.out.println("3 - Frango");
        System.out.println("4 - Carne");
        int prato = sc.nextInt();
        sc.close();
        int calPrato = 0;
        switch (prato) {
            case 1: calPrato = 180; break;
            case 2: calPrato = 230; break;
            case 3: calPrato = 250; break;
            case 4: calPrato = 350; break;
            default: System.out.println("Opção inválida!"); return;
        }

        // Sobremesa
        System.out.println("Escolha a sobremesa:");
        System.out.println("1 - Abacaxi");
        System.out.println("2 - Sorvete diet");
        System.out.println("3 - Mouse diet");
        System.out.println("4 - Mouse chocolate");
        int sobremesa = sc.nextInt();
        sc.close();
        int calSobremesa = 0;
        switch (sobremesa) {
            case 1: calSobremesa = 75; break;
            case 2: calSobremesa = 110; break;
            case 3: calSobremesa = 170; break;
            case 4: calSobremesa = 200; break;
            default: System.out.println("Opção inválida!"); return;
        }

        // Bebida
        System.out.println("Escolha a bebida:");
        System.out.println("1 - Chá");
        System.out.println("2 - Suco de laranja");
        System.out.println("3 - Suco de melão");
        System.out.println("4 - Refrigerante diet");
        int bebida = sc.nextInt();
        sc.close();
        int calBebida = 0;
        switch (bebida) {
            case 1: calBebida = 20; break;
            case 2: calBebida = 70; break;
            case 3: calBebida = 100; break;
            case 4: calBebida = 65; break;
            default: System.out.println("Opção inválida!"); return;
        }
       
        int totalCalorias = calPrato + calSobremesa + calBebida;
        System.out.println("Total de calorias da refeição: " + totalCalorias + " cal");
    }
}