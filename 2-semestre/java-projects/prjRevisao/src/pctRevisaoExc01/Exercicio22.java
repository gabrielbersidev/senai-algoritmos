package pctRevisaoExc01;
import java.util.Scanner;

public class Exercicio22 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double tempo, velocidade, distancia, litros;

        System.out.print("Tempo: ");
        tempo = sc.nextDouble();

        System.out.print("Velocidade média: ");
        velocidade = sc.nextDouble();

        distancia = tempo * velocidade;
        litros = distancia / 12;

        System.out.println("Tempo: " + tempo);
        System.out.println("Velocidade Média: " + velocidade);
        System.out.println("Distância: " + distancia);
        System.out.println("Litros gastos: " + litros);

        sc.close();
    }
}