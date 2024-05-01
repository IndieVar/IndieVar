class Post < ApplicationRecord
  belongs_to :user
  mount_uploader :cover, CoverUploader

  validates :title, :category, :desc, :content, presence: true
  # validates :cover, presence: true
end
