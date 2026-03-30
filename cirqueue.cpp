#include <bits/stdc++.h>
using namespace std;

class CQ{
    int * arr;
    int front,rear,maxSize,currentSize;

    public:
    // constructor parametrised

    CQ (int size){
        maxSize = size;
        arr = new int [maxSize];
        front = 0, rear = -1;currentSize = 0;
        //why front = 0 and and not -1 like we used to?


    }

    void enqueue(int data){
        if(currentSize == maxSize){
            cout<<"full"<<endl;
            return;
        }


    }

    void dequeue(){
        if (currentSize == 0){
            cout <<"empty queue"<<endl;
            return;
        }
        front = (front+1)%maxSize;
        currentSize--;
    }


    int getFront(){
        if(currentSize == 0){
            return -1;
        }
        return arr[front];
    }

    bool isEmpty(){
        return currentSize == 0;

    }





};



int main(){
    CQ q(3);

    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    q.enqueue(40);
    
    q.dequeue();
    q.enqueue(40);

    while (!q.isEmpty()){
        cout <<q.getFront()<<" ";
        q.dequeue();

        cout <<endl;
        return 0;
    }


}