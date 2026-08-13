package model;

public class LivroFisico extends Livro {

    private String shelfLocation;

    public LivroFisico(String title, String author, int availableQuantity, String shelfLocation) {
        super(title, author, availableQuantity);
        this.shelfLocation = shelfLocation;
    }
    @Override
    public void showInfo() {
        super.showInfo();
        System.out.println("Localização na prateleira: " + shelfLocation);
    }
}
