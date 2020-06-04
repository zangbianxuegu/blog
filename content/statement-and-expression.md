---
title: 语句和表达式
date: 2019-08-09
page: post
paths:
  - /statement-and-expression
---

## 语句

**wiki 语句**

语句（计算机科学）：[https://en.wikipedia.org/wiki/Statement\_(computer_science)](<https://en.wikipedia.org/wiki/Statement_(computer_science)>)
​
语句是命令式编程语言的一个语法单元，表示程序要执行的操作。程序是有一个或多个语句序列，语句可能包含内部组件（例如表达式）。

语句决定了程序的外观，编程语言表现为它们使用的语句类型（例如花括号），许多语句由标识符 if、while 或者 repeat 引入，语句关键字是保留的。

大多数语言中，语句和表达式的区别在于，语句不返回结果，执行语句只是为了产生副作用，而表达式总是返回结果，而通常没有副作用。

在命令式编程语言中，Algol 68 是少数几种语句可以返回结果的语言之一。在混合了命令式和函数式风格的语言中，如 Lisp 家族，表达式和语句之间没有区别。在纯函数式编程中，没有语句，一切都是表达式。

这种区别经常表现为：执行语句，而计算表达式。这可以在某些语言中的 exec 和 eval 函数中找到：在 Python 中，exec 应用于语句，eval 应用于表达式。

## 表达式

**wiki 表达式**

表达式（数学）：[https://zh.wikipedia.org/wiki/%E8%A1%A8%E7%A4%BA%E5%BC%8F](https://zh.wikipedia.org/wiki/%E8%A1%A8%E7%A4%BA%E5%BC%8F)
​
表示式亦称表达式、运算式或数学表达式，在数学领域中是一些符号依据上下文的规则，有限而定义良好的组合。数学符号可用于标定数字（常量）、变量、操作、函数、括号、标点符号和分组，帮助确定操作顺序以及有其它考量的逻辑语法。

**范例：**

表达式的使用范围从简单的如下列各例：

![表达式范例](https://pic3.zhimg.com/v2-4855ddb31654bcef587d874427bffe5e_b.png)

表达式是一个句法结构，它必须具有良好定义的形式。表达式中的运算符必须在正确位置有正确的输入数，组成这些输入的字符必须是有效的，具有明确的运算次序等。违反语法规则的字符，不会构成有效的数学表达式。例如，在一般算术符号中，表达式 1 + 2 × 3 是形式良好的，但下面的表达式却没有：

> \*4)x+,/y.

**wiki 表达式**

表达式（计算机科学）：[https://en.wikipedia.org/wiki/Expression\_(computer_science)](<https://en.wikipedia.org/wiki/Expression_(computer_science)>)
​
表达式是一个或多个常量、变量、运算符和函数的组合，编程语言根据其特定的优先级和关联规则解释它们，并计算它们来生成另外一个值。这个过程，在数学表达式中被称为求值。

在简单设置中，得到的值通常是基本类型的一种，例如数字、字符串、布尔值、复杂数据类型或者其他。

关于语句和表达式的区别，说成是表达式有值而语句不总有没错，但是我也认为以下这种理解很好：

[在编程概念中，表达式和语句分别是什么概念？ - 唐朝稻草人的回答 - 知乎](https://www.zhihu.com/question/20750344/answer/487107831)

## JavaScript 中的语句与表达式

参考：[Expressions versus statements in JavaScript](https://2ality.com/2012/09/expressions-vs-statements.html)
​
表达式产生一个值，可以写在任何需要一个值的地方。而语句是一个行为，例如循环和条件语句，一个程序基本上就是一个语句序列。任何需要语句的地方，也可以写表达式，这样的语句是**表达式语句**。反过来却不行：你不能在需要表达式的时候使用语句，例如一个 if 语句不能作为函数的参数。

以下是一个 if 语句：

```javascript
var x
if (y >= 0) {
  x = y
} else {
  x = -y
}
```

等价于下面的表达式：

```javascript
var x = y >= 0 ? y : -y
```

`=`与`;`之间的代码就是一个表达式。

在 JavaScript 中，使用分号连接语句：

```javascript
foo()
bar()
```

在表达式中，使用逗号：

```javascript
foo(), bar()
```

逗号会计算两边的表达式并返回第二个表达式的结果：

```javascript
> "a", "b"
'b'

> var x = ("a", "b");
> x
'b'

> console.log(("a", "b"));
b
```

### 看似语句的表达式

#### 对象字面量和语句块

下面是一个对象字面量，可以生成一个对象的表达式

```javascript
{
  foo: bar(3, 5)
}
```

然而，它也是一个合法的语句，包含以下组件：

- 一个代码块：花括号内的语句
- 一个标签：语句的前缀 foo
- 一个语句：表达式语句 bar(3, 5)

JavaScript 拥有独立存在的代码块（而非循环或 if 语句的一部分）。例如：

```javascript
function test(printTwo) {
  printing: {
    console.log('One')
    if (!printTwo) break printing
    console.log('Two')
  }
  console.log('Three')
}
```

#### 函数表达式和函数声明

以下是函数表达式：

```javascript
function () { }
```

你可以给函数表达式一个名字使之变为命名函数表达式：

```javascript
function foo() {}
```

命名函数表达式和函数声明没有什么区别。但是它们的效果是不同的：一个函数表达式产生一个值（这个函数），而一个函数声明导致一个行为——创建一个变量，它的值是这个函数。**此外，一个函数表达式可以立即执行，函数声明不行。**

###### 解释

`function foo () {}`，是函数声明，不能执行 `function foo () {} ()`。`let foo = function () {}`，函数表达式 `function () {}` 也即是 `foo`，可以执行 `foo()`。

### 函数表达式和函数声明

#### 函数声明

[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function)
​
**函数声明**定义一个具有指定参数的函数。

语法：

```javascript
function name([param,[, param,[..., param]]]) {
  [statements]
}
```

`name`：函数名
`param`：要传递给函数的参数的名称。不同引擎中的最大参数数量不同。
`statements`：包含函数体的语句。

函数声明或被提升到被包含的函数或全局作用域顶部，可以在声明前使用：

```javascript
hoisted() // "foo"
function hoisted() {
  console.log('foo')
}

/* equal to*/
var hoisted
hoisted = function () {
  console.log('foo')
}
hoisted()
// "foo"
```

而函数表达式不会被提升：

```javascript
notHoisted() // TypeError: notHoisted is not a function
var notHoisted = function () {
  console.log('bar')
}
```

#### 函数表达式

[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/function](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/function)
​
语法：

```javascript
let function*expression = function [name]([param1[, param2[, ..., paramN]]]) {
  statements
};
```

`name`：函数名称。可被省略，此种情况下的函数是匿名函数（anonymous）。 函数名称只是函数体中的一个本地变量。
`paramN`：被传递给函数的一个参数名称。一个函数至多拥有 255 个参数。
`statements`：构成函数体的语句。

**从以上对比可以发现，函数表达式非常类似函数声明，唯一的区别就是函数名称可以省略，从而创建匿名函数。**

函数名称类似变量，会提升，不同的是，对于函数声明，变量（函数名称）会和变量赋值（函数体）一起提升，而变量不会，只提升变量声明。

以下是一个**命名函数表达式**，应用于递归中自我调用：

```javascript
var math = {
  'factorial': function factorial(n) {
  if (n <= 1)
    return 1;
  return n \* factorial(n - 1);
  }
};
```

被函数表达式赋值的那个变量会有一个 name 属性，如果你把这个变量赋值给另一个变量的话，这个 name 属性的值也不会改变。

```javascript
var foo = function () {}
foo.name // "foo"
;('foo')
foo.name = 'aaa'
;('aaa')
foo.name
;('foo')
```

实际上被赋值的变量引用了函数，函数名称是不变的。

函数表达式更多被当做回调函数使用：

```javascript
button.addEventListener('click', function (event) {
  console.log('button is clicked!')
})
```

函数声明就是语句，`function foo () {}`，而函数表达式，`function () {}`，本身是一个值，所以在回调中无法使用函数声明。

### 使用对象字面量和函数表达式作为语句

我们已经看到，一些表达式和语句是无法区分的，相同的代码作用不同，这取决于它出现在表达式上下文会还是语句上下文中。通常这两个上下文是明显分开的。但是，对于表达式语句，会有重叠：在这里，表达式出现在语句上下文中。为了避免歧义，JavaScript 语法禁止表达式语句以花括号或关键字 function 开头。

但是，如果你想写一个以 `{` 或 `functon` 开头的表达式语句呢？ **你可以将它放在圆括号中，这样不会改变它的结果，而且可以确保它出现在表达式（expression-only）上下文中**。看两个例子：`eval` 和立即执行函数表达式（`IIFE`）。

#### eval

eval 在语句上下文中解析它的参数。如果你想让 eval 返回一个对象，可以给对象字面量加上圆括号：

```javascript
eval('{ foo: 123 }')
123
eval('({ foo: 123 })')
{
  foo: 123
}
```

#### 立即执行函数表达式（IIFEs）

以下是一个立即执行函数表达式：

```javascript
;(function () {
  return 'abc'
})()
// 'abc'
```

如果省略括号，就会出现语法错误（函数声明不能是匿名的）：

```javascript
function () { return "abc" }()
VM6752:1 Uncaught SyntaxError: Function statements require a function name
```

如果加上名字，仍然报错（函数声明不能立即执行）：

```javascript
function foo() { return "abc" }()
VM6757:1 Uncaught SyntaxError: Unexpected token )
```

另一个确保表达式在表达式上下文中被解析的方式是使用一元运算符，如 `+` 或 `!`。但是和圆括号相反，这些运算符会改变表达式结果。如果不需要也 OK。

```javascript
+function () { console.log("hello") }()
VM6762:1 hello
NaN
```

所以，IIFEs 的原理是：函数本不能作为表达式出现（指值 `function () {}`，而不是表达式 `let foo = function () {}`），但是要立即执行函数，可以将其转为表达式，圆括号将其变为表达式。

#### 连接 IIFEs

连接 IIFEs，不要忘记分号：

```javascript
;(function () {})()((function () {})())
// TypeError: undefined is not a function
```

## 参考

- [https://en.wikipedia.org/wiki/Statement*(computer*science)](<https://en.wikipedia.org/wiki/Statement*(computer*science)>)
- [https://zh.wikipedia.org/wiki/%E8%A1%A8%E7%A4%BA%E5%BC%8F](https://zh.wikipedia.org/wiki/%E8%A1%A8%E7%A4%BA%E5%BC%8F)
- [https://en.wikipedia.org/wiki/Expression\*(computer_science)](<https://en.wikipedia.org/wiki/Expression*(computer_science)>)
- [https://www.zhihu.com/question/20750344/answer/487107831](https://www.zhihu.com/question/20750344/answer/487107831)
- [https://2ality.com/2012/09/expressions-vs-statements.html](https://2ality.com/2012/09/expressions-vs-statements.html)
- [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function)
- [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/function](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/function)
