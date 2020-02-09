package dv.CFMV.DAO;

import javax.persistence.Column;

public class ContactDAO {


    private String email;

    private String content;

    private String firstName;

    private String lastName;

    private String phoneNumber;

    public ContactDAO(){

    }

    public ContactDAO(String email, String content, String firstName, String lastName, String phoneNumber) {
        this.email = email;
        this.content = content;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
