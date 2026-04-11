#include <bits/stdc++.h>
using namespace std;
class rect{
    public:
    int l,b;
    rect(int l,int b){
        this-> l=l;
        this-> b=b;
    }
};




int main(){
    rect r1(10,20);
    cout<<r1.l<<endl;
    cout<<r1.b<<endl;
}