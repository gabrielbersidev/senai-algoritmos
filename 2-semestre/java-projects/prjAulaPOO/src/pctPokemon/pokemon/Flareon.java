package pctPokemon.pokemon;

public class Flareon extends Pokemon {

    public Flareon() {
        super("Flareon", "Fogo", 0.9, 25.0);
    }

    @Override
    public void mostrarInformacoes() {
        super.mostrarInformacoes();
        System.out.println("Habilidade: Lança-Chamas");
        System.out.println("Descrição: Um Pokémon de fogo com alta temperatura corporal.");
    }
}