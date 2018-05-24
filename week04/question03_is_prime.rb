

p "pls enter a number to check if prime"
input = gets.chomp.to_i

def is_prime (num)
    output = true
    i = num - 1
        loop do
            output = false if num%i==0 
            i -=1
            break if (i == 1) or (output==false) 
        end
    output
end

puts "Is your input a prime number?" 
puts is_prime(input)

# Question 3
# Write a Ruby method called: is_prime. The function must take a number n and it should return true or false whether the argument passed (n) is a prime number or not. A prime number is a number that is divisible only by 1 and itself. Ruby has a built in library called 'prime', dont use this library, build this from scratch.

