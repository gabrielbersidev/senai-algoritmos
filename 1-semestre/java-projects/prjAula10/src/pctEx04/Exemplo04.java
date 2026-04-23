package pctEx04;

public class Exemplo04 {
    public static void main(String[] args) {

        // 1. indexOf
        String txt = "Por favor localize onde a palavra 'localize' ocorre !";
        System.out.println(txt.indexOf("localize"));

        // 2. Concatenação
        String firstname = "Gabriel";
        String lastname = "Bersi";

        System.out.println(firstname + " " + lastname);
        System.out.println(firstname.concat(lastname));

        // 3. Percorrendo a string
        String nome = "Bersi";

        for (int i = 0; i < nome.length(); i++) {
            System.out.println(nome.charAt(i));
        }
    }
}