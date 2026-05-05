package pctExc04;

import java.util.Arrays;

public class Exercicio04 {
    public static void main(String[] args) {
        int[] vetor = {192, 62313, 90, 1223, 156, 172, 902, 102};

        System.out.println("A array: "+ Arrays.toString(vetor));
        for (int i = 0; i < vetor.length; i++) {
            if((vetor[i] % 2) == 0){
                System.out.println("Posição " + (i+1) + ": " + "Par");
            } else {
                System.out.println("Posição " + (i+1) + ": " + "Impar");
            }
        }
    }
}
