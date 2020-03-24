class Survivor < ApplicationRecord
  belongs_to :tool
  belongs_to :shelter
end
