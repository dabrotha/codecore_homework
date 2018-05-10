
module HelperMethods
    def titleize (value)
        value = value.split(" ")
        value.map! {|x| 
        if (x.to_s == 'in') or (x.to_s == "the") or (x.to_s == "of") or (x.to_s == "and") or (x.to_s == "or") or (x.to_s == "from")
            x #without x here, we end up with nil in array
        else 
            x = x.capitalize
        end }
        puts value.join(' ')
    end
end


# Create a module called HelperMethods that include a method called titleize that takes in a string and returns the string after capitalizing each of its words. For example, if you pass to the method a "hello world" you should get back "Hello World". titleize should not capitalize the following words: in, the, of, and, or, from. Then write a piece of code to demonstrate the difference between include and extend in using Ruby modules with classes to include methods. Make sure to demonstrate calling the titleize methods with your code.