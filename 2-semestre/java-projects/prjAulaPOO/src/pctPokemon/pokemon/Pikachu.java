package pctPokemon.pokemon;

public class Pikachu extends Pokemon {

    public Pikachu() {
        super("Pikachu", "Elétrico", 0.4, 6.0);
    }

    @Override
    public void mostrarInformacoes() {
        super.mostrarInformacoes();
        System.out.println("Habilidade: Choque do Trovão");
        System.out.println("Descrição: Um Pokémon elétrico muito ágil.");
    }
}