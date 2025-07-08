// ABSTRACTION

public abstract class Authentication {
    public abstract String Login(String username, String password);
    public abstract void Logout();
    public abstract String register(String username, String password, String email);
}

// First implementation with email and password authentication
public class EmailPasswordAuthrntication extends Authentication{
    @Override
    public String Login(String username, String password){
        String token = "ayre5u89uw4jloisjrf8yu084w]hruhjisrj9u8tu8795904i94kmdfrk";
        System.out.println("Login Successful");
        return token;
    };

    @Override
    public void Logout(){
        System.out.println("Logout Successful");
    }

    @Override
    public String register(String username, String password, String email) {
        String token = "jhiureyd987y948wui3weius3-9ir0of23wiehou8y48rwy4w8iq2hrdji";
        System.out.println("Registration Successful");
        return token;
    }

}

// Second implementation google authentication
public class GoogleAuth extends Authentication{
    
}