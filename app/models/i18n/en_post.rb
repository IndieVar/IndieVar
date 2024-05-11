class I18n::EnPost < ApplicationRecord
  self.table_name = "en_posts"

  belongs_to :post, optional: true

  validates :title, :category, :desc, :content, presence: true
end
