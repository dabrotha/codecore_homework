

major_cities = {BC: ["Vancouver", "Victoria", "Prince George"], AB: ["Edmonton", "Calgary"]}

#solution: cities_report method takes a hash and iterates through each key and then for each x of a value of a key,
# it returns depending on conditional a city name, a city name with coma or a city name with "and". Then
# this method puts as requested amount of cities and value

def cities_report (hash)
    hash.each do |key, value|
        amount = value.length
        i = amount
        cities = []
        value.each do |x|
                if i==1
                    cities.push("#{x}")
                elsif i==2
                    x = x + " and"
                    cities.push("#{x}")
                else 
                    x = x + ","
                    cities.push("#{x}")
                end
                i-=1
        end
        cities = cities.join(' ')
        puts "#{key} has #{amount} main citites: #{cities}"
    end
end

cities_report(major_cities)

# Given a ruby Hash that looks like this:

# major_cities = {BC: ["Vancouver", "Victoria", "Prince George"], AB: ["Edmonton", "Calgary"]}
# Write a piece of code that loops through the object and prints the following to the console:

# BC has 3 main cities: Vancouver, Victoria, Prince George
# AB has 2 main cities: Edmonton, Calgary
# Add an and before the last one:

# BC has 3 main cities: Vancouver, Victoria and Prince George
# AB has 2 main cities: Edmonton and Calgary
