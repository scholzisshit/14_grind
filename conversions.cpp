#include <bits/stdc++.h>
using namespace std;

class dis{
    int meter;
public:
    dis(int m){
        this ->meter = m;

    }
    operator int(){
        return meter;
    }
};


int main (){
    dis d = 10;
    int x =d;
    return 0;
}