class I18n::RuPost < ApplicationRecord
  self.table_name = "ru_posts"

  belongs_to :post, class_name: "Post", foreign_key: "post_id"

  validates :title, :category, :desc, :content, presence: true
end
