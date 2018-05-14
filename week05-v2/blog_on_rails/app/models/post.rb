
class Post < ApplicationRecord

    validates :title, uniqueness: true
    validates :body, presence: true

end



