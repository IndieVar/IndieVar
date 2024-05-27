class Message < ApplicationRecord
  validates :name, :email, :text, presence: true
end
