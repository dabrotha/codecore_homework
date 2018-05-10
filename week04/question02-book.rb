

class Book
    def initialize (title, chapters)
        chapters = chapters.to_a
        @chapters = chapters
        @title = title
    end

    def add_chapter (chapter)
        @chapters.push(chapter)
    end

    def chapters
        puts "Your book: #{@title} has #{@chapters.length} chapters: "
        @chapters.each {|x| puts x }
    end

end
#example of usage
book_a = Book.new('book', ['ch1', 'ch2'])
book_a.add_chapter('ch3')
book_a.chapters


# Question 2
# Build a Ruby class called Book. Objects of the Book class must have two attributes: title and chapters. Objects must have two methods: add_chapter and chapters. The add_chapter method adds a chapter by giving it a title. The chapters method should display the number of chapters and lists all the chapters as in:

# book = Book.new
# book.title = "My Awesome Book"
# book.add_chapter("My Awesome Chapter 1")
# book.add_chapter("My Awesome Chapter 2")
# book.chapters


# # This should print:
# # Your book: My Awesome Book has 2 chapters:
# # 1. My Awesome Chapter 1
# # 2. My Awesome Chapter 2