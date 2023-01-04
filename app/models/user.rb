class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: true
    has_many :donations
    has_many :recipients, through: :donations
end
