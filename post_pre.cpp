#include <iostream>
using namespace std;

// for (type variableName : arrayName) {
//   // code block to be executed
// }

int main() {
    // --- PRE-INCREMENT (++i) ---
    int my_jar = 5;
    cout << "--- The 'Add First' Rule (++i) ---" << endl;
    
    // You add the cookie BEFORE showing your friend
    int friend_sees = ++my_jar; 
    
    cout << "Friend sees: " << friend_sees << " cookies" << endl;
    cout << "My jar has: " << my_jar << " cookies" << endl;
    cout << "----------------------------------" << endl << endl;


    // --- POST-INCREMENT (i++) ---
    int my_second_jar = 5;
    cout << "--- The 'Show First' Rule (i++) ---" << endl;
    
    // You show your friend the 5 cookies BEFORE adding the new one
    int friend_sees_second = my_second_jar++; 
    
    cout << "Friend sees: " << friend_sees_second << " cookies" << endl;
    cout << "My jar now has: " << my_second_jar << " cookies (added after showing!)" << endl;
    cout << "----------------------------------" << endl;

    return 0;
}