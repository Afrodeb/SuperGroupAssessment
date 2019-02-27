/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package supergroup.demo.models;

/**
 *
 * @author afrodeb
 */
public class LoginResponse {
    
     private String text;

    public LoginResponse(String text) {
        this.text = text;
    }   
    
    public String getText(){
    return text;
    }
    
    public void setText(String text){
    this.text=text;
    }
    
    
}
