class Tool < ApplicationRecord
    has_many :survivors
    has_many :shelters, through: :survivors
end
