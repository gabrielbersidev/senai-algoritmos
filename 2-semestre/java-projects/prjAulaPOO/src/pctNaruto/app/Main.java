package app;

import model.Ninja;

public class Main {
    public static void main(String[] args) {

        Ninja naruto = new Ninja("Naruto", "Folha", 100);

        Ninja sasuke = new Ninja("Sasuke", "Folha", 80);

        naruto.showInfo();
        System.out.println();

        sasuke.showInfo();
        System.out.println();

        naruto.attack();
        sasuke.attack();
        System.out.println();

        naruto.setChakra(50);
        sasuke.setChakra(100);

        System.out.println("Chakra do Naruto: " + naruto.getChakra());
        System.out.println("Chakra do Sasuke: " + sasuke.getChakra());
    }
}