class User < ApplicationRecord
  has_and_belongs_to_many :trips

  validates :email, :first_name, :last_name, presence: true
  validates :email, uniqueness: true
  has_secure_password
end
