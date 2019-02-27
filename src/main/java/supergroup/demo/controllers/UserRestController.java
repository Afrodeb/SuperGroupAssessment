/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package supergroup.demo.controllers;

import java.util.ArrayList;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import supergroup.demo.models.LoginResponse;
import supergroup.demo.models.User;

/**
 *
 * @author afrodeb
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class UserRestController {
    @PostMapping(value = "/user/login")
    public List<LoginResponse> login(@RequestBody User user) {
        List result=new ArrayList<String>();
        try {
            User _user=new User(user.getEmail(),user.getPassword());
            result.add(new LoginResponse(_user.login()));
            //return _user.login();
        } catch (Exception ex) {
            ex.printStackTrace();
            //return "Error Occured";
        }
        return result;
    }
    
    
}
