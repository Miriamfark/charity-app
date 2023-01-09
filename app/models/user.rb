class User < ApplicationRecord
    has_secure_password
    validates :password, presence: true
    validates :username, uniqueness: true, presence: true
    has_many :donations
    has_many :recipients, through: :donations
end
