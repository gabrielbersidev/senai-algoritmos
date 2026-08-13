package model;

public class LivroDigital extends Livro {

    private double fileSizeMB;

    public LivroDigital(String title, String author, int availableQuantity, double fileSizeMB) {
        super(title, author, availableQuantity);
        this.fileSizeMB = fileSizeMB;
    }

    
    @Override
    public void showInfo() {
        super.showInfo();
        System.out.println("Tamanho Livro digital: " + fileSizeMB);
    }
}
