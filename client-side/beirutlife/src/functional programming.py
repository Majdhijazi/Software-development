#Only final data structure
original_list = [1, 2, 3, 4, 5]
squared_generator = (x**2 for x in original_list)
print(list(squared_generator))







#(mostly) side-effect-free functions
def add_numbers(a, b):
    return a + b

result = add_numbers(3, 4)
print(result)





#the use of higher-order function
def apply_operation(operation, a, b):
    return operation(a, b)

def multiply(x, y):
    return x * y

result = apply_operation(multiply, 3, 4)
print(result) 


#Function as parameter and returns value
def multiplier(factor):
    def multiply(x):
        return x * factor
    return multiply

double = multiplier(2)
triple = multiplier(3)

print(double(5))  
print(triple(5))

#use closures/anonymous functions
multiply = lambda x, y: x * y
result = multiply(3, 4)
print(result) 