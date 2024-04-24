class Quote < ApplicationRecord
  validates :ru, presence: true
  validates :en, presence: true
end
