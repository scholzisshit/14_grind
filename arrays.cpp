#include <iostream>
using namespace std;

int main(){

    string cars[5] = {"Volvo", "BMW", "Ford", "Mazda", "Tesla"};
    for (int i = 0; i < 5; i++) {
        cout << i << " = " << cars[i] << "\n";
    }
    
    int myNumbers[5] = {10, 20, 30, 40, 50};
    for (int i = 0; i < 5; i++) {
        cout << myNumbers[i] << "\n";
    }
int mun[5] ={10,20,30,40,50};
    for (int num : mun){
        cout << num << endl;
     



    cout << sizeof(myNumbers);
    return 0;

}