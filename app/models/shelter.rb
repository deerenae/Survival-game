class Shelter < ApplicationRecord
    has_many :survivors
    has_many :tools, through: :survivors
end
