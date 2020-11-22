const c = `#include<stdio.h>

int main() {
    printf("Hello World");
    return 0;
}
`

const cpp = `#include<iostream.h>
using namespace std;

int main() {
    cout << "Hello World";
    return 0;
}
`
const python = `print("Hello World")`

const javascript =`console.log("Hello World");`

const java =`class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
    }
}`

export default {c, cpp,python,javascript,java}