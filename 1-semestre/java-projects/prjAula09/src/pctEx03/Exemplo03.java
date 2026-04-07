package pctEx03;

public class Exemplo03 {
    public static void main(String[] args) {
        System.out.println("Tabuada do 5");
        
        int count = 1;

        while (true) {
            System.out.println("5 * " + count + " = " + (count * 5));

            if (count == 10) {
                break;
            }

            count++;
        }
    }
}