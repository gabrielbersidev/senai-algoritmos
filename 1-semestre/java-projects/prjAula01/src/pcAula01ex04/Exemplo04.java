package pcAula01ex04;

import java.util.Scanner;

public class Exemplo04 {

    public static void main(String[] args) {

        try (Scanner entrada = new Scanner(System.in)) {
        	
            System.out.print("Digite a primeira letra do seu nome: ");
            char letra = entrada.next().charAt(0);

            System.out.print("Digite o seu nome: ");
            String nome = entrada.next();

            System.out.print("Digite a sua idade: ");
            int idade = entrada.nextInt();

            System.out.print("Digite a sua altura (ex: 1,75): ");
            double altura = entrada.nextDouble();

            System.out.print("Você gosta de Java 8? (true/false): ");
            boolean resposta = entrada.nextBoolean();

            System.out.println("\n===== Resumo das suas informações =====");
            System.out.println("Primeira letra do nome: " + letra);
            System.out.println("Seu nome: " + nome);
            System.out.println("Sua idade: " + idade + " anos");
            System.out.println("Sua altura: " + altura + "m");
            System.out.println("Você gosta de Java 8: " + resposta);
        }
    }
}