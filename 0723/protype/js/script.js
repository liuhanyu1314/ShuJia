/* 2015.07.23 By Azunia */

// protype

function Person(name,gender){
    this.name = name;
    this.gender = gender;
    this.whoAreYou = function(){
        var res = "I'm" + this.name +"and I'm a"+this.gender;
        return res;// = console.log(res);
    };
}

// 以上在由 Person 创建的对象便有了下面几个属性

Person.prototype.age = 24;
Person.prototype.getAge = function(){
    return this.age;
};

flag = true;

if(flag)
{
    var fun = new Person('Azunia','female');
    console.log(fun,name);
    console.log(fun,gender);
    console.log(fun,whoAreYou());
    console.log(fun,getAge());
}

Person.prototype.salary = 10000;
Person.prototype.getSalary = function(){
    return this.name + "can earn about" + this.salary + "RMB each month";
};

/* 下面就是最神奇的地方
 *  对于 Person 的 prototype 方法或者属性
 *  我们可以 动态的 增加，而由其创建的对象会
 *  自动  继承   相关属性或方法
 */


if (flag)
{
    console.log(fun,getSalary());
    console.log(fun,constructor.prototype.age); // = Person.prototype.age
    console.log(Person.prototype.age);
}






































































































