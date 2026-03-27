#include <iostream>
using namespace std;

int main(){

    int age = 0;

    cout << "enter age:\n";
    cin >>age;
    if (age < 19 && age == 19) {
        cout << "bitch is a teen\n";

    }

    else if (age > 19 && age < 65) {
        cout << "bitch is an unc\n";
        
    }

    else {
        cout << "bitch is an og\n";
    }

    return 0;
}

// & - looks at all conditions
//&& - stops if one is false