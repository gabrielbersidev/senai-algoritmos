package app;
import model.Produto;

public class Main {
    public static void main(String[] args) {
        Produto produtoGenerico = new Produto(1, "T-Cross", 20, 124000);
        produtoGenerico.showInfo();
    }
}