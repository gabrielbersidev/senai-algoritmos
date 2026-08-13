package pctPokemon;
import pctPokemon.pokemon.Eevee;
import pctPokemon.pokemon.Flareon;
import pctPokemon.pokemon.Pikachu;

public class Main {

    public static void main(String[] args) {

        Pikachu pikachu = new Pikachu();
        Flareon flareon = new Flareon();
        Eevee eevee = new Eevee();

        System.out.println("=== Pikachu ===");
        pikachu.mostrarInformacoes();

        System.out.println("\n=== Flareon ===");
        flareon.mostrarInformacoes();

        System.out.println("\n=== Eevee ===");
        eevee.mostrarInformacoes();
    }
}