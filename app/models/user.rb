class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :api

  enum role: [:user, :moderator, :admin]

  after_initialize :set_default_role, if: :new_record?

  mount_uploader :avatar, ImageUploader

  def set_default_role
    self.role ||= :user
  end

  attr_accessor :current_password
  validates :name, :email, :password, :password_confirmation, presence: true, on: :create
  validates :password, confirmation: true
  validate :current_password_validation, on: :update

  def current_password_validation
    return errors.add(:current_password, "Can't be blank") if current_password.blank?
    unless User.find(id).valid_password?(current_password)
      errors.add(:current_password, "is incorrect.")
    end
  end

end
