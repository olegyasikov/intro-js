# JS Scoping exercises
​
1. What’s the result of executing this code and why.
  ```js
  function test()
  {
     console.log(a);
     console.log(foo());
     
     var a = 1;
     function foo() 
     {
        return 2;
     }
  }
  
  test();
  ```
​
> _undefined, 2_  
> _undefined, 2_
​
​
2. What is result?
  ```js
  var a = 1; 
  
  function someFunction(number) 
  {
    function otherFunction(input) 
    {
      return a;
    }
    
    a = 5;
    
    return otherFunction;
  }
  
  var firstResult = someFunction(9);
  var result = firstResult(2);
  ```
> _Nada, no hay ninguna impresión de pantalla._  
> _Nada_
​
​
3. What is the result of the following code? Explain your answer.
  ```js
  var a = 1
  function foo() 
  {
    var a = 2;
​
    function bar() 
    {
      console.log( a );
    }
​
    return bar;
  }
  var baz = foo();
  baz();
  ``` 
> _2_  
> _2, a=1 está fuera del scope de la función bar(), var baz = foo(), por eso cuando se escribe baz() se llama a la función foo() la cual tiene dentro otra función bar() que imprime el valor de a, el cual está declarado com var a = 2 y esta sí está dentro del scope._
​
​
4. What will you see in the console for the following example?
  ```js
  var a = 1; 
  function b()
  { 
      a = 10; 
      return; 
      function a()
      {

      } 
  } 
  b(); 
  ```
​
> _Nada_  
> _Nada_