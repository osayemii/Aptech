class First{
    public static void main(String[] args) {
        // EXPLORING ESCAPE SEQUENCES
        // NEW LINE
        printSessionTitle("NEW LINE");
        printThis("Hello World!\nWelcome to Java Programming!");

        // TAB
        printSessionTitle("TAB");
        printThis("Name:\tJohn Doe\nAge:\t25\nCountry:\tUSA");

        // DOUBLE QUOTES
        printSessionTitle("DOUBLE QUOTES");
        // printThis("She said, \"Hello, World!\😊😊 with a smile")
        printThis("She said, \"Hello, World!😊\" with a smile");
    }
        
    static void printThis(String message){
        System.out.println(message);
    }
    static void printSessionTitle(String title){
        System.out.println( title + "\n________________________________");
    }
}