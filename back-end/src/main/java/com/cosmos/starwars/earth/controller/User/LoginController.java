package com.cosmos.starwars.earth.controller.User;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.*;

@RestController
@RequestMapping("/say")
public class LoginController {

 @GetMapping("/hello")
 public String sayHello(HttpServletResponse response){
  System.out.print("hello,world");
  response.addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  return "hello,world";
 }
}
