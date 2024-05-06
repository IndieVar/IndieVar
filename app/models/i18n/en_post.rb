class I18n::EnPost < ApplicationRecord
  self.table_name = "en_posts"

  belongs_to :post, class_name: "Post", foreign_key: "post_id"

  validates :title, :category, :desc, :content, presence: true
end
