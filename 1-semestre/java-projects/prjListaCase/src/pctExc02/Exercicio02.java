package pctExc02;

import java.util.Scanner;

public class Exercicio02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String option;
        int amount;
        double priceHamb = 15;
        double pricePiz = 20;
        double priceRefrg = 5;
        double finalPrice = 0;
        double discount;
        double finalWithDiscount;

        System.out.println("MENU Lanchonete");
        System.out.println("A - Hambúrguer (R$15)");
        System.out.println("B - Pizza (R$20)");
        System.out.println("C - Refrigerante (R$5)");
        System.out.println("");


        System.out.print("Escolha uma opção: ");
        option = scanner.next();
        System.out.println("");

        System.out.print("Digite a quantidade: ");
        amount = scanner.nextInt();
        System.out.println("");

        switch (option.toUpperCase()) {
            case "A":
                finalPrice = priceHamb * amount;
                break;
            case "B":
                finalPrice = pricePiz * amount;
                break;
            case "C":
                finalPrice = priceRefrg * amount;
                break;
            default:
                System.out.println("Opção inválida");
                scanner.close();
                return;
        }
        if (amount>3) {
            discount = (finalPrice / 100) * 10;

            finalWithDiscount = finalPrice - discount;
            System.out.println("Valor sem desconto: R$ " + finalPrice);
            System.out.println("Desconto (10%): R$ " + discount);
            System.out.println("Valor com desconto: R$ " + finalWithDiscount);

        } else {
        	System.out.println("Valor final da sua compra: R$" + finalPrice);
        }

        scanner.close();
    }
}