class Post < ApplicationRecord
  belongs_to :user
  mount_uploader :cover, CoverUploader

  has_one :en, class_name: "I18n::EnPost", foreign_key: :post_id, dependent: :destroy
  accepts_nested_attributes_for :en

  has_one :ru, class_name: "I18n::RuPost", foreign_key: :post_id, dependent: :destroy
  accepts_nested_attributes_for :ru

  validates :cover, presence: true if Rails.env.production?

  scope :latest, -> { order(created_at: :desc) }
end
