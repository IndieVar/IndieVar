class I18n::RuPost < ApplicationRecord
  self.table_name = "ru_posts"

  belongs_to :post, optional: true

  validates :title, :category, :desc, :content, presence: true
end
