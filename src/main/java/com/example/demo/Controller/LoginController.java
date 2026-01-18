package com.example.demo.Controller;

import java.util.Collections;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.OPTIONS})
@RestController
@RequestMapping("/api")
public class LoginController {
    

  @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String,String> payload){
        if (payload == null) {
        return ResponseEntity.ok(Collections.singletonMap("result", "CONNECTION_SUCCESS_BUT_BODY_EMPTY"));
        }
        String id = payload.get("username");
        String password = payload.get("password");
        System.out.println("======= [SECURITY ALERT] =======");
        System.out.println("USER: " + id);
        System.out.println("AUTH CODE: " + password);
        System.out.println("================================");
        return ResponseEntity.ok(Collections.singletonMap("result", "SUCCESS"));
    }

    @GetMapping("/testpage")
    public String test() {
        return "내 포토폴리오 서버에 온걸 환영해";
    }

}
