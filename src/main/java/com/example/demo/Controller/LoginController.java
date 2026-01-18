package com.example.demo.Controller;

import java.util.Collections;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost")
@RestController
@RequestMapping("/api")
public class LoginController {
    

  @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String,String> payload){
        String id = payload.get("username");
        String password = payload.get("password");
        System.out.println("======= [SECURITY ALERT] =======");
        System.out.println("USER: " + id);
        System.out.println("AUTH CODE: " + password);
        System.out.println("================================");
        return ResponseEntity.ok(Collections.singletonMap("result", "SUCCESS"));
    }
    

}
