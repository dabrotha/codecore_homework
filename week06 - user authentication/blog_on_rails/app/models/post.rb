
class Post < ApplicationRecord
    
    belongs_to :user
    validates :title, uniqueness: true
    validates :body, presence: true
    validates_length_of :body, :minimum => 50, :allow_blank => false
    has_many :comments, dependent: :destroy
    
    
end



