package pctEx01;

public class Exemplo01 {
    public static void main (String [] args){
        String s1 = "java";
        String s2 = "Java";
        String s3 ="Java";
        System.out.println("As duas Strings são iguais (fake/true? ");
        System.out.println(s1 == s2);
        System.out.println("As duas Strings são iguais a s1 e s3?");
        System.out.println(s1 == s3);

        System.out.println(s1.equalsIgnoreCase(s3));
    }
}


