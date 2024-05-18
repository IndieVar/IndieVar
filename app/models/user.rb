class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :api

  enum role: [:user, :moderator, :admin]

  after_initialize :set_default_role, if: :new_record?

  mount_uploader :avatar, ImageUploader

  def set_default_role
    self.role ||= :user
  end
end
