#include <iostream.h>

class Harbivore{
    // Field
    protected: string plantType;
    // Constructor
    public: Harbivore(string pType){
        plantType = pType;
    }
}

class Carnivore {
    //Field
    protected: string animalType;
    // Constructor
    public: Carnivore(string aType) {
        animalType = aType;
    }
}

class Omnivore: public Harbivore, public Carnivore {
    public:
        aName;
    Omnivore(string aName, string pType, string, aType):Harbivore(pType), Carnivore(aType) {
            omnivoreName = oName;
    }
    void display(){
        cout<<"Omnivore name is: " + oName<<endl
        cout<<"Plants it eats: " + plantType<<endl
        cout<<"Animal it eats: " + animalType<<endl
    }
}

class Main{
    public int main(){
        Omnivore o1 = new Omnivore("Human", "Uguh", "");
    }
}