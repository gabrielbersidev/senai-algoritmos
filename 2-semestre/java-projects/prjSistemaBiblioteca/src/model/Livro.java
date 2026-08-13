package model;

public class Livro {
    
    private String title;
    private String author;
    private int availableQuantity;

    public Livro(String title, String author, int availableQuantity){
        this.title = title;
        this.author = author;
        this.availableQuantity = availableQuantity;
    }
    //

    public String getTitle(){
        return title;
    }

    public String getAuthor(){
        return author;
    }

    public int getAvailableQuantity(){
        return availableQuantity;
    }

    // 
    public void showInfo(){
        System.out.println("Nome do Livro: " + title);
        System.out.println("Nome do Autor: " + author);
        System.out.println("Quantidade disponível "+ availableQuantity);
    }

    //

    public void toLoan(int quantity){
        if(quantity<=availableQuantity){
            availableQuantity = availableQuantity - quantity;
            System.out.println("O Livro foi emprestado com sucesso, prazo de devolução: 15d");
            showInfo();
        } else{
            System.out.println("Livro Esgotado! Não foi possível emprestar, procure uma outra unidade ou um outro livro que atenda ao seu desejo.");
        }
    }
}
