package model;

public class Employee {
    
    private String employeeName;
    private String registration;
    private double wage;

    public Employee(String employeeName, String registration, double wage){
        this.employeeName = employeeName;
        this.registration = registration;
        this.wage = wage;
    }

    public void showData(){
        System.out.println("Nome do funcionário: " + employeeName);
        System.out.println("Matrícula: " + registration);
        System.out.println("Salário: " + wage);
    }
}
