// variable = (condition) ? expressionTrue : expressionFalse;


// int time = 20;
// string result = (time < 18) ? "Good day." : "Good evening.";
// cout << result;


#include <iostream>
using namespace std;

int main (){

    int x;
    cout << "enter age:\n";
    cin >> x;
    string y = (x < 18) ? "young_b" : "og_b";
    cout << y;



    return 0;
}